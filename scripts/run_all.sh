#!/bin/bash

# run_all.sh - Complete local development setup automation
# This script handles: Docker check → DynamoDB start → Table setup → Dev server

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║     BSM Local Development Setup Automation        ║${NC}"
echo -e "${BLUE}╔════════════════════════════════════════════════════╗${NC}"
echo ""

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if Docker is running
check_docker() {
    echo -e "${YELLOW}[1/5] Checking Docker...${NC}"

    if ! command_exists docker; then
        echo -e "${RED}❌ Docker is not installed!${NC}"
        echo -e "Please install Docker Desktop: https://www.docker.com/products/docker-desktop"
        exit 1
    fi

    if ! docker info >/dev/null 2>&1; then
        echo -e "${RED}❌ Docker is not running!${NC}"
        echo -e "Please start Docker Desktop and try again."
        exit 1
    fi

    echo -e "${GREEN}✅ Docker is running${NC}"
}

# Function to start DynamoDB Local
start_dynamodb() {
    echo -e "\n${YELLOW}[2/5] Starting DynamoDB Local...${NC}"

    cd frontend

    # Check if DynamoDB container is already running
    if docker ps | grep -q "bsm-dynamodb-local"; then
        echo -e "${GREEN}✅ DynamoDB Local is already running${NC}"
    else
        npm run db:start
        echo -e "${GREEN}✅ DynamoDB Local started${NC}"
    fi

    cd ..
}

# Function to wait for DynamoDB to be ready
wait_for_dynamodb() {
    echo -e "\n${YELLOW}[3/5] Waiting for DynamoDB to be ready...${NC}"

    MAX_ATTEMPTS=30
    ATTEMPT=0

    while [ $ATTEMPT -lt $MAX_ATTEMPTS ]; do
        if aws dynamodb list-tables --endpoint-url http://localhost:8000 --region ap-southeast-2 >/dev/null 2>&1; then
            echo -e "${GREEN}✅ DynamoDB is ready${NC}"
            return 0
        fi

        ATTEMPT=$((ATTEMPT + 1))
        echo -n "."
        sleep 1
    done

    echo -e "\n${RED}❌ DynamoDB failed to start after ${MAX_ATTEMPTS} seconds${NC}"
    exit 1
}

# Function to setup DynamoDB tables
setup_tables() {
    echo -e "\n${YELLOW}[4/5] Setting up DynamoDB tables...${NC}"

    cd frontend

    # Check if tables already exist
    if aws dynamodb describe-table --table-name bsm-members-local --endpoint-url http://localhost:8000 --region ap-southeast-2 >/dev/null 2>&1; then
        echo -e "${GREEN}✅ Tables already exist${NC}"
    else
        npm run db:setup-local
        echo -e "${GREEN}✅ Tables created successfully${NC}"
    fi

    cd ..
}

# Function to start Next.js dev server
start_dev_server() {
    echo -e "\n${YELLOW}[5/5] Starting Next.js dev server...${NC}"
    echo -e "${BLUE}──────────────────────────────────────────────────${NC}"
    echo ""
    echo -e "${GREEN}✅ Local development environment is ready!${NC}"
    echo ""
    echo -e "${BLUE}📋 Important Information:${NC}"
    echo -e "   • Frontend: ${GREEN}http://localhost:3000${NC}"
    echo -e "   • DynamoDB Local: ${GREEN}http://localhost:8000${NC}"
    echo -e "   • Signup page: ${GREEN}http://localhost:3000/auth/signup${NC}"
    echo -e "   • Signin page: ${GREEN}http://localhost:3000/auth/signin${NC}"
    echo ""
    echo -e "${BLUE}🧪 Testing Features:${NC}"
    echo -e "   ✓ reCAPTCHA v3 (bot protection)"
    echo -e "   ✓ Google OAuth sign-in"
    echo -e "   ✓ Email/password authentication"
    echo ""
    echo -e "${BLUE}🛠️  Useful Commands:${NC}"
    echo -e "   • Check DynamoDB status: ${YELLOW}cd frontend && npm run db:status${NC}"
    echo -e "   • View all members: ${YELLOW}cd frontend && npm run db:scan${NC}"
    echo -e "   • Stop DynamoDB: ${YELLOW}cd frontend && npm run db:stop${NC}"
    echo -e "   • Reset tables: ${YELLOW}cd frontend && npm run db:reset${NC}"
    echo ""
    echo -e "${BLUE}──────────────────────────────────────────────────${NC}"
    echo -e "${YELLOW}Press Ctrl+C to stop the dev server${NC}"
    echo ""

    cd frontend
    npm run dev
}

# Main execution
main() {
    check_docker
    start_dynamodb
    wait_for_dynamodb
    setup_tables
    start_dev_server
}

# Run the main function
main
