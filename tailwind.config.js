const animate = require('tailwindcss-animate')
const typography = require('@tailwindcss/typography')
const forms = require('@tailwindcss/forms')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          focus: 'hsl(var(--primary-focus))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        state: {
          error: 'hsl(var(--destructive))',
          success: 'hsl(var(--success))',
          warning: 'hsl(var(--warning))',
          info: 'hsl(var(--info))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
      fontFamily: {
        meta: ['system-ui', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    animate, 
    typography,
    forms({
      strategy: 'class',
    }),
    // Custom form components plugin
    plugin(({ addComponents }) => {
      addComponents({
        '.form-input-base': {
          '@apply w-full px-4 py-2 border rounded-md shadow-sm': {},
          '@apply border-input bg-background text-foreground': {},
          '@apply focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2': {},
          '@apply disabled:cursor-not-allowed disabled:opacity-50': {},
          '@apply placeholder:text-muted-foreground': {},
        },
        '.form-label-base': {
          '@apply block text-sm font-medium mb-1.5': {},
          '@apply text-foreground': {},
        },
        '.form-button-base': {
          '@apply px-4 py-2 text-sm font-medium inline-flex items-center justify-center': {},
          '@apply bg-primary text-primary-foreground hover:bg-primary/90': {},
          '@apply rounded-md shadow-sm transition-colors': {},
          '@apply focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2': {},
          '@apply disabled:pointer-events-none disabled:opacity-50': {},
        },
        '.form-checkbox-base': {
          '@apply h-4 w-4 rounded border border-input': {},
          '@apply text-primary focus:ring-primary': {},
          '@apply disabled:cursor-not-allowed disabled:opacity-50': {},
        },
        '.form-radio-base': {
          '@apply h-4 w-4 border border-input': {},
          '@apply text-primary focus:ring-primary': {},
          '@apply disabled:cursor-not-allowed disabled:opacity-50': {},
        },
        '.form-select-base': {
          '@apply w-full px-4 py-2 border rounded-md shadow-sm': {},
          '@apply border-input bg-background text-foreground': {},
          '@apply focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2': {},
          '@apply disabled:cursor-not-allowed disabled:opacity-50': {},
        },
        '.form-textarea-base': {
          '@apply w-full px-4 py-2 border rounded-md shadow-sm': {},
          '@apply border-input bg-background text-foreground': {},
          '@apply focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2': {},
          '@apply disabled:cursor-not-allowed disabled:opacity-50': {},
          '@apply placeholder:text-muted-foreground': {},
        },
      })
    }),
  ],
}