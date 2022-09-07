<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import inView from '../../inView';
	import Button from '$lib/button.svelte';
	export let project: { [key: string]: any };
	export let color: string;

	var shadow = '';
	var factor = 5;
	onMount(() => {
		for (var i = 0; i < 300 / factor; i++) {
			shadow += (shadow ? ',' : '') + i * -1.5 * factor + 'px ' + i * 1 * factor + 'px 0 ' + color;
		}
	});

	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);

	let title: string | null = prismicH.asText(project.primary.title),
		genre: string | null = prismicH.asText(project.primary.genre),
		// roles: string | null =,
		pitch: string | null = prismicH.asHTML(project.primary.overview),
		video_url: string | null = prismicH.asLink(project.primary.video),
		image: string | null = prismicH.asLink(project.primary.image),
		iframe_url: string | null = prismicH.asLink(project.primary.iframe_link);
</script>

<main
	use:inView={{ threshold: 0.7 }}
	on:enter={(e) => {
		if (e.currentTarget.querySelector('#iframe')) {
			e.currentTarget.querySelector('#iframe').style.display = 'inline';
		}
	}}
	style:box-shadow={shadow}
	style:--border-color={color}
>
	{#if video_url != null}
		<!-- svelte-ignore a11y-media-has-caption -->
		<video src={video_url} />
	{:else if iframe_url != null}
		<iframe
			id="iframe"
			src={iframe_url}
			title={title + ' embed'}
			frameborder="0"
			width="100%"
			height="100%"
		/>
	{:else if image != null}
		<img src={image} alt="project" />
	{/if}

	{#if isOpen}
		<div id="content" transition:slide={{ duration: 300 }}>
			<h1>{title}</h1>
			<p id="genre">{genre}</p>
			<!-- <p id="roles"><b>Roles:</b> {roles}</p> -->
			<div id="pitch">
				{@html pitch}
			</div>
		</div>
	{/if}

	<Button {color} on:click={toggle}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24"
			height="24"
			transform="rotate({180 * (isOpen ? 1 : 0)})"
		>
			<path fill="none" d="M0 0h24v24H0z" /><path
				d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
				fill={color}
			/>
		</svg>
	</Button>
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
	video,
	iframe,
	img {
		width: 100%;
		aspect-ratio: 16/9;
		margin-bottom: 1.5rem;
		border-radius: calc(var(--border-radius) * 2);
	}
	iframe {
		display: none;
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
	svg {
		transition: transform 0.2s ease-in;
	}
</style>
