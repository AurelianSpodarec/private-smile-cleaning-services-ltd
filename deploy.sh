#!/bin/bash

# Exit on error
set -e

# Variables
RELEASES_DIR="/var/www/smile-cleaning/releases"
CURRENT_DIR="/var/www/smile-cleaning/current"
SHARED_DIR="/var/www/smile-cleaning/shared"
TIMESTAMP=$(date +%Y%m%d%H%M%S)
NEW_RELEASE="$RELEASES_DIR/$TIMESTAMP"

# Create a new release directory
mkdir -p $NEW_RELEASE

# Clone or copy the repo into the new release directory
git clone https://github.com/tech-smile-cleaning/smile-web.git $NEW_RELEASE

# Link the shared files
ln -s $SHARED_DIR/.env $NEW_RELEASE/.env
ln -s $SHARED_DIR/uploads $NEW_RELEASE/uploads

# Install dependencies
npm install --production --prefix $NEW_RELEASE

# Build the application
npm run build --prefix $NEW_RELEASE

# Update the symlink to point to the new release
ln -nfs $NEW_RELEASE $CURRENT_DIR

# Restart the application with PM2
pm2 reload ecosystem.config.js --env production

echo "Deployment completed successfully."
