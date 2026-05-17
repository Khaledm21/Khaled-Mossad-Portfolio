import { Github, Linkedin, Mail, Phone, MapPin, Twitter } from 'lucide-react'

export const NAV_LINKS = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education',  label: 'Education' },
  { id: 'contact',    label: 'Contact' },
]

export const PAGE_ROUTES = [
  { path: '/',              label: 'Home' },
  { path: '/projects',      label: 'Projects' },
  { path: '/projects/:id',  label: 'Project Details' },
]

export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com',
    color: '#ffffff',
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com',
    color: '#0a66c2',
  },
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:khaledmossad221@gmail.com',
    color: '#6366f1',
  },
]

export const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'khaledmossad221@gmail.com',
    href: 'mailto:khaledmossad221@gmail.com',
    color: '#6366f1',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '01069975145',
    href: 'tel:+201069975145',
    color: '#8b5cf6',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mansoura, Egypt',
    href: '#',
    color: '#06b6d4',
  },
]

export const PROJECT_CATEGORIES = ['All', 'Fashion', 'E-Commerce', 'Dashboard']

export const HERO_TITLES = [
  'Front-End Developer',
  'React.js Specialist',
  'UI/UX Enthusiast',
  'Web Performance Expert',
]

export const ABOUT_CARDS = [
  { emoji: '⚛️', title: 'React.js Expert',       color: '#61dafb', desc: 'Specialized in React patterns, hooks, and component-based architecture.' },
  { emoji: '🎨', title: 'UI/UX Passion',          color: '#ec4899', desc: 'Creating beautiful, intuitive interfaces with exceptional attention to detail.' },
  { emoji: '📱', title: 'Responsive Design',       color: '#34d399', desc: 'Every project works flawlessly across all devices and screen sizes.' },
  { emoji: '🚀', title: 'Performance First',       color: '#f59e0b', desc: 'Optimized builds, lazy loading, and maximum Lighthouse scores.' },
  { emoji: '🧩', title: 'Clean Architecture',      color: '#8b5cf6', desc: 'Reusable, maintainable components following industry best practices.' },
  { emoji: '🔌', title: 'API Integration',         color: '#06b6d4', desc: 'REST APIs with Axios, Redux Toolkit state management, async workflows.' },
]

export const STATS = [
  { value: '5+',   label: 'Projects Built',    color: '#6366f1' },
  { value: '1+',   label: 'Years Experience',  color: '#8b5cf6' },
  { value: '10+',  label: 'Technologies',      color: '#06b6d4' },
  { value: '100%', label: 'Dedication',        color: '#34d399' },
]
