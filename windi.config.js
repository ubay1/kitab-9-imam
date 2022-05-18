import { defineConfig } from 'windicss/helpers';
import defaultTheme from 'windicss/defaultTheme';

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans].join(','),
      },
    },
  },
  plugins: [require('windicss/plugin/aspect-ratio'), require('windicss/plugin/line-clamp')],
});
