<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import { Body } from 'svelte-body';
	const style = {
		backgroundColor: '#09275a',
		width: '100vw'
	};

	export let document: { [key: string]: any };
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<Body {style} />
<main>
	<div id="text-container">
		<h1>{prismicH.asText(document.results[0].data.heading)}</h1>
		{@html prismicH.asHTML(document.results[0].data.about_me)}
	</div>
	<div id="background-image" />
	<div id="background-gradient" />
</main>

<style>
	:root {
		color: whitesmoke;
	}
	main {
		padding: 0 var(--x-padding);
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#text-container {
		max-width: 62rem;
	}
	h1 {
		font-size: 4rem;
		line-height: 100%;
		padding-top: 12rem;
		padding-bottom: 3rem;
	}
	#text-container > :global(p) {
		font-size: 1.6rem;
		line-height: 150%;
		padding-bottom: 1.5rem;
	}
	#background-image {
		position: absolute;
		top: 0;
		z-index: -10;
		height: 100vh;
		width: 100%;
		background-image: linear-gradient(180deg, rgba(0, 255, 191, 0.25), hsla(0, 0%, 100%, 0)),
			linear-gradient(180deg, transparent, #09275a),
			linear-gradient(180deg, rgba(9, 63, 90, 0.78), rgba(9, 63, 90, 0.78)),
			url('images/about/aboutBackground.jpeg');
		background-size: cover;
	}
</style>
