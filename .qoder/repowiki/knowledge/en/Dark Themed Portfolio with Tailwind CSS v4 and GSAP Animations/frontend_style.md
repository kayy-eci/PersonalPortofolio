## System & Approach
The frontend styling system relies on a hybrid approach combining **Tailwind CSS v4** for utility-first layout and structural composition, and **custom CSS modules** (`App.css`, `index.css`) for complex visual effects, theming, and animations. The design aesthetic is a modern, dark-themed "creative developer" portfolio featuring deep purples, indigos, and blues.

### Core Technologies
- **CSS Framework**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin). Used primarily for layout utilities (flexbox, grid, positioning) and responsive breakpoints within JSX.
- **Animation Engine**: GSAP (GreenSock Animation Platform) drives complex interactions, such as the `CardSwap` component's 3D stacking effect and scroll-triggered fade-ins in `App.tsx`.
- **Iconography**: `lucide-react` provides consistent, lightweight SVG icons.
- **Styling Methodology**: 
  - **Global Theming**: CSS Custom Properties (Variables) defined in `:root` of `index.css` manage the color palette, gradients, and typography.
  - **Component-Specific CSS**: `App.css` contains scoped class names (e.g., `.hero`, `.nav`, `.card-inner`) that handle specific visual designs, hover states, and keyframe animations not easily achieved with default Tailwind utilities.

## Key Files & Packages
- `src/index.css`: Defines the global design tokens (colors, fonts, gradients) and imports Tailwind CSS v4. It sets the dark mode baseline (`--bg-primary: #030014`).
- `src/App.css`: Contains the bulk of the visual styling for sections (Hero, About, Achievements, etc.), including glassmorphism effects, gradient text, and responsive media queries.
- `src/components/CardSwap.tsx`: A complex animated component using GSAP for 3D transforms and z-index management, styled with inline Tailwind classes for structure and custom CSS classes for gradients.
- `package.json`: Lists `tailwindcss` (^4.3.1) and `gsap` (^3.15.0) as primary dependencies.

## Architecture & Conventions
### Design Tokens
The system uses semantic CSS variables for consistency:
- **Backgrounds**: `--bg-primary` (deep navy/black), `--bg-card` (slightly lighter), `--bg-card-hover`.
- **Text**: `--text-primary` (off-white), `--text-secondary` (gray), `--text-heading` (white).
- **Accents**: `--accent` (purple `#a855f7`), `--accent-light`, `--accent-dark`.
- **Gradients**: Pre-defined linear gradients (`--gradient-1`, `--gradient-2`) used for text clips, buttons, and card backgrounds.

### Visual Patterns
1. **Glassmorphism**: Navigation and cards use `backdrop-filter: blur()` and semi-transparent backgrounds (`rgba(3,0,20,0.6)`).
2. **Gradient Text**: Headings and key metrics use `background-clip: text` with `--gradient-1` to create vibrant, multi-colored text.
3. **Glow Effects**: Shadows and borders use accent colors with low opacity to create a "glow" effect (e.g., `--glow-purple`).
4. **Animated Blobs**: The Hero section uses CSS keyframes (`blob-float`) to move blurred, colored circles in the background, adding depth.

### Responsive Strategy
- **Mobile-First/Adaptive**: Media queries in `App.css` (max-width: 768px) adjust layouts from multi-column grids to single-column stacks.
- **Tailwind Utilities**: Responsive prefixes (e.g., `max-[768px]:scale-[0.75]`) are used in complex components like `CardSwap` to handle scaling on smaller screens.

## Rules for Developers
1. **Use CSS Variables for Colors**: Always reference `var(--accent)`, `var(--bg-card)`, etc., instead of hardcoding hex values in CSS files. This ensures theme consistency.
2. **Tailwind for Layout, CSS for Style**: Use Tailwind classes in JSX for spacing, flex/grid layouts, and responsiveness. Use `App.css` classes for specific visual treatments (gradients, borders, shadows) and complex animations.
3. **GSAP for Complex Motion**: Use GSAP for sequenced animations (like the card stack) or scroll-triggered effects. Use CSS transitions (`transition: all 0.3s`) for simple hover states.
4. **Semantic Sectioning**: Each major page section (Hero, About, Skills) has a corresponding CSS class group in `App.css` (e.g., `.hero-title`, `.about-grid`). Maintain this naming convention.
5. **Dark Mode Only**: The current system is hardcoded for dark mode. If light mode support is added, it should leverage the existing CSS variables by redefining them in a `@media (prefers-color-scheme: light)` block or a `.light` class selector.