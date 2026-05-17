import { 
  SiHtml5, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiBootstrap, 
  SiFramer, 
  SiRedux, 
  SiGit, 
  SiGithub, 
  SiFigma, 
  SiGooglechrome 
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
  FaLaptopCode
} from 'react-icons/fa'

export const skillsData = {
  Languages: [
    { name: 'HTML5',           icon: SiHtml5, color: '#e34f26', level: 95 },
    { name: 'CSS3',            icon: FaCss3Alt, color: '#1572b6', level: 92 },
    { name: 'JavaScript ES6+', icon: SiJavascript, color: '#f7df1e', level: 88 },
  ],
  'Frameworks & Libraries': [
    { name: 'React.js',       icon: SiReact,  color: '#61dafb', level: 90 },
    { name: 'Tailwind CSS',   icon: SiTailwindcss,  color: '#06b6d4', level: 93 },
    { name: 'Bootstrap',      icon: SiBootstrap,  color: '#7952b3', level: 85 },
    { name: 'Framer Motion',  icon: SiFramer,  color: '#ff007f', level: 80 },
    { name: 'Redux Toolkit',  icon: SiRedux,  color: '#764abc', level: 82 },
  ],
  Tools: [
    { name: 'Git',             icon: SiGit,  color: '#f05032', level: 88 },
    { name: 'GitHub',          icon: SiGithub,  color: '#ffffff', level: 90 },
    { name: 'VS Code',         icon: FaLaptopCode,  color: '#007acc', level: 95 },
    { name: 'Figma',           icon: SiFigma,  color: '#f24e1e', level: 72 },
    { name: 'Chrome DevTools', icon: SiGooglechrome,  color: '#4285f4', level: 85 },
  ],
  Concepts: [
    { name: 'Responsive Design',       icon: FaMobileAlt, color: '#34d399', level: 92 },
    { name: 'API Integration',         icon: FaPlug, color: '#f59e0b', level: 85 },
    { name: 'UI/UX Principles',        icon: FaPalette, color: '#ec4899', level: 80 },
    { name: 'Performance Opt.',        icon: FaRocket, color: '#6366f1', level: 82 },
    { name: 'Component Architecture',  icon: FaPuzzlePiece, color: '#8b5cf6', level: 88 },
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
