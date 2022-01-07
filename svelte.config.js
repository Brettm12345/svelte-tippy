import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		target: '#svelte',
		package: {
			dir: 'package',
			emitTypes: true,
			exports: file => file === 'index.ts'
		}
	}
};

export default config;
