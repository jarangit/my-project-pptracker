import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      'black': '#000',
      'white': '#EEEEEE',
      'blue': '#f24171',
      'green': '#f24171',
      'black_bg': '#111',
      'gold':'#f24171',
      'pink':'#f24171',
      'gray':'#BCBCBC',
    }
  },
  plugins: [],
}
export default config
