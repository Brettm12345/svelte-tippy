import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    target: '#svelte',
    vite: {
      plugins: [WindiCSS()]
    },
    package: {
      dir: 'package',
      emitTypes: true,
      exports: file => file === 'index.ts'
    }
  }
};

export default config;
