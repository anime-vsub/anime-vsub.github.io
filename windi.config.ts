import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';
import scrollSnap from 'windicss/plugin/scroll-snap';

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096'
        }
      }
    }
  },
  plugins: [formsPlugin, scrollSnap],
  attributify: {
    prefix: 'w:'
  }
});
