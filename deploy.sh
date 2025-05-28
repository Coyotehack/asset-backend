#!/bin/bash

echo "🔧 Updating system..."
sudo apt update && sudo apt install -y curl git nodejs npm postgresql docker.io docker-compose

echo "🐘 Configuring PostgreSQL..."
sudo systemctl start postgresql
sudo -u postgres psql <<EOF
CREATE USER assetuser WITH PASSWORD 'yourpassword';
CREATE DATABASE assetdb;
GRANT ALL PRIVILEGES ON DATABASE assetdb TO assetuser;
EOF

echo "📁 Cloning project or assuming it's already copied..."
cd "$(dirname "$0")"

echo "📦 Installing Node.js dependencies..."
npm install

echo "🐳 Starting containers with Docker Compose..."
docker-compose up -d --build

echo "✅ Deployment complete. API should be available on port 5000."
