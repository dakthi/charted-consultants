# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Charted Consultants' website built with Next.js 14, TypeScript, and Tailwind CSS. It's a professional services website for a consultancy that helps legacy businesses modernize their digital presence. The site features smooth scrolling with Lenis, advanced animations with Framer Motion, and a sophisticated stepper-style navigation system.

## Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production  
npm run start        # Start production server
npm run lint         # Run ESLint

# Install dependencies
npm install          # Install all dependencies
```

## Architecture & Key Patterns

### App Router Structure
- Uses Next.js 14 App Router with TypeScript
- Pages are in `src/app/` with `page.tsx` files
- Global layout in `src/app/layout.tsx` with metadata configuration
- Client-side layout logic in `src/components/ClientLayout.tsx`

### Navigation System
The navbar (`src/components/Navbar.tsx`) has a sophisticated dual approach:
- **Traditional desktop navigation**: Standard menu items always visible
- **Advanced stepper dropdown**: Burger menu opens a full-width (50vh height) dropdown with:
  - Search bar at top
  - 1/5 width left sidebar with logo and main menu categories
  - 4/5 width right content area showing submenus dynamically
  - Framer Motion animations throughout
  - State management for active menu items

### Smooth Scrolling
- **Lenis smooth scrolling** is implemented via `src/hooks/useLenis.ts`
- Applied to all main pages through the `useLenis()` hook
- Configuration: `duration: 1.0`, `wheelMultiplier: 0.8`, `touchMultiplier: 0.8`
- **Important**: NO scroll-snap CSS - Lenis handles all scrolling behavior

### Styling Consistency
All components follow homepage styling patterns:
- **Typography**: Main headings use `font-light`, subheadings use `font-semibold`
- **Spacing**: Consistent padding `px-6 md:px-12 py-20 md:py-32`
- **Colors**: `text-gray-700` for body text, `text-gray-600` for labels
- **Layout**: Max width containers `max-w-4xl` or `max-w-6xl mx-auto`
- **Labels**: Small uppercase `text-sm uppercase tracking-wide mb-4`

### Animation Patterns
- **Framer Motion** for all animations
- **useInView** hook with `margin: '-100px'` for scroll-triggered animations
- Consistent delay patterns: `delay: 0.2 + index * 0.1` for staggered effects
- **AnimatePresence** for enter/exit animations

### Content Management
- **Blog posts** stored as Markdown in `src/content/posts/`
- **Gray-matter** for frontmatter parsing
- **Remark with GFM** for Markdown to HTML conversion
- Post types defined in `src/lib/post.ts` with comprehensive frontmatter support

### Page Organization
- **Component-per-section architecture**: Each page composed of multiple focused components
- **Section-specific folders**: `components/approach/`, `components/services/`, etc.
- **Consistent section structure**: Each section has own components with similar animation patterns

### Image Optimization
- **Next.js Image component** used throughout (not `<img>` tags)
- **Proper sizing**: Use `width`/`height` for static images, `fill` for container-filling images
- **Logo handling**: White logo with dark background in dropdown, standard logo elsewhere

### ESLint Configuration
- **Next.js core-web-vitals** configuration
- **react/no-unescaped-entities disabled** to allow quotes and apostrophes in JSX content

## Important Technical Details

### Client Layout Logic
`ClientLayout.tsx` handles conditional navbar rendering:
- Transparent navbar on main pages (`/`, `/approach`, `/cases`, `/services`, `/resources`, `/contact`, `/services/three-hour-website`)
- Standard navbar on other pages (blog, privacy, terms)

### Responsive Design
- **Mobile-first approach** with Tailwind breakpoints
- **Burger menu works on all screen sizes** as supplementary navigation
- **Desktop navigation remains visible** alongside burger menu

### Performance Considerations
- **Next.js Image optimization** for all images
- **Static generation** for blog posts
- **Framer Motion** animations are optimized for performance
- **Lenis** provides hardware-accelerated smooth scrolling

## Development Guidelines

### Component Creation
- Follow existing component patterns in respective folders
- Use consistent animation delays and transitions
- Implement proper TypeScript types
- Maintain styling consistency with homepage patterns

### Adding New Pages
- Create in appropriate `src/app/` directory
- Add to `pagesWithTransparentNavbar` array in `ClientLayout.tsx` if needed
- Implement `useLenis()` hook for smooth scrolling
- Follow consistent section-component architecture

### Navigation Updates
- Main navigation items defined in `Navbar.tsx` with submenu structure
- Update both traditional desktop nav and stepper dropdown submenus
- Ensure proper state management for active menu items

### Content Updates
- Blog posts: Add Markdown files to `src/content/posts/`
- Images: Place in `public/img/` and use Next.js Image component
- Ensure proper frontmatter for blog posts (title, date, category, etc.)