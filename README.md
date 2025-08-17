# Mondilla Connect Landing Page

A responsive landing page for Mondilla Connect, a project collaboration tool, built with Next.js, TypeScript, Tailwind CSS, and GSAP for smooth scrolling animations.

## Project Setup Instructions

### Prerequisites

- Node.js: Version 18 or higher
- npm: Version 8 or higher

### Installation

#### 1. Clone the repository

```bash
  git clone  git@github.com:Creative-genius001/mondella-connect.git
  cd mondella-connect
```

#### 2. Install dependencies

```
  npm install
```

#### 3. Run the development server

```
  npm run dev
```

Open in localhost:3000 to view the app

#### 4. For Production build

```
  npm run build
  npm run start
```

## Features Implemented

### Responsive Header

- Centered navbar using absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2.
- Logo displayed with Next.js <Image> (w-[160px] h-auto object-contain).
- Mobile menu with hamburger/X toggle button.

### Smooth Scrolling

- Custom useSmoothScroll hook using GSAP ScrollToPlugin for smooth scrolling to anchor links.

### Hero Section

- SVG grid background (grid-background.svg) applied as bg-[url('/assets/grid-background.svg')] bg-cover bg-center.
- Responsive text and CTA button with Tailwind classes.

### Pricing Section

- Dynamic rendering of pricing plans using a Card component.
- Data from pricingPlans array with name, price, features, isMostPopular, and description properties.
- Grid layout (grid grid-cols-1 md:grid-cols-3 gap-6) with centered items (justify-items-center items-center).
- "Popular" badge with absolute positioning.

### Contact Section

- Form with fields for name, email, and message, styled with Tailwind (max-w-lg mx-auto).
- Accessible with htmlFor labels and placeholders.
- Responsive design with max-w-full to prevent overflow.
- Form validation with a utility validate() function i created.

### Mobile Detection

useIsMobile hook to toggle between mobile and desktop navigation (breakpoint: 768px).

### Responsive Design

- Tailwind CSS utilities for responsive layouts (md:, lg: prefixes).

### TypeScript

- Type-safe components and data (IPrice interface, string-based features).
- Hooks typed for compatibility (useIsMobile, useSmoothScroll).

## Extra Notes

- Added scroll animations using framer-motion library
- Hover effects on feature and price cards.
