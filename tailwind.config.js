module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-green': '#10B981',
        'brand-green-dim': 'rgba(16, 185, 129, 0.1)',
        'status-red': '#EF4444',
        'status-red-dim': 'rgba(239, 68, 68, 0.1)',
        'status-yellow': '#F59E0B',
        'status-yellow-dim': 'rgba(245, 158, 11, 0.1)',
      }
    },
  },
  plugins: [],
}