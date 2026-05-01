/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5A623',
          light: '#FFD073',
          dark: '#D4891A',
          glow: '#F5A62380',
        },
        secondary: {
          DEFAULT: '#0A0E1A',
          light: '#141929',
          card: '#111628',
        },
        accent: {
          blue: '#1E88E5',
          cyan: '#00E5FF',
          steel: '#8B9DC3',
        },
        surface: {
          DEFAULT: '#0D1117',
          light: '#161B22',
          glass: 'rgba(17, 22, 40, 0.7)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'truck-bg': 'truckBg 20s linear infinite',
        'truck-fg': 'truckFg 14s linear infinite',
        'crane-lift': 'craneLift 4s ease-in-out infinite',
        'crane-extend': 'craneExtend 6s ease-in-out infinite',
        'hook-swing': 'hookSwing 3s ease-in-out infinite',
        'wheel-spin': 'wheelSpin 1.2s linear infinite',
        'particle-float': 'particleFloat 8s ease-in-out infinite',
        'particle-glow': 'particleGlow 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
        'flag-wave': 'flagWave 2s ease-in-out infinite',
        'headlight-beam': 'headlightBeam 2s ease-in-out infinite',
      },
      keyframes: {
        truckBg: {
          '0%': { transform: 'translateX(110vw) scale(0.6)' },
          '100%': { transform: 'translateX(-120%) scale(0.6)' },
        },
        truckFg: {
          '0%': { transform: 'translateX(-120%) scale(1.1)' },
          '100%': { transform: 'translateX(110vw) scale(1.1)' },
        },
        craneLift: {
          '0%, 100%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(30deg)' },
        },
        craneExtend: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        hookSwing: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        wheelSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.3' },
          '25%': { transform: 'translateY(-30px) translateX(10px)', opacity: '0.8' },
          '50%': { transform: 'translateY(-50px) translateX(-10px)', opacity: '0.5' },
          '75%': { transform: 'translateY(-20px) translateX(20px)', opacity: '0.7' },
        },
        particleGlow: {
          '0%, 100%': { boxShadow: '0 0 5px #F5A623, 0 0 10px #F5A62340' },
          '50%': { boxShadow: '0 0 15px #F5A623, 0 0 30px #F5A62360' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        flagWave: {
          '0%, 100%': { transform: 'skewY(-2deg) scaleX(1)' },
          '50%': { transform: 'skewY(2deg) scaleX(1.05)' },
        },
        headlightBeam: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(245,166,35,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
