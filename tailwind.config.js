export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      keyframes: {
        'fade-down': {
          from: { opacity: '0', transform: 'translateY(-16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'line-in': {
          from: { transform: 'scaleX(0)' },
          to:   { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-down': 'fade-down 0.6s ease both',
        'fade-up':   'fade-up 0.8s ease both',
        'line-in':   'line-in 1s ease 0.9s both',
      },
    },
  },
}