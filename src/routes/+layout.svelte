<script lang="ts">
	import '@fontsource-variable/inter';
	import '$lib/styles/app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BackTopButton from '$lib/components/BackTopButton.svelte';

	let { children } = $props();

	let scrollY = $state(0);
	let innerHeight = $state(0);
	const showBackTop = $derived(innerHeight > 0 && scrollY > innerHeight / 2);
</script>

<svelte:window bind:scrollY bind:innerHeight />

<Header />
<main>
	{@render children()}
</main>
{#if showBackTop}
	<BackTopButton />
{/if}
<Footer />

<style>
	main {
		position: relative;
		min-height: 100vh;
		overflow: hidden;
	}
</style>
