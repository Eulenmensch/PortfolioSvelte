import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// Deployed on Vercel (custom domain www.yoshuawoo.com). The site is fully
		// prerendered (see src/routes/+layout.ts), so Vercel serves static output.
		adapter: adapter(),
		alias: {
			$content: 'src/content'
		}
	}
};

export default config;
