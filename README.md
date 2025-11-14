# ts-starter-library

A TypeScript library starter template with automated releases via Changesets.

## Getting Started

### 1. Use This Template

Click "Use this template" on GitHub or clone:

```sh
git clone https://github.com/pwalker/ts-starter-library my-library
cd my-library
```

### 2. Update Package Info

Edit `package.json`:

```json
{
  "name": "@your-scope/your-library",
  "version": "0.1.0",
  "description": "Your library description",
  "author": {
    "name": "Your Name",
    "email": "your@email.com",
    "url": "https://yoursite.com"
  },
  "repository": "https://github.com/username/repo-name"
}
```

### 3. Install Dependencies

```sh
pnpm install
```

### 4. Configure GitHub & NPM

#### Generate NPM Token

1. Log in to [npmjs.com](https://www.npmjs.com)
2. Go to Access Tokens → Generate New Token → Classic Token
3. Select "Automation" type
4. Copy the token

#### Add to GitHub Secrets

1. Go to your GitHub repo → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `NPM_TOKEN`
4. Value: Paste your NPM token
5. Click "Add secret"

#### Set Branch Permissions (Optional but Recommended)

1. Go to Settings → Branches
2. Add branch protection rule for `main`:
   - Require pull request reviews before merging
   - Require status checks to pass

## Inspiration

- This article by Matt Pocock: https://www.totaltypescript.com/how-to-create-an-npm-package
