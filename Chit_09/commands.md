# Git and GitHub Version Control

## 1. Initializing Git
```bash
git init
```

## 2. Configuring User
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

## 3. Creating Repository on GitHub
1. Login to GitHub.
2. Click "+" -> "New repository".
3. Name it and click "Create repository".

## 4. Pushing Code to GitHub
```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial commit of WAD programs"

# Link to GitHub repository
git remote add origin https://github.com/username/repository-name.git

# Push code
git push -u origin main
```

## 5. Basic Commands
- `git status`: Check state of files.
- `git log`: View commit history.
- `git pull`: Get latest changes from remote.
