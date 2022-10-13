import { sveltekit } from '@sveltejs/kit/vite';

import WindiCSS from 'vite-plugin-windicss';
import ViteYaml from '@modyfi/vite-plugin-yaml';


/** @type {import('vite').UserConfig} */
const config = {
  plugins: [WindiCSS(), ViteYaml(), sveltekit()]
};

export default config;
