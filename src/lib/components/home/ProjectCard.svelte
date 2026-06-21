<script lang="ts">
	import { md } from '$lib/markdown';
	import Button from '$lib/components/Button.svelte';
	import EmbedFacade from '$lib/components/EmbedFacade.svelte';
	import { youtubeEmbed } from '$lib/youtube';
	import type { HomeProjectRef, Project } from '$lib/content/types';

	let {
		ref,
		project,
		color = 'var(--mango-yellow)'
	}: { ref: HomeProjectRef; project: Project; color?: string } = $props();

	const bg = $derived(project.header.headerImage?.src);

	// long colour-stepped shadow trail (mobile only; widescreen uses the soft shadow)
	const shadow = $derived(
		Array.from({ length: 60 }, (_, i) => `${i * -7.5}px ${i * 5}px 0 ${color}`).join(',')
	);
</script>

<article
	class="card"
	style:--accent={color}
	style:--bg={bg ? `url(${bg})` : 'none'}
	style:box-shadow={shadow}
>
	{#if project.heroVideo}
		<div class="media">
			<EmbedFacade
				src={youtubeEmbed(project.heroVideo) ?? ''}
				title={`${project.header.name ?? ref.uid} video`}
				provider="YouTube"
				poster={bg}
			/>
		</div>
	{/if}

	<div class="body">
		<div class="text">
			{#if project.header.nameGraphic}
				<img class="title-graphic" src={project.header.nameGraphic.src} alt={project.header.name ?? ''} />
			{:else}
				<h2>{project.header.name ?? ref.uid}</h2>
			{/if}

			{#if project.facts.genre}
				<p class="genre">{project.facts.genre}</p>
			{/if}
			{#if project.facts.role}
				<p class="roles"><b>Roles:</b> {project.facts.role}</p>
			{/if}

			<div class="pitch">{@html md(ref.overview)}</div>
		</div>

		<div class="buttons">
			<Button href={`/projects/${ref.uid}`} {color}>More</Button>
			{#if ref.externalLink}
				<Button href={ref.externalLink} {color} external>
					{ref.externalButtonText ?? 'Visit'}
				</Button>
			{/if}
		</div>
	</div>
</article>

<style>
	.card {
		width: 100%;
		margin: 2rem 0 6rem;
		border-radius: calc(var(--border-radius) * 3);
		overflow: hidden;
		background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), var(--bg);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0% 60%;
		border: 0.5rem solid var(--accent);
	}

	.media {
		aspect-ratio: 16 / 9;
	}

	.body {
		padding: 1.5rem 1.5rem 2rem;
	}

	.title-graphic {
		height: 3rem;
		max-width: 100%;
		margin-bottom: 0.75rem;
	}
	h2 {
		font-size: 2.5rem;
		line-height: 1;
		margin-bottom: 0.5rem;
	}
	.genre {
		font-size: 1.3rem;
		margin-bottom: 0.75rem;
	}
	.roles {
		font-size: 1.3rem;
		margin-bottom: 1.25rem;
	}
	.pitch :global(p) {
		font-size: 1.3rem;
		font-weight: 600;
		line-height: 1.4;
		margin-bottom: 0.75rem;
	}
	.buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: flex-end;
		font-size: 1.4rem;
	}

	@media (min-width: 1024px) {
		.card {
			display: flex;
			justify-content: flex-end;
			min-height: 43rem;
			border: none;
			border-radius: calc(var(--border-radius) * 4);
			box-shadow: var(--box-shadow) !important;
			/* widescreen: show the image at full brightness; only the text panel is darkened */
			background-image: var(--bg);
		}
		.media {
			width: 50%;
			aspect-ratio: auto;
		}
		.body {
			width: 50%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 2.5rem 3rem 3rem 5rem;
			background-color: rgba(0, 0, 0, 0.9);
		}
		.title-graphic {
			height: 5rem;
		}
		h2 {
			font-size: 4rem;
		}
		.genre,
		.roles {
			font-size: 1.6rem;
		}
		.pitch :global(p) {
			font-size: 1.6rem;
			font-weight: 300;
		}
	}
</style>
