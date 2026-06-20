<script lang="ts">
	import { md } from '$lib/markdown';
	import EmbedFacade from '$lib/components/EmbedFacade.svelte';
	import type { SecondaryProject } from '$lib/content/types';

	let {
		project,
		color = 'var(--mango-yellow)'
	}: { project: SecondaryProject; color?: string } = $props();

	const bg = $derived(project.background?.src);
</script>

<article class="card" style:--accent={color} style:--bg={bg ? `url(${bg})` : 'none'}>
	<div class="media">
		{#if project.media === 'video' && project.video}
			<!-- svelte-ignore a11y_media_has_caption -->
			<video autoplay loop muted playsinline>
				<source src={project.video} type="video/mp4" />
			</video>
		{:else if project.media === 'iframe' && project.iframe}
			<EmbedFacade src={project.iframe} title={`${project.title} embed`} provider="itch.io" poster={bg} />
		{:else if project.image}
			<img src={project.image.src} alt={project.image.alt ?? project.title} />
		{/if}
	</div>

	<div class="body">
		<h3>{project.title}</h3>
		<p class="genre">{project.genre}</p>
		<div class="overview">{@html md(project.overview)}</div>
	</div>
</article>

<style>
	.card {
		margin: 2rem 0;
		border-radius: calc(var(--border-radius) * 3);
		overflow: hidden;
		background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), var(--bg);
		background-size: cover;
		background-position: center;
		box-shadow: var(--box-shadow);
		border: 0.4rem solid var(--accent);
	}

	.media {
		aspect-ratio: 16 / 9;
	}
	.media :is(video, img) {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.body {
		padding: 1.5rem;
	}
	h3 {
		font-size: 2.5rem;
		line-height: 1;
		margin-bottom: 0.5rem;
	}
	.genre {
		font-size: 1.3rem;
		margin-bottom: 1rem;
	}
	.overview :global(p) {
		font-size: 1.3rem;
		font-weight: 600;
		line-height: 1.4;
		margin-bottom: 0.6rem;
	}

	@media (min-width: 1024px) {
		.card {
			border: none;
		}
		h3 {
			font-size: 3rem;
		}
		.body {
			padding: 2rem 3rem 3rem;
		}
		.overview :global(p) {
			font-size: 1.5rem;
			font-weight: 300;
		}
	}
</style>
