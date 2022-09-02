<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import { onMount } from 'svelte';
	export let project: { [key: string]: any };
	export let color: string;

	var shadow = '';
	onMount(() => {
		for (var i = 0; i < 400; i++) {
			shadow += (shadow ? ',' : '') + i * -1 + 'px ' + i * 1 + 'px 0 #2D2C6D';
		}
	});

	let title: string | null,
		genre: string | null,
		roles: string | null,
		pitch: string | null,
		video_url: string | null;
	const slices: { [key: string]: any } = project.data.body;
	Object.entries(slices).forEach((slice) => {
		if (slice[1].slice_type == 'header') {
			title = prismicH.asText(slice[1].primary.project_name);
		} else if (slice[1].slice_type == 'facts') {
			genre = slice[1].primary.genre;
			roles = slice[1].primary.role;
		} else if (slice[1].slice_type == 'elevator_pitch') {
			pitch = prismicH.asHTML(slice[1].primary.pitch);
		} else if (slice[1].slice_type == 'hero_video') {
			video_url = prismicH.asLink(slice[1].primary.video_url);
		}
	});
</script>

<main style:box-shadow={shadow} style:--border-color={color}>
	{#if video_url != null}
		<iframe
			src={video_url}
			title="{title} youtube video"
			frameborder="0"
			allow="clipboard-write; encrypted-media; picture-in-picture"
			allowfullscreen
		/>
	{/if}

	<h1>{title}</h1>
	<p id="genre">{genre}</p>
	<p id="roles"><b>Roles:</b> {roles}</p>
	<div id="pitch">
		{@html pitch}
	</div>
</main>

<style>
	main {
		padding: 1.3rem 1.5rem 2rem;
		margin: 2rem;
		margin-bottom: 6rem;
		background-color: #1f1f22;
		border: solid var(--border-color) 0.5rem;
		border-radius: calc(var(--border-radius) * 3);
	}
	iframe {
		width: 100%;
		aspect-ratio: 16/9;
		margin-bottom: 1.5rem;
		border-radius: calc(var(--border-radius) * 2);
	}
	h1 {
		margin-bottom: 0.5rem;
		font-size: 2.5rem;
		line-height: 100%;
	}
	p {
		font-size: 1.2rem;
	}
	#genre {
		margin-bottom: 1rem;
	}
	#roles {
		margin-bottom: 2rem;
	}
	#pitch > :global(*) {
		margin-bottom: 0.5rem;
		font-size: 1.2rem;
		line-height: 130%;
		font-weight: 600;
	}
</style>
