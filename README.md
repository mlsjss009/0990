# Hope Together NGO Website

A modern, responsive website for Hope Together, a non-governmental organization focused on community development through education, healthcare, economic empowerment, and emergency relief programs.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Interactive Donation System**: Clear impact-focused donation flow with amount selection
- **Volunteer Management**: Comprehensive volunteer opportunities and registration
- **Contact Forms**: Functional contact system with backend integration
- **News & Updates**: Latest news and organizational updates
- **Clean Action Flows**: Organized button system with clear user journeys

## Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling
- **Radix UI** components for accessibility
- **React Query** for state management
- **Wouter** for routing

### Backend
- **Node.js** with Express.js
- **PostgreSQL** with Drizzle ORM
- **TypeScript** throughout
- **Session management** ready

## Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (optional, uses in-memory storage by default)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hope-together-ngo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/           # Utilities and shared logic
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend Express application
│   ├── index.ts          # Main server file
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage interface
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
└── components.json       # UI component configuration
```

## Key Features

### Clean Action Flow System
All interactive elements are connected to clear user journeys:

- **Donate Now** → Donation section with impact descriptions
- **Become a Volunteer** → Volunteer opportunities section
- **Contact Us** → Functional contact form
- **Watch Our Story** → Video content
- **Newsletter Subscribe** → Footer subscription
- **Navigation** → Smooth scroll to all sections

### Organized Data Management
- Centralized action management in `/lib/actions.ts`
- Type-safe schemas with Zod validation
- Clean separation between frontend and backend concerns

### Responsive Design
- High-contrast color scheme (blue, orange, green)
- Accessible design patterns
- Mobile-first responsive layout

## Deployment

### Replit Deployment
The project is configured for Replit deployment:
- Uses `npm run dev` for development
- Configured with proper port binding (0.0.0.0:5000)
- Environment variables supported

### Manual Deployment
1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Environment Variables

For production deployment, configure:
- `DATABASE_URL` - PostgreSQL connection string (optional)
- `SESSION_SECRET` - Secret for session encryption
- `PORT` - Server port (defaults to 5000)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for Hope Together NGO. All rights reserved.

## Contact

For questions about this project, please contact the development team or Hope Together NGO directly through the website contact form.