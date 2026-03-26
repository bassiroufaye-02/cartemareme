# Mairame SOW - Digital Business Card (vCard)

A premium digital business card for Mairame SOW, CEO and Cofounder of SenAgriConnect. Built with Next.js, TypeScript, and Tailwind CSS featuring glassmorphism design and smooth animations.

## Features

- **Glassmorphism Design**: Modern translucent card with backdrop blur effects
- **Responsive Design**: Optimized for all smartphone and desktop devices
- **vCard Integration**: One-click contact download in .vcf format
- **Social Links**: Direct WhatsApp and LinkedIn integration
- **Smooth Animations**: Framer Motion powered entrance animations
- **SEO Optimized**: Proper metadata for social sharing

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Icons**: Inline SVG icons
- **vCard Generation**: Custom TypeScript utility

## Color Theme

Based on SenAgriConnect brand colors:
- **Forest Green** (`#2d5016`): Growth and sustainability
- **Orange/Amber** (`#ff8c00`): Energy and innovation
- **Glass White**: Translucent card background

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   └── VCard.tsx           # Main vCard component
└── lib/
    └── vcard.ts            # vCard generation utility
public/
├── logo.png                # SenAgriConnect logo
└── profil.jpg              # Profile photo
```

## Contact Information

- **Name**: Mairame SOW
- **Title**: CEO / Cofounder
- **Company**: SenAgriConnect
- **Phone**: +221 76 434 88 52
- **Email**: mairamesow509@gmail.com
- **LinkedIn**: [Profile](https://www.linkedin.com/in/s-a-c-senagriconnect-a0a721386)
- **Location**: Dakar, Sénégal

## Deployment

This project is ready for deployment on Vercel, Netlify, or any platform supporting Next.js applications.

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

The application includes proper SEO metadata and is optimized for mobile sharing.
