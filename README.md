# Pacific Maids

Professional house cleaning and maid service platform for Southern California - Los Angeles, Orange County & San Diego.

## Overview

Pacific Maids is a full-featured cleaning service platform built with Next.js 15, featuring real-time booking, customer management, and integrated CRM capabilities.

## Tech Stack

- **Framework**: Next.js 15.4.5 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **CRM**: HubSpot Integration
- **SMS**: OpenPhone Integration
- **Payments**: Stripe
- **Calendar**: FullCalendar

## Features

- **Online Booking**: 60-second quote and booking system
- **Customer Portal**: Dashboard for managing bookings, quotes, and payments
- **Admin Dashboard**: Comprehensive management for bookings, leads, and analytics
- **Provider Dashboard**: Job management and scheduling for cleaning providers
- **Real-time Pricing**: Dynamic pricing based on service type, size, and add-ons
- **Tax Calculation**: Automatic sales tax lookup by zip code
- **Rewards System**: Customer loyalty and referral tracking
- **Review System**: Customer feedback and ratings
- **Recurring Services**: Automated booking for repeat customers
- **Gift Cards**: Purchase and redemption system
- **Multi-channel Notifications**: Email, SMS, and in-app notifications

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Environment variables configured (see `.env.local`)

### Installation

```bash
# Install dependencies
npm install

# Set up database
npx prisma generate
npx prisma db push

# Run development server
npm run dev
```

The application will be available at `http://localhost:8888`

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
pacific-maids/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   ├── lib/             # Utility functions and helpers
│   ├── config/          # Configuration files
│   ├── styles/          # Global styles and themes
│   └── types/           # TypeScript type definitions
├── prisma/              # Database schema and migrations
└── public/              # Static assets
```

## Key Configuration

### Site Configuration
Located in `src/config/site.ts`:
- Business identifier: `pacific-maids`
- Location: Southern California
- Contact: (714) 597-6420
- Timezone: America/Los_Angeles

### Color Theme
Pacific/SoCal-inspired royal blue and gold theme defined in:
- `src/app/globals.css` - CSS variables
- `src/styles/colors.ts` - Tailwind utilities

**Color Palette:**
- Sections: `rgba(26, 55, 85, 0.95)` - Royal blue
- Cards: `rgba(22, 48, 75, 0.95)` - Rich royal blue
- CTAs: `rgba(18, 40, 65, 1)` - Darkest royal blue
- Accents: `#dfbd69` - Pacific gold

## Environment Variables

Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `AUTH_SECRET` - Authentication secret
- `NEXTAUTH_URL` - Application URL
- `HUBSPOT_ACCESS_TOKEN` - HubSpot API token
- `STRIPE_SECRET_KEY` - Stripe API key
- `OPENPHONE_API_KEY` - OpenPhone API key

## Service Areas

Pacific Maids serves:

**Los Angeles County:**
- Los Angeles
- Santa Monica
- Beverly Hills
- West Hollywood
- Culver City
- Pasadena
- Glendale
- Long Beach

**Orange County:**
- Irvine
- Newport Beach
- Huntington Beach
- Anaheim
- Costa Mesa
- Laguna Beach

**San Diego County:**
- San Diego
- La Jolla
- Carlsbad
- Encinitas
- Del Mar

## API Routes

- `/api/submit-booking` - Process booking requests
- `/api/submit-quote` - Generate instant quotes
- `/api/tax-lookup` - Calculate sales tax by zip code
- `/api/auth/*` - Authentication endpoints
- `/api/hubspot/*` - CRM integration
- `/api/rewards/*` - Loyalty program

## Dashboards

### Customer Dashboard (`/customer-dashboard`)
- View and manage bookings
- Request quotes
- Track rewards points
- Manage payment methods
- View booking history

### Admin Dashboard (`/admin-dashboard`)
- Manage all bookings and quotes
- View analytics and reports
- Handle customer communications
- Manage pricing and settings
- Access changelog and documentation

### Provider Dashboard (`/provider-dashboard`)
- View assigned jobs
- Update job status
- Access training materials
- View ratings and feedback

## Development

### Code Style
- TypeScript strict mode enabled
- Prettier for code formatting
- ESLint for code quality

### Key Packages
- `next` - 15.4.5
- `react` - 19.1.0
- `prisma` - 6.15.0
- `next-auth` - 5.0.0-beta.29
- `stripe` - 13.2.0

## License

Proprietary - All rights reserved

## Support

For technical support or inquiries:
- Email: hello@pacificmaids.com
- Phone: (714) 597-6420
- Website: https://pacificmaids.com
