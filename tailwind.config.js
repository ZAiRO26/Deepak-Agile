/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: '#FFFFFF',
          gray: '#F8F9FA',
        },
        gray: {
          DEFAULT: '#E9ECEF',
        },
        accent: {
          light: '#60A5FA',
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        },
        charcoal: '#1E3A5F',
        slate: '#3B5998',
        muted: '#6B8BB8',
        dark: {
          DEFAULT: '#0F172A',
          light: '#1E3A5F',
        },
        navy: '#1E40AF',
      },
      fontFamily: {
        display: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.1)',
        'premium': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'accent': '0 8px 30px rgba(59, 130, 246, 0.25)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-accent': 'pulse-accent 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-accent': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(59, 130, 246, 0)' },
        },
      },
    },
  },
  plugins: [],
}
