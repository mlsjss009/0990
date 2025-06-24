# Hope Together NGO Website

## Overview

This is a full-stack web application for an NGO (Non-Governmental Organization) called "Hope Together" that focuses on community development through education, healthcare, economic empowerment, and emergency relief programs. The application serves as the organization's primary website with contact form functionality and impact showcasing.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

**Frontend**: React-based single-page application (SPA) built with Vite
**Backend**: Express.js REST API server
**Database**: PostgreSQL with Drizzle ORM
**Hosting**: Designed for Replit deployment with autoscale capabilities

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: Radix UI components with custom styling
- **Styling**: Tailwind CSS with custom NGO-themed color palette
- **State Management**: React Query (TanStack Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas for type-safe data validation
- **Session Management**: Ready for PostgreSQL-based sessions
- **Development**: Hot reload with tsx

### Database Schema
The application uses two main tables:
- **users**: Basic user authentication structure (id, username, password)
- **contact_submissions**: Stores contact form submissions with full contact details and timestamps

### UI Component System
- Comprehensive component library based on Radix UI primitives
- Custom styled components following shadcn/ui patterns
- Accessible and responsive design components
- Consistent theming with CSS custom properties

## Data Flow

1. **Frontend**: User interacts with React components
2. **API Layer**: React Query manages API calls to Express backend
3. **Backend**: Express routes handle requests and validate data
4. **Database**: Drizzle ORM executes PostgreSQL queries
5. **Response**: Data flows back through the same chain

Contact form submissions follow this flow:
- User fills form → Form validation → API call → Backend validation → Database storage → Success response

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling and validation
- **zod**: Schema validation
- **tailwindcss**: Utility-first CSS framework

### UI Dependencies
- **@radix-ui/***: Accessible component primitives
- **lucide-react**: Icon library
- **class-variance-authority**: Utility for managing component variants
- **clsx** and **tailwind-merge**: CSS class utilities

## Deployment Strategy

The application is configured for Replit deployment with:

- **Development**: `npm run dev` starts both frontend and backend in development mode
- **Build**: Vite builds the frontend, esbuild bundles the backend
- **Production**: Serves static files from Express with API routes
- **Database**: PostgreSQL module enabled in Replit environment
- **Port Configuration**: Backend runs on port 5000 (mapped to external port 80)

The build process:
1. Frontend builds to `dist/public` directory
2. Backend bundles to `dist/index.js`
3. Production server serves static files and API routes from single Express instance

## Changelog

- June 24, 2025. Initial setup with basic NGO website structure
- June 24, 2025. Complete visual redesign with premium styling, animations, and enhanced user experience

## Recent Changes

✓ Enhanced navigation with premium styling and smooth animations
✓ Redesigned hero section with gradient backgrounds and floating elements
✓ Updated impact metrics with interactive cards and hover effects
✓ Improved about section with visual storytelling elements
✓ Enhanced programs section with overlay effects and better imagery
✓ Redesigned partners section with modern card layouts
✓ Updated testimonials with professional quote cards
✓ Enhanced donation CTA with gradient backgrounds and premium styling
✓ Improved volunteer section with detailed opportunity cards
✓ Updated news section with category tags and read times
✓ Enhanced contact form with better styling and user experience
✓ Redesigned footer with comprehensive information and social links
✓ Added custom CSS utilities for gradients, animations, and effects
✓ Implemented consistent spacing, typography, and color schemes throughout

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Excellent, polished look visible in every part of the website.