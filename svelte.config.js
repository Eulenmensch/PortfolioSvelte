import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// Static site for GitHub Pages (custom domain www.yoshuawoo.com).
		adapter: adapter(),
		alias: {
			$content: 'src/content'
		}
	}
};

export default config;
