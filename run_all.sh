#!/bin/bash

# Bengali Society of Melbourne (BSM) - Run Development Server
# This script starts the Next.js application for BSM website

echo "🌟 Starting Bengali Society of Melbourne (BSM) development server..."

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

# Check and find available ports
FRONTEND_PORT=3000

if port_in_use $FRONTEND_PORT; then
    NEW_FRONTEND_PORT=$(find_available_port $FRONTEND_PORT)
    echo "⚠️  Port $FRONTEND_PORT is in use. Using port $NEW_FRONTEND_PORT for frontend."
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