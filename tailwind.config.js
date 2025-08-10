/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './assets/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './containers/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    fontFamily: {
      // Lora font variations
      lora: ['Lora_400Regular'],
      'lora-italic': ['Lora_400Regular_Italic'],
      'lora-medium': ['Lora_500Medium'],
      'lora-medium-italic': ['Lora_500Medium_Italic'],
      'lora-semibold': ['Lora_600SemiBold'],
      'lora-semibold-italic': ['Lora_600SemiBold_Italic'],
      'lora-bold': ['Lora_700Bold'],
      'lora-bold-italic': ['Lora_700Bold_Italic'],

      // Manrope font variations
      'manrope-extralight': ['Manrope_200ExtraLight'],
      'manrope-light': ['Manrope_300Light'],
      manrope: ['Manrope_400Regular'],
      'manrope-medium': ['Manrope_500Medium'],
      'manrope-semibold': ['Manrope_600SemiBold'],
      'manrope-bold': ['Manrope_700Bold'],
      'manrope-extrabold': ['Manrope_800ExtraBold'],
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: {
          DEFAULT: 'var(--border)',
          muted: 'var(--border-muted)',
          dashed: 'var(--border-dashed)',
        },
        input: 'var(--input)',
        ring: 'var(--ring)',
        // Odia specific colors
        'odia-background': '#FFFFFF',
        'odia-dark': '#0E073D',
        'odia-accent': '#5935E9',
        'odia-muted': '#8985A2',
        'odia-light': '#F5F5FC',
        'odia-border': '#E6E6EB',
      },
      boxShadow: {
        subtle: '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'fade-in-delay': 'fadeIn 0.5s ease-in-out 0.3s forwards',
        'image-fade-in': 'imageFadeIn 1.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        imageFadeIn: {
          '0%': { opacity: 0.7, transform: 'scale(1.05)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
