<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import inView from '../../inView';
	import Button from '$lib/button.svelte';
	export let project: { [key: string]: any };
	export let color: string;
	export let index: number;

	var shadow = '';
	var factor = 5;
	onMount(() => {
		for (var i = 0; i < 300 / factor; i++) {
			shadow += (shadow ? ',' : '') + +i * -1.5 * factor + 'px ' + i * 1 * factor + 'px 0 ' + color;
		}
	});

	let innerWidth: number = 0;

	let z_index = index;
	let isOpen = false;
	$: if (innerWidth > 767) {
		isOpen = true;
		z_index = index;
	}
	$: if (innerWidth < 768) {
		z_index = 0;
	}

	const toggle = () => (isOpen = !isOpen);

	let title: string | null = prismicH.asText(project.primary.title),
		genre: string | null = prismicH.asText(project.primary.genre),
		// roles: string | null =,
		pitch: string | null = prismicH.asHTML(project.primary.overview),
		video_url: string | null = prismicH.asLink(project.primary.video),
		image: string | null = prismicH.asLink(project.primary.image),
		iframe_url: string | null = prismicH.asLink(project.primary.iframe_link),
		background_url: string | null = prismicH.asImageSrc(project.primary.background_image);
</script>

<svelte:window bind:innerWidth />

<main
	use:inView={{ threshold: 0.7 }}
	on:enter={(e) => {
		if (e.currentTarget.querySelector('#iframe')) {
			e.currentTarget.querySelector('#iframe').style.display = 'inline';
		}
	}}
	style:--border-color={color}
	style:--background-url={'url(' + background_url + ')'}
	class:tablet={innerWidth > 767}
	class:widescreen={innerWidth > 1023}
>
	{#if video_url != null}
		<!-- svelte-ignore a11y-media-has-caption -->
		<video autoplay loop muted>
			<source src={video_url} type="video/mp4" />
		</video>
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
	{#if innerWidth < 768}
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
	{/if}
	<div id="shadow" style:box-shadow={shadow} style:z-index={-10 - z_index} />
</main>

<style>
	main {
		position: relative;
		padding: 1.3rem 1.5rem 2rem;
		margin: 2rem;
		margin-bottom: 6rem;
		border: solid var(--border-color) 0.5rem;
		border-radius: calc(var(--border-radius) * 3);
		background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), var(--background-url);
		background-position: center;
		background-size: cover;
	}
	.widescreen {
		border: none;
		box-shadow: var(--box-shadow);
		padding: 0;
		overflow: hidden;
	}

	#shadow {
		position: absolute;

		z-index: -10;
		top: -1%;
		left: -2%;
		height: 103%;
		width: 102%;
		border: solid var(--border-color) 2rem;
		border-radius: calc(var(--border-radius) * 3);
	}
	.widescreen #shadow {
		display: none;
	}

	video,
	iframe,
	img {
		position: relative;
		z-index: 200;
		width: 100%;
		aspect-ratio: 16/9;
		margin-bottom: 1.5rem;
		border-radius: calc(var(--border-radius) * 2);
	}
	.widescreen video,
	iframe,
	img {
		border-radius: 0;
	}

	iframe {
		display: none;
	}
	.tablet iframe {
		height: auto;
	}

	#content {
		padding-bottom: 3rem;
	}
	.widescreen #content {
		padding: 2rem 5rem 5rem;
	}

	h1 {
		margin-bottom: 0.5rem;
		font-size: 2.5rem;
		line-height: 100%;
	}
	.tablet h1 {
		margin-bottom: 1rem;
		font-size: 3rem;
	}
	.widescreen h1 {
		margin-bottom: 0.5ch;
		font-size: 4rem;
		font-weight: 900;
	}

	p {
		font-size: 1.2rem;
	}
	.tablet p {
		font-size: 1.7rem;
	}
	.widescreen p {
		font-weight: 600;
	}

	#genre {
		margin-bottom: 1rem;
	}
	.tablet #genre {
		margin-bottom: 1.5rem;
	}

	/* #roles {
		margin-bottom: 2rem;
		display: none;
	} */

	#pitch > :global(*) {
		margin-bottom: 0.5rem;
		font-size: 1.2rem;
		line-height: 130%;
		font-weight: 600;
	}
	.tablet #pitch > :global(*) {
		margin-bottom: 0.7rem;
		font-size: 1.5rem;
		line-height: 150%;
	}
	.widescreen #pitch > :global(*) {
		font-weight: 300;
	}

	svg {
		transition: transform 0.2s ease-in;
	}
</style>
