# Git and GitHub Version Control

## 1. Setup & Configuration
```bash
git init                                    # Initialize new repo
git config --global user.name "Your Name"   # Set username
git config --global user.email "you@mail.com"  # Set email
git config --list                           # View all config
```

## 2. Create Repository on GitHub
1. Login to GitHub → Click "+" → "New repository"
2. Name it, add description, click "Create repository"

## 3. Basic Workflow
```bash
git status                  # Check file states
git add .                   # Stage all files
git add filename.txt        # Stage specific file
git commit -m "message"     # Commit staged changes
git log                     # View commit history
git log --oneline           # Compact history
```

## 4. Remote & Push
```bash
git remote add origin https://github.com/user/repo.git  # Link remote
git remote -v                    # View remotes
git push -u origin main          # Push to GitHub (first time)
git push                         # Push subsequent commits
git pull                         # Pull latest from remote
git clone https://github.com/user/repo.git   # Clone a repo
```

## 5. Branching
```bash
git branch                  # List branches
git branch feature-x        # Create new branch
git checkout feature-x      # Switch to branch
git checkout -b feature-y   # Create + switch in one step
git merge feature-x         # Merge branch into current
git branch -d feature-x     # Delete branch
```

## 6. Diff & Stash
```bash
git diff                    # Show unstaged changes
git diff --staged           # Show staged changes
git stash                   # Temporarily save changes
git stash list              # List stashed changes
git stash pop               # Restore last stash
```

## 7. Undo & Reset
```bash
git checkout -- filename    # Discard file changes
git reset HEAD filename     # Unstage a file
git reset --soft HEAD~1     # Undo last commit (keep changes)
git reset --hard HEAD~1     # Undo last commit (discard changes)
```

## 8. Tags
```bash
git tag v1.0                # Create lightweight tag
git tag -a v1.0 -m "Release 1.0"  # Annotated tag
git push origin --tags      # Push tags to remote
```

## 9. Other Useful Commands
```bash
git rm filename             # Remove file from repo
git mv old new              # Rename file
git show HEAD               # Show last commit details
git blame filename          # See who changed each line
```
