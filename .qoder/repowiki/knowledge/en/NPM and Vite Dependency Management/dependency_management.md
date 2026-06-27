This repository uses **npm** as its primary package manager, evidenced by the presence of `package.json` and `package-lock.json`. The project is built using **Vite**, a modern frontend build tool, which handles module bundling and development server responsibilities.

### Key Systems and Tools
- **Package Manager**: npm (Node Package Manager)
- **Lockfile**: `package-lock.json` (lockfileVersion 3), ensuring deterministic installs across environments.
- **Build Tool**: Vite (`vite.config.ts`), configured with React and Tailwind CSS plugins.
- **Language/Transpiler**: TypeScript (`tsconfig.json`, `typescript` devDependency).
- **Linting**: ESLint (`eslint.config.js`, `eslint` devDependency) for code quality and consistency.

### Dependency Structure
Dependencies are split into two categories in `package.json`:
1. **Runtime Dependencies (`dependencies`)**:
   - `react`, `react-dom`: Core UI library.
   - `gsap`: Animation library.
   - `lucide-react`: Icon library.
   - `tailwindcss`, `@tailwindcss/vite`: Styling framework and its Vite integration.
2. **Development Dependencies (`devDependencies`)**:
   - `vite`, `@vitejs/plugin-react`: Build tooling.
   - `typescript`, `@types/react`, `@types/react-dom`: Type definitions and compiler.
   - `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`: Linting rules.
   - `globals`: Global type definitions for ESLint.

### Conventions and Rules
- **Private Project**: The `"private": true` field in `package.json` prevents accidental publication to the npm registry.
- **ES Modules**: The `"type": "module"` field indicates the project uses ES module syntax (import/export) rather than CommonJS.
- **Versioning**: Dependencies use caret (`^`) or tilde (`~`) ranges (e.g., `^3.15.0`, `~6.0.2`), allowing minor/patch updates while preventing breaking major version changes during `npm install`.
- **No Vendoring**: The `node_modules` directory is present but typically ignored in version control (via `.gitignore`), relying on `package-lock.json` for reproducibility rather than committing dependencies directly.