# Workflow Repository - Course Assignment

## Automated Workflow & Testing Setup

### Contents:

<details>
  <summary>Table of Contents</summary>
  
  [1. Project Overview](#1-project-overview)

[2. Setup & Installation](#2-setup--installation)

[3. Technologies Used](#3-technologies-used)

[4. Folder Structure](#4-folder-structure)

[5. Testing](#5-testing)

[6. Environment Variables](#6-environment-variables)

[7. Git Hooks & Code Quality](#7-git-hooks--code-quality)

[8. Development Workflow](#8-development-workflow)

[9. Scripts](#9-scripts)

[10. Assignment Checklist](#10-assignment-checklist)

</details>

---

## 1. Project Overview

This is a forked repository for the Workflow course assignment. The project is a front-end web application with user authentication and venue management functionality. The focus of this assignment is implementing automated workflow tools including code formatting, linting, unit testing, and end-to-end testing.

The application is built with vanilla JavaScript and styled with Tailwind CSS.

### Assignment Requirements:

- ESLint and Prettier configuration
- Pre-commit hooks for code quality checks
- Unit tests with Vitest
- End-to-end tests with Playwright
- Environment variable management

---

## 2. Setup & Installation

### Prerequisites:

- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

### Installation Steps:

```bash
# Clone your forked repository
git clone <your-fork-url>

# Navigate to project directory
cd workflow-repo-ca

# Install dependencies
npm install

# Set up environment variables
# Copy .env.example to .env and add your credentials
cp .env.example .env

# Install Playwright browsers (for e2e tests)
npx playwright install
```

### Installed Tools:

- **Husky** - Git hooks management
- **lint-staged** - Run linters on staged files
- **Vitest** and **jsdom** - Unit testing
- **Playwright** - End-to-end testing
- **ESLint** - JavaScript linting
- **Prettier** - Code formatting
- **Tailwind CSS** - Styling

---

## 3. Technologies Used

### Core Technologies:

- **HTML5** - Semantic markup
- **CSS3** - Styling with Tailwind CSS
- **JavaScript (ES6+)** - Modular architecture with ES modules

### Development Tools:

- **Husky (v9.1.7)** - Git hooks management
- **lint-staged (v16.2.7)** - Run linters on staged files
- **ESLint (v9.39.2)** - JavaScript linting with flat config
- **Prettier (v3.7.4)** - Code formatting
- **Vitest (v4.0.15)** - Unit testing framework
- **jsdom** - Browser environment simulation for unit tests
- **Playwright** - End-to-end testing framework
- **Tailwind CSS (v3.4.12)** - Utility-first CSS framework

---

## 4. Folder Structure

```
├── css/
│   ├── input.css           # Tailwind source file
│   └── style.css           # Compiled Tailwind output
├── js/
│   ├── config.js           # Application configuration
│   ├── main.js            # Main entry point
│   ├── api/               # API communication
│   │   ├── auth/         # Authentication endpoints
│   │   └── venues/       # Venue endpoints
│   ├── constants/        # Constants and messages
│   ├── listeners/        # Event listeners
│   │   ├── auth/        # Auth-related listeners
│   │   └── venues/      # Venue-related listeners
│   ├── ui/              # UI rendering
│   │   ├── common/     # Shared UI components
│   │   └── venues/     # Venue-specific UI
│   └── utils/          # Utility functions
│       ├── getQueryParam.js
│       ├── storage.js
│       ├── userInterface.js
│       └── validation.js
├── login/              # Login page
├── register/           # Register page
├── venue/             # Venue details page
├── index.html         # Home page
├── tests/             # End-to-end tests
│   ├── login.test.js
│   └── navigation.test.js
├── package.json       # Project dependencies
├── eslint.config.mjs  # ESLint configuration
├── vitest.config.js   # Vitest configuration
├── playwright.config.js # Playwright configuration
├── tailwind.config.js # Tailwind configuration
├── .env.example      # Environment variable template
├── .gitignore        # Git ignore rules (includes .env)
└── .husky/           # Git hooks
    └── pre-commit    # Pre-commit hook script
```

---

## 5. Testing

This project includes both unit tests and end-to-end tests.

### Unit Tests (Vitest)

Unit tests use **Vitest** with **jsdom** for browser environment simulation.

**Run unit tests:**

```bash
npm test
```

**Test Files:**

- `js/utils/userInterface.test.js`
- `js/utils/storage.test.js`

**Test Cases:**

**`isActivePath` Function:**

- Returns true when current path matches href exactly
- Returns true for root path ("/") when path is "/" or "/index.html"
- Returns true when current path includes href
- Returns false when paths don't match

**`getUsername` Function:**

- Returns the name from the user object in storage
- Returns null when no user exists in storage

**Configuration:**
Vitest uses the **jsdom** environment to simulate browser APIs like `localStorage`.

---

### End-to-End Tests (Playwright)

End-to-end tests use **Playwright** to test user workflows in a real browser.

**Run e2e tests:**

```bash
npm run test:e2e
```

**Run e2e tests in UI mode:**

```bash
npm run test:e2e:ui
```

**Test Files:**

- `tests/login.test.js`
- `tests/navigation.test.js`

**Test Cases:**

**Login Tests:**

- User can successfully log in with valid credentials from environment variables
- User sees an error message with invalid credentials

**Navigation Tests:**

- Navigates to the home page
- Waits for the venue list to load
- Clicks the first venue
- Verifies "Venue details" heading appears on the venue details page

**Configuration:**
Playwright is configured to run tests in Chromium, Firefox, and WebKit browsers.
I suggest Vivaldi, on the basis of "I like it it's cool".

---

## 6. Environment Variables

This project requires environment variables for end-to-end testing.

**Required Variables:**

Create a `.env` file in the project root with the following variables:

```
TEST_EMAIL=your-test-email@example.com
TEST_PASSWORD=your-test-password
```

**Setup:**

1. Copy `.env.example` to `.env`
2. Add your test user credentials
3. Never commit the `.env` file (it's in `.gitignore`)

**Note:** If the provided login credentials don't work, create a new user by running the project and using the register form.

---

## 7. Git Hooks & Code Quality

### Pre-comit Hook

The pre-commit hook runs automatically before each commit:

1. **Prettier** formats all staged HTML and JavaScript files
2. **ESLint** lints and auto-fixes staged JavaScript files
3. Commit is blocked if linting errors cannot be auto-fixed

**Configuration (`package.json`):**

```json
"lint-staged": {
  "*.js": [
    "prettier --write",
    "eslint --fix"
  ],
  "*.html": [
    "prettier --write"
  ]
}
```

**Hook Location:**
`.husky/pre-commit`

**How It Works:**

- Works with both terminal and VS Code GUI commits
- Automatically formats code before committing
- Prevents commits with linting errors

### Prettier Configuration

Prettier is configured with standard defaults in `.prettierrc` and runs automatically on staged files before commit.

---

## 8. Development Workflow

### Standard Development Process:

1. **Start Tailwind watch mode:**

   ```bash
   npm run dev
   ```

2. **Make changes** to HTML, CSS, or JavaScript files

3. **Run tests:**

   ```bash
   npm test           # Unit tests
   npm run test:e2e   # E2E tests
   ```

4. **Commit changes:**

   ```bash
   git add .
   git commit -m "Description of changes"
   ```

   Pre-commit hook runs automatically and formats/lints staged files.

5. **Push to repository:**
   ```bash
   git push
   ```

### Assignment Workflow:

This project follows a Pull Request workflow:

1. All work is done in the `workflow` branch
2. Changes are committed to the `workflow` branch
3. A Pull Request is opened from `workflow` to the default branch
4. The PR is submitted for review (not merged)

---

## 9. Scripts

### Available Commands:

```bash
# Development
npm run dev              # Start Tailwind CSS in watch mode

# Testing
npm test                 # Run unit tests (Vitest)
npm run test:e2e         # Run end-to-end tests (Playwright)
npm run test:e2e:ui      # Run e2e tests in UI mode

# Setup
npm run prepare          # Install Husky Git hooks (runs automatically after npm install)
```

### Script Details:

- **`dev`** - Watches `css/input.css` and rebuilds `css/style.css` on changes
- **`test`** - Runs Vitest unit test suite
- **`test:e2e`** - Runs Playwright e2e tests in headless mode
- **`test:e2e:ui`** - Opens Playwright test UI for debugging tests
- **`prepare`** - Installs Husky Git hooks (runs automatically after installation)

---

## 10. Assignment Checklist

### Development Tools:

- [x] ESLint installed and configured with test globals
- [x] Prettier installed and configured
- [x] Pre-commit hooks set up with Husky and lint-staged

### Testing:

- [x] Vitest installed and configured
- [x] Unit tests written for `isActivePath` function (4 test cases)
- [x] Unit tests written for `getUsername` function (2 test cases)
- [x] Playwright installed and configured
- [x] E2E tests written for login functionality (2 test cases)
- [x] E2E tests written for navigation (1 test case)

### Documentation:

- [x] README updated with installation instructions
- [x] README includes all npm scripts
- [x] README includes environment variable requirements
- [x] `.env` added to `.gitignore`
- [x] `.env.example` file created

### Repository:

- [ ] Pull Request opened from `workflow` branch
- [ ] PR link submitted for review

---

_This is a course assignment for the Noroff Front-End Development Workflow course, demonstrating automated workflow practices and testing methodologies._
