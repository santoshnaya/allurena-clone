# AllurenaClone

A pixel-perfect, front-end-only clone of the Allurena skincare website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, minimalist design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and animated components
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Fast loading and smooth animations
- **Accessibility**: Semantic HTML and keyboard navigation support

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd allurena-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── GallerySection.tsx
│   ├── AboutSection.tsx
│   ├── SecondHeroSection.tsx
│   ├── TestimonialsSection.tsx
│   └── Footer.tsx
├── public/
└── package.json
```

## Components

- **Header**: Sticky navigation with mobile menu
- **HeroSection**: Main hero with large typography and floating elements
- **GallerySection**: Featured content cards with hover effects
- **AboutSection**: Founders information and product showcase
- **SecondHeroSection**: Secondary hero with call-to-action
- **TestimonialsSection**: Customer reviews and brand logos
- **Footer**: Contact information and social links

## Build & Deploy

### Build for production:
```bash
npm run build
```

### Deploy to Vercel:
```bash
npx vercel --prod
```

## License

This project is for educational purposes only. 