#!/bin/bash

# Set the paths
PROJECT_DIR="/var/www/html/iwant-food.com/public_html"
BACKUP_DIR="/var/www/html/iwant-food.com"

# Create the backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Copy the node_modules folder
cp -r $PROJECT_DIR/node_modules $BACKUP_DIR