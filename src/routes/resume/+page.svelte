<script lang="ts">
	import { resume } from '$lib/content';
	import EmbedFacade from '$lib/components/EmbedFacade.svelte';

	const base = resume.link?.replace(/\/+$/, '') ?? null;
	const previewSrc = base ? `${base}/preview` : null;
	const viewHref = base ? `${base}/view` : null;

	$effect(() => {
		const prev = document.body.style.backgroundColor;
		document.body.style.backgroundColor = 'hsl(218, 91%, 10%)';
		return () => {
			document.body.style.backgroundColor = prev;
		};
	});
</script>

<svelte:head>
	<title>Resumé — Yoshua Woo</title>
	<meta name="description" content="Resumé / CV of Yoshua Woo, game designer." />
</svelte:head>

<main class="resume">
	<h1>Resumé</h1>

	{#if previewSrc}
		<div class="embed">
			<EmbedFacade src={previewSrc} title="Resumé" provider="Google Drive" />
		</div>
		<a class="view" href={viewHref} target="_blank" rel="noopener noreferrer">
			Open in Google Drive ↗
		</a>
	{:else}
		<p>Resumé is currently unavailable.</p>
	{/if}
</main>

<style>
	.resume {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 var(--x-padding) 4rem;
		background-color: hsl(218, 91%, 10%);
	}
	h1 {
		margin: 8rem 0 4rem;
		font-size: 5rem;
		line-height: 1;
		text-shadow: 0.2rem 0.2rem var(--queen-blue);
	}

	.embed {
		width: 100%;
		max-width: 80rem;
		aspect-ratio: 1 / 1.4142;
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: var(--box-shadow);
	}

	.view {
		margin-top: 2rem;
		padding: 0.8rem 2rem;
		border: 0.3rem solid var(--mango-yellow);
		border-radius: 100rem;
		color: var(--mango-yellow);
		font-weight: 900;
		font-size: 1.4rem;
		text-decoration: none;
		transition:
			background-color 250ms,
			color 250ms;
	}
	.view:hover {
		background-color: var(--mango-yellow);
		color: black;
	}

	@media (min-width: 1024px) {
		h1 {
			margin: 5rem 0;
		}
	}
</style>
