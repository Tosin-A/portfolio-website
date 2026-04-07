# Coresense Real

A TypeScript project with ESLint, Prettier, and Git branch workflow.

## Project Structure

```
.
├── src/              # Source TypeScript files
├── dist/             # Compiled JavaScript output (generated)
├── tests/            # Test files
├── package.json      # Dependencies and scripts
├── tsconfig.json     # TypeScript configuration
├── .eslintrc.json    # ESLint configuration
├── .prettierrc       # Prettier configuration
└── README.md         # This file
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Watch mode for development
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Type check without emitting files

## Git Branch Workflow

This project follows a feature branch workflow. Here's how to work with it:

### Branch Structure

- `main` - Production-ready code (protected)
- `develop` - Integration branch for features
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Hotfix branches for production

### Workflow Steps

#### 1. Starting a New Feature

```bash
# Ensure you're on the latest develop branch
git checkout develop
git pull origin develop

# Create and switch to a new feature branch
git checkout -b feature/your-feature-name

# Start coding...
```

#### 2. Working on a Feature

```bash
# Make your changes, then:
git add .
git commit -m "feat: description of your changes"

# Push your feature branch
git push origin feature/your-feature-name
```

#### 3. Committing Changes

Follow conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example:
```bash
git commit -m "feat: add user authentication"
git commit -m "fix: resolve login validation issue"
```

#### 4. Before Pushing - Quality Checks

Always run these before pushing:

```bash
# Type check
npm run type-check

# Lint check
npm run lint

# Format check
npm run format:check

# Fix any issues
npm run lint:fix
npm run format
```

#### 5. Merging a Feature

```bash
# Ensure your feature branch is up to date
git checkout feature/your-feature-name
git pull origin develop
git rebase develop  # or merge if preferred

# Push your updated branch
git push origin feature/your-feature-name

# Create a Pull Request to merge into develop
# After PR approval and merge, delete the feature branch
```

#### 6. Bug Fixes

```bash
# Create a bugfix branch from develop
git checkout develop
git pull origin develop
git checkout -b bugfix/issue-description

# Make fixes and commit
git commit -m "fix: description of the fix"

# Push and create PR to develop
```

#### 7. Hotfixes (Production Issues)

```bash
# Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-issue

# Make the fix
git commit -m "fix: critical production issue"

# Push and create PR to both main and develop
```

### Best Practices

1. **Keep branches small** - One feature per branch
2. **Regular commits** - Commit often with clear messages
3. **Stay updated** - Regularly pull from develop/main
4. **Clean up** - Delete merged branches
5. **Code quality** - Always run lint and format before committing
6. **Test before PR** - Ensure everything works before creating a PR

## Code Quality

### TypeScript

- Strict mode enabled
- All files must be TypeScript (.ts)
- Source files in `src/`
- Compiled output in `dist/`

### ESLint

- TypeScript-aware linting
- Prettier integration
- Unused variables are errors

### Prettier

- Consistent code formatting
- Automatic formatting on save (if configured in IDE)
- Run `npm run format` before committing

## IDE Setup

### VS Code

Recommended extensions:
- ESLint
- Prettier
- TypeScript and JavaScript Language Features

Add to `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

