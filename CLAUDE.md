# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with TanStack Start (React meta-framework) and styled with Tailwind CSS + shadcn/ui components. The site features a responsive design with a fixed sidebar navigation and showcases projects, skills, experience, and contact information.

## Development Commands

- **Start development server**: `pnpm dev` (opens at http://localhost:3000 with auto-open)
- **Build for production**: `pnpm build` 
- **Start production server**: `pnpm start`
- **Lint code**: `pnpm lint` (ESLint for JS/TS/JSX/TSX files)
- **Format code**: `pnpm format` (Prettier)
- **Lint CSS**: `pnpm lint:css` (Stylelint for CSS/SCSS/PostCSS)

Uses pnpm as the package manager.

## Architecture & Structure

### Framework Stack
- **TanStack Start**: React-based meta-framework with file-based routing
- **TanStack Router**: Type-safe routing with route generation
- **Vinxi**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI primitives

### Key Configuration
- **Deployment**: Configured for Vercel (`app.config.ts`)
- **Prerendering**: Root route prerendered with link crawling enabled
- **TypeScript**: Strict mode enabled with path mapping (`@/*` → `./src/*`)
- **Routing**: Auto-generated route tree (`routeTree.gen.ts`)

### Project Structure
```
src/
├── routes/           # File-based routing (TanStack Router)
│   ├── __root.tsx    # Root layout with sidebar
│   ├── index.tsx     # Home page
│   ├── tech.tsx      # Tech stack page
│   ├── experience.tsx # Experience page
│   ├── contact.tsx    # Contact page
│   └── projects/     # Projects section
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── [various]    # Custom components
├── data/            # Static data files
├── hooks/           # Custom React hooks
├── lib/             # Utilities and helpers
└── styles/          # Global styles (app.css)
```

### Key Components & Patterns
- **Sidebar Navigation**: Fixed sidebar with responsive mobile hamburger menu
- **Route-based Navigation**: Uses TanStack Router's `<Link>` components
- **Data Structure**: Projects stored in `src/data/projects.ts` with TypeScript interfaces
- **Responsive Design**: Uses `useMediaQuery` hook for mobile/desktop switching
- **State Management**: Zustand for client-side state (imported but usage minimal)

## Adding shadcn/ui Components

To add new shadcn/ui components:
```bash
pnpm dlx shadcn@latest add <component-name>
```

Components are configured to use:
- Style: "new-york"
- Base color: "neutral" 
- CSS variables enabled
- Lucide icons

## Development Notes

- **Email Integration**: Uses `@emailjs/browser` for contact forms
- **Animations**: Framer Motion for page transitions and effects
- **Icons**: Mix of Lucide React and React Icons
- **Custom Effects**: Includes `ShineBorder` component for animated border effects
- **Image Assets**: Stored in `public/images/` directory
- **Scroll Restoration**: Enabled in router configuration

## Important Files
- `app.config.ts`: TanStack Start configuration
- `components.json`: shadcn/ui configuration  
- `src/router.tsx`: Router setup with type declarations
- `src/routes/__root.tsx`: Root layout with sidebar integration
- `src/data/projects.ts`: Project data structure and content