<script lang="ts">
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import '../app.css';
</script>

<Header />
<slot />
<Footer />

<style>
	/* Exo 700, Montserrat 800 300 , Rubik 900, Inter 100 200 300 400 500 600 700 800 900 */
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

	:global(*, *::after, *::before) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(:root) {
		--text-color-primary: whitesmoke;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		width: 100vw;
		height: 100vh;
		max-width: 100%;
		color: var(--text-color-primary);
	}

	:root {
		font-family: 'Inter', Arial, sans-serif;
		font-size: 10px;
		line-height: 150%;
	}

	:global(button) {
		all: unset;
	}
</style>
