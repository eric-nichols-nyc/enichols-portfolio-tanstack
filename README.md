#notes

# enichols-portfolio-tanstack

This is a personal portfolio site built with [TanStack](https://tanstack.com/) and [shadcn/ui](https://ui.shadcn.com/). It showcases projects, skills, and other information, and demonstrates modern React component patterns and UI effects.

## Features
- **Modern UI**: Built with shadcn/ui components for a clean, accessible design.
- **Custom Effects**: Includes a reusable `ShineBorder` component for animated border effects.
- **Configurable**: Easily adjust border width, animation duration, and shine color.

## How it Works
- The site is structured as a React app, using TanStack for state and data management.
- UI components are imported from shadcn/ui, with custom enhancements.
- The `ShineBorder` component provides an animated border effect for any element. It is highly configurable via props:
  - `borderWidth`: Width of the border in pixels (default: 1)
  - `duration`: Animation duration in seconds (default: 14)
  - `shineColor`: Color or array of colors for the shine effect (default: "#000000")

### Example Usage of ShineBorder
```tsx
import { ShineBorder } from "@/components/ui/shine-border";

<div className="relative rounded-lg overflow-hidden">
  <ShineBorder borderWidth={2} duration={10} shineColor={["#f0c", "#0cf"]} />
  <div className="p-6 bg-white">Content goes here</div>
</div>
```

## Getting Started
1. Install dependencies:
   ```sh
   pnpm install
   ```
2. Run the development server:
   ```sh
   pnpm dev
   ```
3. Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Adding shadcn/ui Components
To add a new shadcn/ui component:
```sh
pnpm dlx shadcn@latest add <component>
```
Replace `<component>` with the desired component name (e.g., `button`).

#shadcn components - pnpm dlx shadcn@latest add button
