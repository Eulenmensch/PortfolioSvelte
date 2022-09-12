<script lang="ts">
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import '../app.css';
	import BackTopButton from '$lib/backTopButton.svelte';
	import { onMount } from 'svelte';
	import { afterUpdate } from 'svelte';

	let outerHeight: number;
	let docHeight: number;

	onMount(() => {
		docHeight = document.body.scrollHeight;
		outerHeight = window.screen.height;
	});

	afterUpdate(() => {
		docHeight = document.body.scrollHeight;
		outerHeight = window.screen.height;
	});
</script>

<Header />
<slot />
{#if docHeight > outerHeight}
	<BackTopButton />
{/if}
<Footer />

<style>
	/* Exo 700, Montserrat 800 300 , Rubik 900, Inter 100 200 300 400 500 600 700 800 900 */
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

	:global(*, *::after, *::before) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
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
		font-size: 12px;
		line-height: 150%;
	}

	@media only screen and (min-width: 2559px) {
		:root {
			font-size: 18px;
		}
	}

	:global(button) {
		all: unset;
	}

	:global(:root) {
		--text-color-primary: whitesmoke;
		--mango-yellow: #ffbb25;
		--bronze-yellow: #885b00;
		--kaomaru-blue: #2d2c6d;
		--mahogany-red: #b53401;
		--queen-blue: #3f62a4;
		--sea-green: #219653;
		--gunmetal-blue: #16202f;
		--border-radius: 1rem;
		--x-padding: 1.3rem;
		--box-shadow: 0rem 0.3rem 3rem rgba(0, 0, 0, 0.6);
	}
</style>
