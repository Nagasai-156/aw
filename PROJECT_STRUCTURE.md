# ArthaChain Website - Project Structure

## 🚀 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Post-Processing**: React Three Postprocessing

## 📁 Project Structure

```
arthachain-web/
├── public/
│   ├── images/          # Static images (logos, icons, etc.)
│   ├── models/          # 3D models (.glb, .gltf files)
│   └── videos/          # Video assets
│
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   ├── about/       # About page
│   │   ├── technology/  # Technology page
│   │   ├── ecosystem/   # Ecosystem page
│   │   └── docs/        # Documentation
│   │
│   ├── components/
│   │   ├── ui/          # shadcn/ui components (auto-generated)
│   │   ├── 3d/          # Three.js/R3F components
│   │   │   ├── BlockchainVisualization.tsx
│   │   │   ├── ParticleField.tsx
│   │   │   ├── NetworkNodes.tsx
│   │   │   └── HeroScene.tsx
│   │   │
│   │   ├── layout/      # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Sidebar.tsx
│   │   │
│   │   ├── sections/    # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Technology.tsx
│   │   │   ├── Roadmap.tsx
│   │   │   ├── Team.tsx
│   │   │   └── CTA.tsx
│   │   │
│   │   └── animations/  # Reusable animation components
│   │       ├── FadeIn.tsx
│   │       ├── SlideIn.tsx
│   │       ├── ParallaxSection.tsx
│   │       └── ScrollReveal.tsx
│   │
│   ├── hooks/           # Custom React hooks
│   │   ├── useScrollPosition.ts
│   │   ├── useIntersectionObserver.ts
│   │   └── use3DAnimation.ts
│   │
│   ├── lib/             # Utility libraries
│   │   └── utils.ts     # shadcn utility functions
│   │
│   ├── utils/           # Helper functions
│   │   ├── animations.ts
│   │   ├── three-helpers.ts
│   │   └── formatters.ts
│   │
│   ├── constants/       # App constants
│   │   ├── features.ts
│   │   ├── navigation.ts
│   │   └── roadmap.ts
│   │
│   ├── styles/          # Additional styles
│   │   └── animations.css
│   │
│   └── types/           # TypeScript type definitions
│       ├── blockchain.ts
│       └── components.ts
│
├── components.json      # shadcn/ui configuration
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.ts       # Next.js configuration
```

## 🎨 Component Organization

### 3D Components (`src/components/3d/`)
All Three.js and React Three Fiber components for interactive 3D visualizations:
- Blockchain network visualizations
- Particle effects
- Interactive 3D models
- Camera controls and animations

### Layout Components (`src/components/layout/`)
Persistent layout elements:
- Navigation header with smooth scroll
- Footer with links
- Mobile menu
- Sidebar navigation

### Section Components (`src/components/sections/`)
Major page sections:
- Hero with 3D background
- Features showcase
- Technology stack
- Roadmap timeline
- Team profiles
- Call-to-action sections

### Animation Components (`src/components/animations/`)
Reusable animation wrappers:
- Fade in effects
- Slide animations
- Parallax scrolling
- Scroll-triggered reveals

## 🎯 Key Features to Implement

1. **Interactive 3D Hero**
   - Rotating blockchain network
   - Particle field background
   - Smooth camera animations

2. **Smooth Page Transitions**
   - Framer Motion page transitions
   - Scroll-based animations
   - Intersection observer effects

3. **Performance Optimized**
   - Lazy loading for 3D components
   - Image optimization
   - Code splitting

4. **Responsive Design**
   - Mobile-first approach
   - Adaptive 3D complexity
   - Touch-friendly interactions

5. **Modern UI/UX**
   - Glassmorphism effects
   - Gradient backgrounds
   - Smooth micro-interactions
   - Dark theme optimized

## 🚀 Next Steps

1. Create base layout components (Header, Footer)
2. Build Hero section with 3D background
3. Implement feature showcase sections
4. Add scroll animations
5. Create technology visualization
6. Build roadmap timeline
7. Add team section
8. Implement CTA sections
9. Optimize performance
10. Test and deploy

## 📦 Installed Packages

### Core
- next
- react
- react-dom
- typescript

### Styling & UI
- tailwindcss
- shadcn/ui components
- lucide-react (icons)

### 3D & Animation
- three
- @react-three/fiber
- @react-three/drei
- @react-three/postprocessing
- framer-motion

### Development
- eslint
- typescript
- @types packages
