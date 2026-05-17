# Khaled Mossad — Portfolio Website

A premium, cinematic portfolio website built with React.js, Vite, Tailwind CSS, and Framer Motion. Designed with a dark futuristic aesthetic inspired by Vercel, Linear, and Awwwards-winning portfolios.

---

## 🚀 Tech Stack

| Tool | Purpose |
|---|---|
| **React.js 18** | UI library |
| **Vite 5** | Lightning-fast build tool |
| **Tailwind CSS 3** | Utility-first styling |
| **Framer Motion 11** | Animations & transitions |
| **React Router DOM 6** | Client-side routing |
| **Lucide React** | Icon system |
| **clsx** | Class name utility |

---

## 📁 Project Structure

```
src/
├── assets/              # Static assets (images, icons, animations)
├── components/
│   ├── layout/
│   │   ├── Navbar/      # Sticky glass navbar + mobile menu
│   │   └── Footer/      # Animated footer with social links
│   ├── ui/
│   │   ├── Button/      # Multi-variant button component
│   │   ├── SectionTitle/# Animated section headers
│   │   ├── GlowCard/    # Glassmorphism hover card
│   │   ├── Badge/       # Color-coded tech badge
│   │   ├── AnimatedText/# Typewriter & gradient text
│   │   └── Loader/      # Loading screen animation
│   ├── effects/
│   │   ├── MouseGlow/   # Spring-physics mouse glow
│   │   ├── Particles/   # Floating particle system
│   │   ├── ScrollProgress/ # Scroll progress bar
│   │   └── CustomCursor/   # Custom cursor with ring
│   ├── hero/            # Hero section with typewriter
│   ├── about/           # About cards + stats
│   ├── skills/          # Filterable skills grid
│   ├── projects/        # Project cards with SVG mockups
│   ├── experience/      # Animated timeline
│   ├── education/       # Education cards
│   └── contact/         # Contact form + floating labels
├── pages/
│   ├── Home/            # Full single-page home
│   ├── Projects/        # Projects page with search + filter
│   ├── ProjectDetails/  # Individual project detail page
│   └── NotFound/        # 404 page
├── hooks/
│   ├── useScrollAnimation.js  # IntersectionObserver hook
│   ├── useMouseGlow.js        # Mouse tracking + custom cursor + active section
│   └── useActiveSection.js    # Re-export
├── data/
│   ├── projectsData.js   # Projects content
│   ├── skillsData.js     # Skills + soft skills
│   └── experienceData.js # Experience + education
├── layouts/
│   └── MainLayout.jsx    # Layout wrapper with loader + navbar + footer
├── routes/
│   └── AppRoutes.jsx     # Route definitions with lazy loading
├── styles/
│   ├── globals.css       # Base styles + utility classes
│   ├── animations.css    # All @keyframes
│   └── variables.css     # CSS custom properties
├── utils/
│   ├── constants.js      # Nav links, social links, static data
│   ├── helpers.js        # Utility functions
│   └── animations.js     # Framer Motion variants
├── App.jsx               # Root with BrowserRouter
└── main.jsx              # Entry point
```

---

## 🛠️ Setup & Installation

```bash
# 1. Clone or copy the project
cd khaled-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

---

## ✨ Features

### Design
- 🌑 Dark futuristic theme (deep navy/black)
- 💜 Purple + Cyan neon accents
- 🔲 Glassmorphism cards with backdrop blur
- 📐 CSS Grid layout system
- 🔤 Syne (Display) + Outfit (Body) + DM Mono (Code)

### Animations
- ✅ Loading screen with progress bar
- ✅ Scroll progress bar
- ✅ Custom cursor with ring effect
- ✅ Mouse glow with spring physics
- ✅ Floating particle system
- ✅ Scroll-triggered reveal animations
- ✅ Stagger animations on grid items
- ✅ Framer Motion page transitions
- ✅ Typewriter effect in hero
- ✅ Gradient text animation
- ✅ Background floating orbs

### Pages & Features
- ✅ Home with all 6 sections
- ✅ Projects page with search + category filtering
- ✅ Project detail pages (per project)
- ✅ 404 Not Found page
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Lazy-loaded pages for performance
- ✅ Active section highlight in navbar
- ✅ Back to top button
- ✅ Floating label contact form
- ✅ AnimatePresence page transitions

---

## 🎨 Customization

### Update Personal Info
Edit `src/utils/constants.js` — social links, nav, contact info.

### Update Projects
Edit `src/data/projectsData.js` — add/remove projects, update details.

### Update Skills
Edit `src/data/skillsData.js` — add technologies, adjust categories.

### Update Experience
Edit `src/data/experienceData.js` — experience timeline + education.

### Colors / Design Tokens
Edit `src/styles/variables.css` and `tailwind.config.js`.

---

## 📱 Responsive Breakpoints

| Breakpoint | Screen |
|---|---|
| Mobile | < 640px |
| Tablet | 640px – 1024px |
| Desktop | > 1024px |

---

## 👨‍💻 Author

**Khaled Mossad** — Front-End Developer  
📧 khaledmossad221@gmail.com  
📍 Mansoura, Egypt
