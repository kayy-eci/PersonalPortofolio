## Build System Overview

This personal portfolio website uses a modern, JavaScript/TypeScript-centric build system powered by **Vite**. The project follows standard conventions for a React + TypeScript application, leveraging Vite's fast development server and optimized production builds.

### Core Tools & Frameworks
- **Build Tool**: [Vite](https://vitejs.dev/) (v8.1.0) - Provides HMR during development and efficient bundling for production.
- **Compiler**: [TypeScript](https://www.typescriptlang.org/) (~6.0.2) - Used for type-checking and transpilation via `tsc -b` before the Vite build step.
- **Framework**: React 19.2.7 with `@vitejs/plugin-react` for JSX transformation.
- **Styling**: Tailwind CSS v4.3.1 integrated via `@tailwindcss/vite` plugin.
- **Linting**: ESLint v10.5.0 with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.

### Key Build Scripts (`package.json`)
- `npm run dev`: Starts the Vite development server with HMR.
- `npm run build`: Runs TypeScript project references build (`tsc -b`) followed by `vite build` to produce optimized static assets in the `dist/` directory.
- `npm run lint`: Executes ESLint across the codebase.
- `npm run preview`: Serves the production build locally for testing.

### Architecture & Conventions
1. **Project References**: TypeScript is configured using project references (`tsconfig.json` referencing `tsconfig.app.json` and `tsconfig.node.json`). This separates application code (`src/`) from build configuration (`vite.config.ts`), enabling faster incremental builds and better isolation.
2. **Bundler Mode**: Both TS configs use `"moduleResolution": "bundler"` and `"noEmit": true`, delegating actual module resolution and emission to Vite. TypeScript serves primarily as a type checker.
3. **Plugin Integration**: Vite plugins are minimal:
   - `@vitejs/plugin-react` for React JSX support.
   - `@tailwindcss/vite` for Tailwind CSS processing.
4. **Linting Strategy**: ESLint uses the flat config format (`eslint.config.js`). It ignores the `dist/` output directory and applies recommended rules for TypeScript, React hooks, and Vite-specific refresh patterns.
5. **No Containerization or CI**: The repository does not include Dockerfiles, Makefiles, or CI/CD configuration files (e.g., `.github/workflows/`, `.gitlab-ci.yml`). Deployment is likely manual or handled via static hosting services (e.g., Vercel, Netlify, GitHub Pages) using the `dist/` output.

### Developer Rules & Constraints
- **Build Order**: Always run `tsc -b` before `vite build` to ensure type safety. The `build` script enforces this sequence.
- **Module Syntax**: Use ES modules (`import`/`export`) exclusively. CommonJS (`require`) is not supported due to `"type": "module"` in `package.json` and `"module": "esnext"` in TS config.
- **Type Safety**: Strict linting rules are enabled (`noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`). Avoid unused imports or variables.
- **Asset Handling**: Static assets (images, certificates) reside in `public/` and are served as-is. Importable assets (e.g., `hero.png`) live in `src/assets/` and are processed by Vite.
- **No Ejecting**: Do not modify Vite's internal webpack-like behavior. Extend functionality via Vite plugins if needed.
