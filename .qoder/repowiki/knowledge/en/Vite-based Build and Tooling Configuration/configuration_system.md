This repository uses a standard Vite + React + TypeScript toolchain for its configuration system. There is no custom application-level runtime configuration (e.g., no `.env` files, no feature flags, no secrets management). Configuration is limited to build-time and development tooling.

### Key Components
1. **Build Tool (Vite)**: `vite.config.ts` defines the core build configuration, integrating the React plugin (`@vitejs/plugin-react`) and Tailwind CSS (`@tailwindcss/vite`). It relies on Vite's default conventions for asset handling, dev server, and bundling.
2. **TypeScript**: Configuration is split into three files:
   - `tsconfig.json`: Root reference file pointing to app and node configs.
   - `tsconfig.app.json`: Configures the client-side application code in `src/`, enabling React JSX, ESNext modules, and strict linting rules.
   - `tsconfig.node.json`: Configures the build-time environment (e.g., `vite.config.ts`), using Node.js types.
3. **Linting (ESLint)**: `eslint.config.js` uses the flat config format. It extends recommended rules from `eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`. It ignores the `dist/` output directory.
4. **Package Management**: `package.json` defines scripts for development (`dev`), building (`build`), linting (`lint`), and previewing (`preview`). Dependencies are managed via `npm` (indicated by `package-lock.json`).

### Conventions & Rules
- **No Runtime Env Vars**: The codebase does not use `process.env` or `import.meta.env`, indicating a static portfolio site with no dynamic backend configuration or secret injection.
- **Strict TypeScript**: The TS configs enforce strict linting rules like `noUnusedLocals`, `noUnusedParameters`, and `erasableSyntaxOnly`.
- **Modular TS Configs**: The project follows Vite's recommended pattern of separating TS configs for the app source and the build tools to avoid type conflicts between browser and Node.js environments.