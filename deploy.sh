#!/bin/bash

echo "🚀 IndiGo Avatar Booking - Quick Deploy Script"
echo "=============================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check if git is initialized
echo -e "${BLUE}Step 1: Checking Git...${NC}"
if [ ! -d .git ]; then
    echo "Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: IndiGo Avatar Booking System"
    echo -e "${GREEN}✓ Git initialized${NC}"
else
    echo -e "${GREEN}✓ Git already initialized${NC}"
fi
echo ""

# Step 2: GitHub setup
echo -e "${BLUE}Step 2: GitHub Setup${NC}"
echo -e "${YELLOW}Please create a GitHub repository:${NC}"
echo "1. Go to https://github.com/new"
echo "2. Repository name: indigo-avatar-booking"
echo "3. Make it Public"
echo "4. Don't initialize with README"
echo ""
read -p "Enter your GitHub username: " github_user
read -p "Enter repository name (default: indigo-avatar-booking): " repo_name
repo_name=${repo_name:-indigo-avatar-booking}

echo "Adding remote..."
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$github_user/$repo_name.git"
git branch -M main

echo -e "${YELLOW}Pushing to GitHub...${NC}"
git push -u origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Code pushed to GitHub${NC}"
else
    echo -e "${YELLOW}⚠ Push failed. You may need to authenticate or create the repo first${NC}"
    echo "Run: git push -u origin main"
fi
echo ""

# Step 3: Render deployment instructions
echo -e "${BLUE}Step 3: Deploy on Render.com${NC}"
echo ""
echo "📋 Follow these steps:"
echo "1. Go to https://render.com and sign up (free)"
echo "2. Click 'New +' → 'Web Service'"
echo "3. Connect GitHub and select: $github_user/$repo_name"
echo "4. Configure:"
echo "   - Name: indigo-avatar-backend"
echo "   - Root Directory: backend"
echo "   - Environment: Python 3"
echo "   - Build Command: pip install -r requirements.txt"
echo "   - Start Command: uvicorn main:app --host 0.0.0.0 --port \$PORT"
echo "   - Plan: Free"
echo "5. Click 'Create Web Service'"
echo ""
echo "⏳ Wait 3-5 minutes for deployment..."
echo ""

read -p "Press Enter after deployment completes..."

# Step 4: Get Render URL
echo ""
read -p "Enter your Render URL (e.g., https://indigo-avatar-backend.onrender.com): " render_url

# Step 5: Update App.js
echo -e "${BLUE}Step 4: Updating mobile app...${NC}"
if [ -f "mobile-app/App.js" ]; then
    # Backup original
    cp mobile-app/App.js mobile-app/App.js.backup
    
    # Update API_BASE
    sed -i.bak "s|const API_BASE = '.*';|const API_BASE = '$render_url';|g" mobile-app/App.js
    rm mobile-app/App.js.bak
    
    echo -e "${GREEN}✓ App.js updated with Render URL${NC}"
else
    echo -e "${YELLOW}⚠ mobile-app/App.js not found${NC}"
fi
echo ""

# Step 6: EAS Setup
echo -e "${BLUE}Step 5: Publishing to Expo${NC}"
echo ""
echo "Run these commands:"
echo ""
echo -e "${GREEN}cd mobile-app${NC}"
echo -e "${GREEN}npm install -g eas-cli${NC}"
echo -e "${GREEN}eas login${NC}"
echo -e "${GREEN}eas update:configure${NC}"
echo -e "${GREEN}eas update --branch production --message 'Public release'${NC}"
echo ""
echo "🎉 After publishing, share the Expo link with anyone!"
echo ""
echo "=============================================="
echo "📱 Users need: Expo Go app (free on App Store/Play Store)"
echo "🌍 Your app: Works from anywhere in the world"
echo "✅ No VPN, no same WiFi, no APK needed"
echo "=============================================="
