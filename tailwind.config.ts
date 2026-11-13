/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic tokens (dark-first, monochrome + blue accent)
        canvas: '#09090B',
        surface: '#111113',
        elevated: '#18181B',
        line: '#27272A',
        fg: '#FAFAFA',
        muted: '#A1A1AA',
        accent: {
          DEFAULT: '#3B82F6',
          strong: '#2563EB',
          soft: 'rgba(59, 130, 246, 0.12)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1120px',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
