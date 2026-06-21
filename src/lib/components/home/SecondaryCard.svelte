<script lang="ts">
	import { slide } from 'svelte/transition';
	import { md } from '$lib/markdown';
	import EmbedFacade from '$lib/components/EmbedFacade.svelte';
	import type { SecondaryProject } from '$lib/content/types';

	let {
		project,
		color = 'var(--mango-yellow)',
		index = 0
	}: { project: SecondaryProject; color?: string; index?: number } = $props();

	let innerWidth = $state(0);
	let isOpen = $state(false);

	// always expanded on tablet and up (mobile starts collapsed)
	$effect(() => {
		if (innerWidth > 767) isOpen = true;
	});
	const zIndex = $derived(innerWidth > 767 ? index : 0);
	const bg = $derived(project.background?.src);

	// long colour-stepped shadow trail (mobile only), like the original
	const shadow = $derived(
		Array.from({ length: 60 }, (_, i) => `${i * -7.5}px ${i * 5}px 0 ${color}`).join(',')
	);

	const toggle = () => (isOpen = !isOpen);
</script>

<svelte:window bind:innerWidth />

<article
	class="card"
	style:--accent={color}
	style:--bg={bg ? `url(${bg})` : 'none'}
	style:box-shadow={innerWidth > 767 ? null : shadow}
>
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

	{#if innerWidth > 767}
		<div class="content">
			<h3>{project.title}</h3>
			<p class="genre">{project.genre}</p>
			<div class="overview">{@html md(project.overview)}</div>
		</div>
	{:else if isOpen}
		<div class="content" transition:slide={{ duration: 300 }}>
			<h3>{project.title}</h3>
			<p class="genre">{project.genre}</p>
			<div class="overview">{@html md(project.overview)}</div>
		</div>
	{/if}

	{#if innerWidth < 768}
		<button class="toggle" class:open={isOpen} onclick={toggle} aria-label="Toggle details">
			<svg viewBox="0 0 24 24" width="24" height="24">
				<path
					d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
					fill={color}
				/>
			</svg>
		</button>
	{/if}

	<div class="shadow-box" style:z-index={-10 - zIndex}></div>
</article>

<style>
	.card {
		position: relative;
		padding: 1.3rem 1.5rem 2rem;
		margin: 2rem;
		margin-bottom: 6rem;
		border: solid var(--accent) 0.5rem;
		border-radius: calc(var(--border-radius) * 3);
		background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), var(--bg);
		background-position: center;
		background-size: cover;
	}

	.shadow-box {
		position: absolute;
		z-index: -10;
		top: -1%;
		left: -2%;
		height: 103%;
		width: 102%;
		border: solid var(--accent) 2rem;
		border-radius: calc(var(--border-radius) * 3);
	}

	.media {
		position: relative;
		z-index: 200;
		aspect-ratio: 16 / 9;
		margin-bottom: 1.5rem;
		border-radius: calc(var(--border-radius) * 2);
		overflow: hidden;
	}
	.media :is(video, img) {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content {
		padding-bottom: 3rem;
	}
	h3 {
		margin-bottom: 0.5rem;
		font-size: 2.5rem;
		line-height: 1;
	}
	.genre {
		font-size: 1.2rem;
		margin-bottom: 1rem;
	}
	.overview :global(p) {
		margin-bottom: 0.5rem;
		font-size: 1.2rem;
		font-weight: 600;
		line-height: 1.3;
	}

	.toggle {
		display: flex;
		justify-content: center;
		width: 100%;
		padding: 0.5rem;
		border: 0.3rem solid var(--accent);
		border-radius: 100rem;
		cursor: pointer;
	}
	.toggle svg {
		width: 2rem;
		height: 2rem;
		transition: transform 0.2s ease-in;
	}
	.toggle.open svg {
		transform: rotate(180deg);
	}

	@media (min-width: 768px) {
		h3 {
			margin-bottom: 1rem;
			font-size: 3rem;
		}
		.genre {
			margin-bottom: 1.5rem;
			font-size: 1.7rem;
		}
		.overview :global(p) {
			margin-bottom: 0.7rem;
			font-size: 1.5rem;
			line-height: 1.5;
		}
	}

	@media (min-width: 1024px) {
		.card {
			margin: 2rem;
			border: none;
			box-shadow: var(--box-shadow);
			padding: 0;
			overflow: hidden;
		}
		.shadow-box {
			display: none;
		}
		.media {
			margin-bottom: 0;
			border-radius: 0;
		}
		.content {
			padding: 2rem 5rem 5rem;
		}
		h3 {
			font-size: 4rem;
			font-weight: 900;
		}
		.overview :global(p) {
			font-weight: 300;
		}
	}
</style>
