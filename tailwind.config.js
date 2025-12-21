export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'moto-red': '#D40000',
        'moto-red-dark': '#A30000',
        'moto-charcoal': '#1A1A1A',
        'moto-cream': '#F5F1E8',
        'moto-silver': '#B8B8B8',
        'status-success': '#4CAF50',
        'status-warning': '#FFC107',
        'status-error': '#D40000',
      },
      fontFamily: {
        display: ['Bebas Neue', 'Oswald', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
