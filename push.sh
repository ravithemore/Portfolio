#!/bin/bash

# Navigate to script directory
cd "$(dirname "$0")"

echo "Initializing git repository..."
git init

echo "Adding remote origin..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/ravithemore/Portfolio.git

echo "Configuring default branch to main..."
git branch -M main

echo "Staging files..."
git add .

echo "Creating initial commit..."
git commit -m "Initial commit - Ravi Damor Portfolio"

echo "Pushing to GitHub..."
git push -u origin main

echo "Done!"
