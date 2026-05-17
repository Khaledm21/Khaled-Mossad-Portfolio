import dracoImg from '../assets/images/draco.png'
import freshcartImg from '../assets/images/fresh-card.png'
import investorServicesImg from '../assets/images/InvestorServices.png'

export const projectsData = [
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
