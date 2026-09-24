import { 
  SiHtml5, 
  SiJavascript, 
  SiTypescript,
  SiReact, 
  SiReactrouter,
  SiTailwindcss, 
  SiBootstrap, 
  SiFramer, 
  SiRedux, 
  SiGit, 
  SiGithub, 
  SiFigma, 
  SiGooglechrome,
  SiLucide
} from 'react-icons/si'

import { 
  FaMobileAlt, 
  FaPlug, 
  FaPalette, 
  FaRocket, 
  FaPuzzlePiece, 
  FaBrain, 
  FaUsers, 
  FaRegClock, 
  FaBookReader, 
  FaComments,
  FaCss3Alt,
  FaLaptopCode,
  FaMicrosoft,
  FaChartBar,
  FaChartLine,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaLanguage,
  FaExchangeAlt
} from 'react-icons/fa'

export const skillsData = {
  Languages: [
    { name: 'HTML5',            icon: SiHtml5,       color: '#e34f26', level: 95 },
    { name: 'CSS3',             icon: FaCss3Alt,     color: '#1572b6', level: 92 },
    { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#f7df1e', level: 90 },
    { name: 'TypeScript',       icon: SiTypescript,  color: '#3178c6', level: 88 },
    { name: 'React.js',         icon: SiReact,       color: '#61dafb', level: 92 },
  ],
  'Frameworks & Libraries': [
    { name: 'React 19',         icon: SiReact,       color: '#00d8ff', level: 94 },
    { name: 'React Router',     icon: SiReactrouter, color: '#ca4245', level: 90 },
    { name: 'Tailwind CSS',     icon: SiTailwindcss, color: '#06b6d4', level: 95 },
    { name: 'Bootstrap',        icon: SiBootstrap,   color: '#7952b3', level: 85 },
    { name: 'Framer Motion',    icon: SiFramer,      color: '#ff007f', level: 85 },
    { name: 'Recharts',         icon: FaChartBar,    color: '#22c55e', level: 88 },
    { name: 'Lucide React',     icon: SiLucide,      color: '#f59e0b', level: 90 },
  ],
  'State Management': [
    { name: 'React Context API',        icon: FaExchangeAlt, color: '#61dafb', level: 92 },
    { name: 'Redux Toolkit',            icon: SiRedux,       color: '#764abc', level: 85 },
    { name: 'LocalStorage Persistence', icon: FaDatabase,    color: '#38bdf8', level: 90 },
  ],
  Tools: [
    { name: 'Git',              icon: SiGit,         color: '#f05032', level: 88 },
    { name: 'GitHub',           icon: SiGithub,      color: '#ffffff', level: 92 },
    { name: 'VS Code',          icon: FaLaptopCode,  color: '#007acc', level: 95 },
    { name: 'Chrome DevTools',  icon: SiGooglechrome, color: '#4285f4', level: 88 },
    { name: 'Figma',            icon: SiFigma,       color: '#f24e1e', level: 80 },
    { name: 'Microsoft Office', icon: FaMicrosoft,   color: '#ea3e23', level: 88 },
  ],
  Concepts: [
    { name: 'Responsive Design',                 icon: FaMobileAlt,    color: '#34d399', level: 95 },
    { name: 'REST API Integration',              icon: FaPlug,         color: '#f59e0b', level: 90 },
    { name: 'Component-Based Architecture',       icon: FaPuzzlePiece,  color: '#8b5cf6', level: 92 },
    { name: 'SaaS Architecture',                 icon: FaCloud,        color: '#06b6d4', level: 88 },
    { name: 'Authentication & Protected Routes', icon: FaShieldAlt,    color: '#10b981', level: 90 },
    { name: 'Data Visualization',                icon: FaChartLine,    color: '#a855f7', level: 86 },
    { name: 'RTL/LTR Support',                   icon: FaLanguage,     color: '#ec4899', level: 92 },
    { name: 'UI/UX Principles',                  icon: FaPalette,      color: '#f43f5e', level: 85 },
    { name: 'Performance Optimization',          icon: FaRocket,       color: '#6366f1', level: 88 },
  ],
}

export const softSkills = [
  { name: 'Problem Solving', icon: FaBrain, color: '#ffb703' },
  { name: 'Teamwork',        icon: FaUsers, color: '#028090' },
  { name: 'Time Management', icon: FaRegClock, color: '#e76f51' },
  { name: 'Self-Learning',   icon: FaBookReader, color: '#f4a261' },
  { name: 'Communication',   icon: FaComments, color: '#2a9d8f' },
]

export const languages = [
  { name: 'Arabic',  level: 'Native / Bilingual', fill: 100 },
  { name: 'English', level: 'Proficient',         fill: 80 },
]
