# Deployment Guide

## Quick Deployment Options

### 1. Replit Deployment (Recommended)
This project is optimized for Replit deployment:

1. Import project to Replit
2. Dependencies install automatically
3. Run with the "Start application" workflow
4. Deploy using Replit's deployment feature

### 2. Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. Add environment variables in Vercel dashboard
4. Deploy automatically on git push

### 3. Netlify Deployment

1. Connect repository to Netlify
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Configure environment variables
4. Enable continuous deployment

### 4. DigitalOcean App Platform

1. Create new app from GitHub repository
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
3. Set environment variables
4. Deploy

## Environment Configuration

### Required Environment Variables
```bash
# Database (optional - uses memory storage by default)
DATABASE_URL=postgresql://user:password@host:port/database

# Session security
SESSION_SECRET=your-secure-random-string

# Server configuration
PORT=5000
NODE_ENV=production
```

### Optional Environment Variables
```bash
# Email configuration (for contact forms)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Analytics
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

## Database Setup

### PostgreSQL Setup (Production)
1. Create PostgreSQL database
2. Set `DATABASE_URL` environment variable
3. Database tables will be created automatically

### In-Memory Storage (Development)
- No setup required
- Data resets on server restart
- Good for testing and development

## Build Process

The build process:
1. Frontend builds to `dist/public`
2. Backend bundles to `dist/index.js`
3. Static files served by Express

## Performance Optimization

### Production Optimizations
- Vite builds optimized bundles
- CSS is minified and tree-shaken
- Images are optimized
- Code splitting for better load times

### Caching Strategy
- Static assets cached for 1 year
- API responses use appropriate cache headers
- Service worker ready (can be added)

## Monitoring and Analytics

### Recommended Monitoring
- Server uptime monitoring
- Performance monitoring (Core Web Vitals)
- Error tracking
- User analytics

### Health Checks
The server provides health check endpoints:
- `GET /health` - Basic health check
- `GET /api/health` - API health check

## Security Considerations

### Production Security
- HTTPS only in production
- Secure session configuration
- Input validation on all forms
- CORS properly configured
- Rate limiting on API endpoints

### Environment Security
- Never commit `.env` files
- Use strong session secrets
- Regularly update dependencies
- Monitor for security vulnerabilities

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (18+)
   - Clear `node_modules` and reinstall
   - Check for TypeScript errors

2. **Database Connection Issues**
   - Verify `DATABASE_URL` format
   - Check database server status
   - Ensure network connectivity

3. **Performance Issues**
   - Enable production mode
   - Check for memory leaks
   - Optimize database queries
   - Use CDN for static assets

### Support
For deployment support, check:
1. Server logs for error messages
2. Browser console for frontend issues
3. Network tab for API failures
4. Database logs for data issues