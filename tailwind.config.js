
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066cc', // Deep blue
        secondary: '#0099ff', // Medium blue
        accent: '#1ab3ff', // Light blue
        dark: '#f0f4f8', // Light background
        light: '#ffffff', // White background
        card: '#ffffff', // White card background
        text: '#1a1a1a', // Dark text
        textLight: '#4a4a4a', // Medium text
        borderColor: '#e0e0e0', // Light borders
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-slow': 'pulseSlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
