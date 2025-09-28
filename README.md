# Ada Website - AI Customer Service Platform

A modern, interactive website built with Next.js that replicates the Ada.cx experience with advanced scrolling animations and layered effects.

## Features

- **Layered Box Animations**: Orange, yellow, and blue boxes that overlap and layer during scroll
- **Case Study Modals**: Interactive "View case study" buttons that open detailed story pages
- **Dynamic Grid**: Animated grid with color-changing squares representing AI processing
- **Continuous Sections**: Smooth parallax scrolling with multiple feature sections
- **Responsive Design**: Fully responsive across all device sizes
- **Modern Animations**: Framer Motion powered animations and transitions

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and gestures
- **Lucide React** - Beautiful icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key Components

### LayeredBoxes
Implements the core scrolling animation where boxes layer on top of each other:
- Orange box (Monday.com case study)
- Yellow box (Life360 case study) 
- Blue box (Eposnow case study)

### DynamicGrid
Animated grid that simulates AI processing:
- 100 squares that randomly change color
- Represents real-time AI interactions
- Hover effects and smooth transitions

### CaseStudyModal
Interactive modals that open when clicking "View case study":
- Detailed company stories
- Metrics and testimonials
- Smooth animations and transitions

### ContinuousSections
Parallax scrolling sections with:
- Instant responses
- Proactive engagement
- Personalized interactions
- Effortless support

## Animation Details

The website features several key animations:

1. **Scroll-triggered layering**: Boxes overlap as you scroll, creating a stacking effect
2. **Dynamic grid**: Squares change color randomly to simulate AI processing
3. **Parallax backgrounds**: Multiple background layers move at different speeds
4. **Smooth transitions**: All interactions use smooth, easing transitions

## Customization

Colors and animations can be customized in:
- `tailwind.config.js` - Color palette and animation keyframes
- `src/lib/data.ts` - Case study content and grid configuration
- Component files - Individual animation parameters

## Deployment

The site can be deployed to Vercel, Netlify, or any platform that supports Next.js:

```bash
npm run build
npm start
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

Requires modern browser features for optimal animation performance.
