<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import { Body } from 'svelte-body';

	export let document: { [key: string]: any };
	let page = document.results[0].data;
	console.log(page.link.url);

	let innerWidth: number;

	let style: { background: string; color: string };
	$: if (innerWidth < 768) {
		style = {
			background: 'linear-gradient(hsl(218, 91%, 21%), hsl(218, 91%, 10%))',
			color: 'whitesmoke'
		};
	}
	$: if (innerWidth > 767) {
		style = {
			background: 'linear-gradient(hsl(218, 91%, 21%), hsl(218, 91%, 10%) 20%)',
			color: 'whitesmoke'
		};
	}
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>Resumé</title>
</svelte:head>

<Body {style} />

<main class:tablet={innerWidth > 767} class:widescreen={innerWidth > 1023}>
	<h1>Resumé</h1>
	{#if innerWidth > 767}
		<div id="resume-container">
			<div id="resume-embed">
				<iframe
					src={prismicH.asLink(page.link) + '/preview'}
					width="100%"
					height="100%"
					allow="autoplay"
					title="Resumé"
				/>
			</div>
		</div>
	{:else}
		<div id="resume-button">
			<a target="_blank" rel="noopener noreferrer" href={prismicH.asLink(page.link) + '/view'}>
				<img src="images/icons/PDF.svg" alt="Clickable PDF Icon" />
			</a>
		</div>
	{/if}
</main>

<style>
	main {
		padding-top: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
	h1 {
		margin: 5rem 0 10rem;
		font-size: 5rem;
		line-height: 100%;
		text-shadow: 0.2rem 0.2rem blue;
	}
	.tablet h1 {
		margin: 2rem 0 5.5rem;
	}
	#resume-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		background-color: hsla(218, 91%, 10%, 1);
	}
	#resume-embed {
		width: 100%;
		max-width: 80rem;
		aspect-ratio: 1/1.4142;
		max-height: 100rem;
	}
	.widescreen #resume-embed {
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: var(--box-shadow);
	}

	iframe {
		border-style: none;
	}
	#resume-button {
		width: 20rem;
	}
</style>
