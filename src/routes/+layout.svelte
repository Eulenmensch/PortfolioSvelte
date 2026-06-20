<script lang="ts">
	import '@fontsource-variable/inter';
	import '$lib/styles/app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style>
	main {
		position: relative;
		min-height: 100vh;
		overflow: hidden;
	}
</style>
