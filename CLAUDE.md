# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Danny Banfield's personal music artist website built with SolidJS, Vite, and TailwindCSS with DaisyUI components. The site showcases artist information, media, and contact details for booking and song requests.

## Commands

### Development
- `pnpm dev` - Start development server on port 3000
- `pnpm build` - Build for production (includes pnpm install)
- `pnpm start` - Preview production build

### Maintenance
- `pnpm clean` - Remove dist directory
- `pnpm nuke` - Remove dist and node_modules directories

## Architecture

### Framework Stack
- **SolidJS** - Reactive UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS + DaisyUI** - Styling with component library
- **@solidjs/router** - Client-side routing
- **@solidjs/meta** - Meta tag management

### Project Structure
- `src/index.jsx` - Application entry point with routing setup
- `src/pages/` - Page components (HomePage, MediaPage, ContactPage, 404)
- `src/components/` - Reusable components (Navbar, BackToTop, SlideShow, SpotifyTrack)
- `src/assets/` - Images and media files organized by type
- `public/` - Static assets (favicons, videos, promotional images)

### Routing
Simple client-side routing with paths:
- `/` - HomePage (main artist page)
- `/media` - MediaPage (music and videos)
- `/contact` - ContactPage (booking and requests)
- `*404` - NotFoundPage

### Styling
- Uses DaisyUI themes: light, dark, market, market2
- Custom gradient backgrounds and color schemes
- Dark mode class-based theming
- Responsive design with mobile-first approach

### Key Features
- Artist portfolio with image galleries
- Social media integration (Facebook, Instagram, YouTube, SoundCloud)
- Event calendar and news sections
- Booking and song request functionality
- Spotify track embedding capability

## Development Notes

- Uses `~` alias for `./src` directory imports
- Assets are imported as ES modules and referenced directly
- DaisyUI provides component classes for consistent styling
- Build output goes to `dist/` directory
- Requires Node.js >=18