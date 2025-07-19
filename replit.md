# Replit.md

## Overview

This is a full-stack web application built as a personal portfolio website for Momchil Gaurilov, a biomedical engineer and UX designer. The application showcases his work, experience, and projects through an interactive, modern web interface. The project uses a React frontend with a Node.js Express backend, configured for both development and production deployment.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend and backend components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for development and production builds
- **UI Components**: Extensive use of Radix UI primitives through shadcn/ui

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal implementation)
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Landing area with personal branding and call-to-action buttons
- **About**: Personal introduction and core competencies
- **Experience**: Professional work history with visual cards
- **Education**: Academic background display
- **Teaching**: Areas of expertise and knowledge sharing
- **Projects**: Featured work including MyVote platform
- **Platforms**: AI-powered tools and solutions (ChatGPT, Advocate)
- **Contact**: Contact information and call-to-action
- **Footer**: Social links and copyright information

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: Basic user schema and CRUD operations
- **API Routes**: Express route structure (minimal implementation)
- **Development Server**: Vite integration for hot reloading

### Shared Components
- **Database Schema**: User table definition with Drizzle ORM
- **Type Definitions**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Client Requests**: React frontend makes API calls through TanStack Query
2. **API Processing**: Express backend processes requests through registered routes
3. **Data Storage**: Storage interface handles data persistence (currently in-memory)
4. **Response Handling**: JSON responses sent back to frontend
5. **UI Updates**: React components re-render based on query responses

The application currently has minimal API implementation, suggesting it's primarily a static portfolio site with infrastructure prepared for future dynamic features.

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with extensive Radix UI component library
- **Styling**: Tailwind CSS with PostCSS processing
- **State Management**: TanStack Query for API state management
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Date Utilities**: date-fns for date manipulation
- **Icons**: Lucide React for consistent iconography
- **Carousel**: Embla Carousel for interactive components

### Backend Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type checking
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build Tools**: Vite with React plugin and ESBuild
- **Code Quality**: TypeScript with strict configuration
- **Replit Integration**: Custom plugins for Replit development environment

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR (Hot Module Replacement)
- **Backend**: tsx for running TypeScript directly in development
- **Database**: Drizzle Kit for schema management and migrations

### Production Build
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Deployment**: Single Node.js process serving both static files and API
- **Database**: Production PostgreSQL database via environment variable

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Replit Integration**: Special handling for Replit development environment
- **Static Assets**: Served from `attached_assets` directory for images and media

The application is designed for easy deployment on platforms like Replit, with automatic detection of the development environment and appropriate configuration adjustments.