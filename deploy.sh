#!/bin/bash

# Exit on error
set -e

# Define variables
REPO_DIR="/var/www/smile-cleaning/current"
NODE_ENV=${1:-"production"} # Default to production if no argument is given

# Check if the script is run from the correct directory
if [ ! -d "$REPO_DIR/.git" ]; then
  echo "Error: Not in a git repository. Make sure you are in the correct directory."
  exit 1
fi

# Pull the latest changes
echo "Pulling latest changes..."
git -C $REPO_DIR pull origin main  # Change to your branch if needed

# Install dependencies
echo "Installing dependencies..."
npm install --production --prefix $REPO_DIR

# Build the application
echo "Building the application..."
npm run build --prefix $REPO_DIR

# Restart the application with PM2
echo "Restarting the application..."
pm2 reload ecosystem.config.js --env $NODE_ENV

echo "Deployment completed successfully."

