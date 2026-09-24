import dracoImg from '../assets/images/draco.png'
import freshcartImg from '../assets/images/fresh-card.png'
import investorServicesImg from '../assets/images/InvestorServices.png'
import fitnessImg from '../assets/images/Fitness SaaS.png'
import playbookImg from '../assets/images/play-book.png'

export const projectsData = [
  {
    id: 'play-book',
    title: 'PlayBook',
    subtitle: 'Sports Venue Booking & Management SaaS',
    tagline: 'Full-stack cloud ecosystem for sports pitch booking, calendar slot locking & venue management',
    description:
      'A comprehensive multi-tenant sports pitch booking and venue management SaaS platform built with React 19, TypeScript, Node.js, Express, and Prisma ORM, featuring deterministic slot-locking and interactive map discovery.',
    desc:
      'A comprehensive multi-tenant sports pitch booking and venue management SaaS platform built with React 19, TypeScript, Node.js, Express, and Prisma ORM, featuring deterministic slot-locking and interactive map discovery.',
    longDescription:
      'PlayBook is a full-stack cloud ecosystem connecting sports enthusiasts with venue owners across Egypt. The platform features strict Role-Based Access Control (RBAC) with dedicated portals for Players, Venue Owners, and Super Admins. Built with an intelligent concurrency-controlled slot reservation engine that eliminates double bookings, interactive geolocation map search, dynamic peak/off-peak pricing, multi-method payment support (InstaPay, Vodafone Cash, Cash on Venue), SaaS subscription tiers for venue owners, and complete bilingual RTL/LTR internationalization.',
    category: 'SaaS',
    type: 'Full-Stack Web App',
    date: 'Jul 2026',
    accent: '#00d285',
    gradient: 'linear-gradient(150deg, #021a12 0%, #010f0a 55%, #03261a 100%)',
    tech: [
      'React 19',
      'TypeScript',
      'Node.js',
      'Express',
      'Prisma ORM',
      'SQLite',
      'Tailwind CSS',
      'React Router v7',
      'Recharts',
      'i18next',
      'JWT Auth',
    ],
    features: [
      'Multi-Role RBAC with dedicated portals for Players, Venue Owners, and Super Admins',
      'Deterministic slot-locking concurrency control with 10-minute temporary holds to eliminate double bookings',
      'Interactive map discovery with geolocation & multi-criteria pitch filters',
      'Comprehensive venue owner dashboard with Recharts revenue analytics & interactive calendar',
      'Tiered SaaS subscription engine (Basic, Pro, Enterprise) with dynamic venue quota management',
      'Dynamic pricing engine supporting peak hours, weekend rates, and custom fees',
      'Multiple payment workflows including Cash on Venue, InstaPay, and mobile wallets',
      'True bilingual internationalization with seamless RTL (Arabic) and LTR (English) switching',
    ],
    challenges: [
      {
        challenge: 'Preventing concurrent double-bookings during peak booking windows',
        solution:
          'Engineered a deterministic slot-lock algorithm on the database layer with temporary hold timers, guaranteeing zero overlap.',
      },
      {
        challenge: 'Managing complex multi-role state & dynamic pricing models',
        solution:
          'Designed modular backend services with Prisma ORM and Express, coupled with typed React Context state and Axios interceptors.',
      },
      {
        challenge: 'Seamless bilingual UX across complex dashboards and calendar pickers',
        solution:
          'Integrated i18next with directional RTL/LTR styling in Tailwind CSS, adapting all grids, icons, and schedule layouts.',
      },
    ],
    liveUrl: 'https://play-book-tau.vercel.app/dashboard',
    githubUrl: 'https://github.com/Khaledm21/PlayBook',
    mockup: 'sports',
    image: playbookImg,
  },
  {
    id: 'fitness-saas',
    title: 'FitPulse',
    subtitle: 'Fitness & Nutrition SaaS Platform',
    tagline: 'All-in-one workout tracking, smart nutrition, and AI coaching platform',
    description:
      'A modern, feature-rich fitness SaaS web application with comprehensive workout tracking, Mifflin-St Jeor macro counting, interactive Live Gym Mode, and context-aware AI coaching.',
    desc:
      'A modern, feature-rich fitness SaaS web application with comprehensive workout tracking, Mifflin-St Jeor macro counting, interactive Live Gym Mode, and context-aware AI coaching.',
    longDescription:
      'FitPulse is a comprehensive Software-as-a-Service (SaaS) web application designed to empower athletes and health enthusiasts to reach their fitness goals. The platform features an intelligent onboarding engine using the Mifflin-St Jeor formula for metabolic rate (BMR/TDEE) and macro calculations, an interactive Live Gym Mode with real-time set/rep logging and rest timers, an AI-powered fitness coach, hydration and sleep trackers, and dynamic health visualization using Recharts. Built with React 19, TypeScript, and Tailwind CSS with local persistence and RTL support.',
    category: 'SaaS',
    type: 'Web App',
    date: 'Jun 2026',
    accent: '#10b981',
    gradient: 'linear-gradient(150deg, #041d18 0%, #020e0c 55%, #052720 100%)',
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router v7', 'Recharts', 'Context API', 'Lucide Icons'],
    features: [
      'Smart 7-step onboarding with Mifflin-St Jeor BMR & TDEE calculation',
      'Daily calorie & macronutrient tracker with interactive progress ring',
      'Live Gym Mode with real-time sets/reps logging & rest countdown timer',
      'Context-aware AI Fitness Coach for tailored nutrition & workout advice',
      'Comprehensive health monitoring (hydration, sleep stages, steps, weight)',
      'Interactive historical progress charts & analytics with Recharts',
      'Modern dark glassmorphic UI with full RTL Arabic support & confetti gamification',
      'SaaS pricing tiers, subscription models, and authentication workflows',
    ],
    challenges: [
      {
        challenge: 'Accurate metabolic calculation & dynamic macro distribution',
        solution: 'Implemented the scientific Mifflin-St Jeor formula in a modular onboarding engine, dynamically calculating BMR/TDEE and goal-based macro splits.',
      },
      {
        challenge: 'Real-time workout state management with zero latency during gym sessions',
        solution: 'Architected a centralized React Context with LocalStorage persistence, ensuring instantaneous set/rep updates and uninterrupted rest timers.',
      },
      {
        challenge: 'Building a responsive, high-performance RTL dark theme with complex dashboards',
        solution: 'Utilized Tailwind CSS with custom glassmorphism design tokens and modular Recharts components optimized for mobile and desktop screens.',
      },
    ],
    liveUrl: 'https://fitness-saas-red.vercel.app/',
    githubUrl: 'https://github.com/Khaledm21/fitness-saas',
    mockup: 'fitness',
    image: fitnessImg,
  },
  {
    id: 'draco',
    title: 'DRACO',
    subtitle: 'Luxury Streetwear Website',
    tagline: 'Cinematic fashion experience with immersive UI',
    description:
      'A high-end luxury streetwear brand website featuring a cinematic UI approach with immersive scroll interactions, smooth page transitions, and a premium brand identity. Built with performance and visual excellence in mind.',
    longDescription:
      'DRACO pushes the boundaries of what a fashion website can be. Every section tells a story through motion, typography, and carefully crafted visual hierarchy. The site features custom scroll-triggered animations, parallax layers, and a dark cinematic aesthetic that reflects the brand identity.',
    category: 'Fashion',
    type: 'Website',
    date: 'May 2026',
    accent: '#c084fc',
    gradient: 'linear-gradient(150deg, #110622 0%, #07010f 55%, #160826 100%)',
    tech: ['React.js', 'Vite', 'TailwindCSS', 'Framer Motion', 'Git'],
    features: [
      'Cinematic scroll-triggered animations',
      'Immersive hero section with 3D parallax',
      'Product collection with smooth hover effects',
      'Full responsive design (mobile-first)',
      'Custom page transitions with AnimatePresence',
      'Optimized performance & Lighthouse scores',
    ],
    challenges: [
      {
        challenge: 'Creating smooth parallax without performance issues',
        solution: 'Used Framer Motion useScroll + useTransform for GPU-accelerated transforms, avoiding layout thrashing.',
      },
      {
        challenge: 'Maintaining cinematic feel on mobile devices',
        solution: 'Designed adaptive animations that scale down gracefully while preserving the premium look and feel.',
      },
    ],
    liveUrl: 'https://draco-website.vercel.app/',
    githubUrl: 'https://github.com/Khaledm21/draco-website',
    mockup: 'fashion',
    image: dracoImg,
  },
  {
    id: 'freshcart',
    title: 'FreshCart',
    subtitle: 'E-Commerce Web Application',
    tagline: 'Full-featured shopping experience with modern UX',
    description:
      'A fully responsive e-commerce application built with React.js, featuring product browsing, search & filtering, cart management, wishlist, multi-step checkout flow, order history, and user authentication.',
    longDescription:
      'FreshCart delivers a complete shopping experience from product discovery to order confirmation. The app uses Redux Toolkit for predictable state management and integrates with REST APIs via Axios for real-time product data. The UI is clean, modern, and optimized for conversion.',
    category: 'E-Commerce',
    type: 'Web App',
    date: 'Feb 2026',
    accent: '#34d399',
    gradient: 'linear-gradient(150deg, #021a0f 0%, #010d07 55%, #031f12 100%)',
    tech: ['React.js', 'Redux Toolkit', 'React Router DOM', 'Axios', 'Tailwind CSS', 'Vite'],
    features: [
      'Product browsing with infinite scroll',
      'Advanced search & multi-filter system',
      'Cart & wishlist with local persistence',
      'Protected routes & user authentication',
      'Multi-step checkout with form validation',
      'Order history & user profile management',
    ],
    challenges: [
      {
        challenge: 'Managing complex global state across many features',
        solution: 'Implemented Redux Toolkit slices for cart, wishlist, auth, and products with normalized state structure.',
      },
      {
        challenge: 'Optimizing performance with large product lists',
        solution: 'Applied React.memo, lazy loading, and virtual scrolling for smooth performance with hundreds of products.',
      },
    ],
    liveUrl: 'https://fresh-cart-pi-eosin.vercel.app/',
    githubUrl: 'https://github.com/Khaledm21/FreshCart',
    mockup: 'ecommerce',
    image: freshcartImg,
  },
  {
    id: 'isc-dashboard',
    title: 'ISC Dashboard',
    subtitle: 'Investor Services Center',
    tagline: 'Analytics dashboard with real-time data visualization',
    description:
      'A responsive management dashboard for monitoring and managing investor services operations through modern interactive data visualization interfaces, dynamic routing, and seamless API integration.',
    longDescription:
      'The ISC Dashboard provides investment managers with real-time insights through beautifully crafted charts, tables, and analytics widgets. Built with Recharts for data visualization and integrated with live APIs for up-to-date investor data. Features dynamic routing and role-based access.',
    category: 'Dashboard',
    type: 'Web App',
    date: 'Oct 2025',
    accent: '#38bdf8',
    gradient: 'linear-gradient(150deg, #021326 0%, #010810 55%, #031828 100%)',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'React Router', 'Recharts', 'Axios', 'Lucide Icons'],
    features: [
      'Real-time analytics with interactive Recharts',
      'Dynamic data tables with sorting & filtering',
      'Investor management CRUD operations',
      'Role-based access control',
      'Responsive layout for all screen sizes',
      'API integration with Axios interceptors',
    ],
    challenges: [
      {
        challenge: 'Rendering large datasets without performance degradation',
        solution: 'Implemented pagination, data windowing, and memoized selectors to keep renders fast and efficient.',
      },
      {
        challenge: 'Creating an intuitive dashboard layout for complex data',
        solution: 'Designed a modular widget system where each chart/table is an independent component with its own data source.',
      },
    ],
    liveUrl: 'https://investor-dashboard-orpin.vercel.app/',
    githubUrl: 'https://github.com/Khaledm21/investor-dashboard',
    mockup: 'dashboard',
    image: investorServicesImg,
  },
]
