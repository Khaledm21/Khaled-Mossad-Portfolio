/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        dark: {
          50:  '#0f0f1e',
          100: '#0a0a18',
          200: '#070714',
          300: '#04040e',
          400: '#020209',
          500: '#010107',
        },
        primary: {
          DEFAULT: '#6366f1',
          light:   '#818cf8',
          dark:    '#4f46e5',
        },
        secondary: {
          DEFAULT: '#8b5cf6',
          light:   '#a78bfa',
          dark:    '#7c3aed',
        },
        accent: {
          DEFAULT: '#22d3ee',
          light:   '#67e8f9',
          dark:    '#0891b2',
        },
        neon: {
          purple: '#6366f1',
          violet: '#8b5cf6',
          cyan:   '#22d3ee',
          pink:   '#ec4899',
          green:  '#34d399',
          amber:  '#f59e0b',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        'gradient-neon':    'linear-gradient(135deg, #6366f1, #8b5cf6, #22d3ee)',
        'gradient-glow':    'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        'grid-pattern':
          'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '60px 60px',
      },
      animation: {
        'gradient-pan':  'gradient-pan 4s ease infinite',
        'orb-a':         'orb-a 20s ease-in-out infinite',
        'orb-b':         'orb-b 24s ease-in-out infinite',
        'fade-up':       'fade-up 0.8s ease forwards',
        'blink':         'blink 1s step-end infinite',
        'pulse-ring':    'pulse-ring 2s ease infinite',
        'bounce-y':      'bounce-y 2.2s ease-in-out infinite',
        'particle-rise': 'particle-rise 8s ease-in-out infinite',
        'spin-slow':     'spin 10s linear infinite',
        'float':         'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        'orb-a': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(40px,-50px) scale(1.06)' },
          '66%':     { transform: 'translate(-30px,25px) scale(0.94)' },
        },
        'orb-b': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(-50px,30px) scale(1.04)' },
          '66%':     { transform: 'translate(35px,-40px) scale(0.97)' },
        },
        'fade-up': {
          from: { opacity: 0, transform: 'translateY(40px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        blink: {
          '0%,50%':   { opacity: 1 },
          '51%,100%': { opacity: 0 },
        },
        'pulse-ring': {
          '0%':   { boxShadow: '0 0 0 0 rgba(99,102,241,0.5)' },
          '70%':  { boxShadow: '0 0 0 12px rgba(99,102,241,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(99,102,241,0)' },
        },
        'bounce-y': {
          '0%,100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%':     { transform: 'translateX(-50%) translateY(-8px)' },
        },
        'particle-rise': {
          '0%':   { opacity: 0, transform: 'translateY(0) scale(0.5)' },
          '15%':  { opacity: 0.7 },
          '85%':  { opacity: 0.3 },
          '100%': { opacity: 0, transform: 'translateY(-280px) scale(1.4)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'neon-sm':  '0 0 10px rgba(99,102,241,0.4)',
        'neon':     '0 0 24px rgba(99,102,241,0.4)',
        'neon-lg':  '0 0 48px rgba(99,102,241,0.3)',
        'glow-cyan':'0 0 24px rgba(34,211,238,0.35)',
        'card':     '0 24px 48px rgba(0,0,0,0.35), 0 0 32px rgba(99,102,241,0.08)',
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
}
