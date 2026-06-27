# Getting Started

<cite>
**Referenced Files in This Document**
- [package.json](file://package.json)
- [README.md](file://README.md)
- [vite.config.ts](file://vite.config.ts)
- [eslint.config.js](file://eslint.config.js)
- [tsconfig.json](file://tsconfig.json)
- [tsconfig.app.json](file://tsconfig.app.json)
- [index.html](file://index.html)
- [src/main.tsx](file://src/main.tsx)
- [src/App.tsx](file://src/App.tsx)
- [src/index.css](file://src/index.css)
- [src/components/Navbar.tsx](file://src/components/Navbar.tsx)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Development Workflow](#development-workflow)
5. [Project Structure](#project-structure)
6. [Customization Guide](#customization-guide)
7. [Build and Preview](#build-and-preview)
8. [Troubleshooting](#troubleshooting)
9. [Verification Checklist](#verification-checklist)
10. [Conclusion](#conclusion)

## Introduction
This guide helps you set up and run the personal portfolio website locally. It covers prerequisites, installation, development workflow, build process, customization, and troubleshooting. The project uses React, TypeScript, Vite, Tailwind CSS, and ESLint.

## Prerequisites
- Operating system: Windows, macOS, or Linux
- Node.js: Version matching the project’s requirements (see below)
- Package manager: npm (ships with Node.js) or yarn
- Git: For cloning the repository

Node.js version requirement
- The project uses modern JavaScript/TypeScript features and tooling compatible with recent LTS versions of Node.js. Install the latest LTS version recommended by the Node.js project to avoid compatibility issues with Vite, TypeScript, and related tooling.

Package managers
- npm: Comes bundled with Node.js. Use npm commands in this guide.
- yarn: Optional. If you prefer yarn, replace npm commands with yarn equivalents in the steps below.

Why these tools
- React and React DOM power the UI framework.
- TypeScript adds static typing and improved developer experience.
- Vite provides fast development builds and hot module replacement (HMR).
- Tailwind CSS offers utility-first styling.
- ESLint enforces code quality and consistency.

**Section sources**
- [package.json:12-33](file://package.json#L12-L33)
- [tsconfig.app.json:1-26](file://tsconfig.app.json#L1-L26)

## Installation
Follow these steps to clone and run the project locally:

1. Clone the repository
- Use your terminal to clone the repository to your local machine.
- Replace <REPO_URL> with the actual repository URL.

2. Navigate into the project directory
- Change into the newly created folder.

3. Install dependencies
- Run the package manager install command to fetch all required packages defined in the manifest.

4. Start the development server
- Launch the local development environment with hot reloading.

What happens next
- The development server starts and prints the local URL. Open it in your browser to view the site.

**Section sources**
- [package.json:6-11](file://package.json#L6-L11)
- [vite.config.ts:1-9](file://vite.config.ts#L1-L9)

## Development Workflow
Local development flow
- The project uses Vite for fast development builds and HMR. Editing source files updates the browser automatically.
- ESLint runs during development to catch common issues early.

Key scripts
- dev: Starts the Vite development server with HMR.
- build: Compiles TypeScript and runs Vite to produce optimized production assets.
- preview: Serves the built assets locally for testing.
- lint: Runs ESLint across the project to check for issues.

Recommended workflow
- Run the development script to start editing.
- Use the build script to generate production-ready assets.
- Use the preview script to test the production build locally.
- Use the lint script to keep code quality consistent.

**Section sources**
- [package.json:6-11](file://package.json#L6-L11)
- [eslint.config.js:1-23](file://eslint.config.js#L1-L23)

## Project Structure
High-level layout
- src: Contains all source code (TypeScript, React components, styles).
- public: Static assets (e.g., images, project showcase materials).
- Root configuration files: Vite config, TypeScript configs, ESLint config, package manifest, and the HTML shell.

Entry points
- index.html: The HTML shell that mounts the React app.
- src/main.tsx: Initializes the React root and renders the App component.
- src/App.tsx: The top-level React component composing page sections.

Styling
- src/index.css: Tailwind imports and global CSS variables and base styles.

Components
- src/components: Reusable UI parts (e.g., Navbar, Hero, About, Skills, Achievements, Contact, Footer).

How Vite resolves plugins
- The Vite configuration enables the React plugin and Tailwind CSS integration.

**Section sources**
- [index.html:1-17](file://index.html#L1-L17)
- [src/main.tsx:1-12](file://src/main.tsx#L1-L12)
- [src/App.tsx:1-62](file://src/App.tsx#L1-L62)
- [src/index.css:1-87](file://src/index.css#L1-L87)
- [vite.config.ts:1-9](file://vite.config.ts#L1-L9)

## Customization Guide
Change the brand identity
- Update the site title and meta information in the HTML shell.

Adjust theme colors and typography
- Modify CSS custom properties in the global stylesheet to change colors, fonts, and spacing.

Update navigation
- Edit the navigation links in the navigation component.

Add or modify sections
- Extend the App component to reorder or add new sections.
- Create new components under the components directory and import them into the App component.

Images and assets
- Place images in the public directory and reference them directly in components.
- For project showcases, use the dedicated project folder inside public.

Tailwind utilities
- Add or remove Tailwind utility classes in components to adjust layout and styling.

**Section sources**
- [index.html:10-10](file://index.html#L10-L10)
- [src/index.css:3-30](file://src/index.css#L3-L30)
- [src/components/Navbar.tsx:4-9](file://src/components/Navbar.tsx#L4-L9)
- [src/App.tsx:44-58](file://src/App.tsx#L44-L58)

## Build and Preview
Production build
- The build script compiles TypeScript and bundles the app for production using Vite.

Preview the build locally
- After building, serve the production assets locally to verify correctness.

Optimization highlights
- Vite optimizes assets, splits code, and prepares the app for deployment to static hosts or CDNs.

**Section sources**
- [package.json:8-8](file://package.json#L8-L8)
- [package.json:10-10](file://package.json#L10-L10)

## Troubleshooting
Common setup issues and fixes
- Node.js version mismatch
- Symptom: Errors during install or runtime.
- Fix: Install the recommended LTS version of Node.js and retry.

- Missing dependencies after clone
- Symptom: Errors about missing modules or failed installs.
- Fix: Run the package manager install command again.

- Port already in use
- Symptom: Development server fails to start with a port conflict.
- Fix: Stop the conflicting process or configure Vite to use another port.

- ESLint errors blocking development
- Symptom: Lint errors prevent the app from running.
- Fix: Address reported issues or temporarily disable the linter hook if necessary.

- Tailwind classes not applying
- Symptom: Styles appear incorrect or missing.
- Fix: Ensure Tailwind directives are present in the global stylesheet and rebuild.

Verification checklist
- Confirm the development server starts and opens the local URL.
- Verify the site renders without console errors.
- Test navigation and interactive elements.
- Run the lint script and fix reported issues.
- Build the project and preview the production bundle.

**Section sources**
- [eslint.config.js:1-23](file://eslint.config.js#L1-L23)
- [src/index.css:1-1](file://src/index.css#L1-L1)

## Verification Checklist
- Node.js and package manager installed
- Dependencies installed successfully
- Development server launches and loads the homepage
- No console errors in the browser
- Navigation works and scrolls to anchors
- ESLint passes without critical errors
- Production build succeeds and preview serves content

## Conclusion
You now have the fundamentals to develop, build, and customize the portfolio site. Use the development server for rapid iteration, the build pipeline for production, and the customization guide to tailor the content and appearance to your needs.