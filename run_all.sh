#!/bin/bash

# Bengali Society of Melbourne (BSM) - Run Development Server
# This script starts the Next.js application for BSM website
#
# Usage:
#   ./run_all.sh          - Start the development server
#   ./run_all.sh restart  - Force kill existing processes and restart
#
# The script automatically kills any existing processes on port 3000 before starting

echo "🌟 Starting Bengali Society of Melbourne (BSM) development server..."

# Load environment variables
echo "📋 Loading environment variables..."
if [ -f .env.local ]; then
    echo "   ✅ Loading from .env.local"
    export $(grep -v '^#' .env.local | xargs)
elif [ -f .env ]; then
    echo "   ✅ Loading from .env"
    export $(grep -v '^#' .env | xargs)
else
    echo "   ⚠️  No .env.local or .env file found"
    echo "      Environment variables may not be loaded"
fi

# Verify key environment variables
if [ -n "$NEXT_PUBLIC_GOOGLE_MAPS_API_KEY" ] && [ "$NEXT_PUBLIC_GOOGLE_MAPS_API_KEY" != "your-google-maps-api-key-here" ]; then
    echo "   ✅ Google Maps API Key: Configured"
else
    echo "   ❌ Google Maps API Key: Not configured or using placeholder"
    echo "      Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env.local"
fi

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if port is in use
port_in_use() {
    lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null 2>/dev/null
}

# Function to find available port
find_available_port() {
    local port=$1
    while port_in_use $port; do
        port=$((port + 1))
    done
    echo $port
}

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command_exists node; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version $NODE_VERSION is too old. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Kill any existing processes on port 3000
echo "🔪 Killing any existing processes on port 3000..."
if port_in_use 3000; then
    echo "   🛑 Found existing process on port 3000, terminating..."
    
    # Kill by port using lsof
    PID=$(lsof -ti:3000)
    if [ ! -z "$PID" ]; then
        kill -TERM $PID 2>/dev/null
        sleep 2
        
        # Force kill if still running
        if kill -0 $PID 2>/dev/null; then
            kill -9 $PID 2>/dev/null
        fi
        echo "   ✅ Terminated process $PID on port 3000"
    fi
    
    # Also kill any Next.js related processes
    if command_exists pkill; then
        pkill -f "next-server" 2>/dev/null
        pkill -f "next dev" 2>/dev/null
        pkill -f "node.*next" 2>/dev/null
        echo "   ✅ Cleaned up any remaining Next.js processes"
    fi
    
    # Wait a moment for cleanup
    sleep 1
fi

# Set frontend port (now should be available)
FRONTEND_PORT=3000

# Double-check port is now available
if port_in_use $FRONTEND_PORT; then
    NEW_FRONTEND_PORT=$(find_available_port $FRONTEND_PORT)
    echo "⚠️  Port $FRONTEND_PORT is still in use. Using port $NEW_FRONTEND_PORT for frontend."
    FRONTEND_PORT=$NEW_FRONTEND_PORT
fi

# Start frontend server
echo "⚛️  Setting up Next.js application server..."
cd frontend

# Install Node.js dependencies if not already installed
if [ ! -d "node_modules" ]; then
    echo "🔧 Installing Node.js dependencies..."
    npm install
    if [ $? -eq 0 ]; then
        echo "✅ Node.js dependencies installed successfully"
    else
        echo "❌ Failed to install Node.js dependencies"
        exit 1
    fi
fi

echo "🔥 Starting Next.js development server on http://localhost:$FRONTEND_PORT"

# Start frontend server on the determined port
if [ "$FRONTEND_PORT" != "3000" ]; then
    PORT=$FRONTEND_PORT npm run dev > ../frontend.log 2>&1 &
else
    npm run dev > ../frontend.log 2>&1 &
fi

FRONTEND_PID=$!

cd ..

# Wait for frontend to start
sleep 5

# Check if frontend started successfully
if ! kill -0 $FRONTEND_PID 2>/dev/null; then
    echo "❌ Frontend server failed to start. Check frontend.log for details."
    cat frontend.log
    exit 1
fi

echo ""
echo "🌟 Bengali Society of Melbourne (BSM) website is running!"
echo "   🌐 Website: http://localhost:$FRONTEND_PORT"
echo "   🔌 API Routes: http://localhost:$FRONTEND_PORT/api/*"
echo "   📱 Mobile View: http://localhost:$FRONTEND_PORT (responsive)"
echo ""
echo "📋 Server Status:"
echo "   ✅ Next.js server (PID: $FRONTEND_PID)"
echo ""
echo "📄 Logs:"
echo "   Frontend: tail -f frontend.log"
echo ""
echo "🛑 Press Ctrl+C to stop the server"
echo ""

# Function to cleanup background processes
cleanup() {
    echo ""
    echo "🛑 Stopping development server..."
    
    # Kill background processes gracefully
    if [ ! -z "$FRONTEND_PID" ] && kill -0 $FRONTEND_PID 2>/dev/null; then
        kill $FRONTEND_PID 2>/dev/null
        sleep 1
        if kill -0 $FRONTEND_PID 2>/dev/null; then
            kill -9 $FRONTEND_PID 2>/dev/null
        fi
        echo "   ✅ Next.js server stopped (PID: $FRONTEND_PID)"
    fi
    
    # Clean up any remaining processes on the ports
    if command_exists pkill; then
        pkill -f "next-server" 2>/dev/null
        pkill -f "next dev" 2>/dev/null
    fi
    
    echo "✅ Server stopped successfully!"
    echo "📄 Logs have been saved as frontend.log"
    echo "🚀 Run './run_all.sh' again to restart the server"
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup INT TERM EXIT

# Show real-time logs (optional)
echo "📊 Showing real-time server status... (Press Ctrl+C to stop)"
while true; do
    sleep 10
    if ! kill -0 $FRONTEND_PID 2>/dev/null; then
        echo "❌ Next.js server has stopped unexpectedly!"
        cat frontend.log | tail -10
        cleanup
    fi
done