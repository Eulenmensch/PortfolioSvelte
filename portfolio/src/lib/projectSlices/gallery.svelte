<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import Lightbox from '$lib/lightbox.svelte';

	export let slice: { [key: string]: any };
	export let context: { [key: string]: any };
	let images: { [key: string]: any } = slice.items;

	let innerWidth: number;

	let isOpen: boolean = false;
	const toggle = (image_url: string | null, image_text: string | null) => {
		isOpen = !isOpen;
		url = image_url;
		text = image_text;
	};
	let url: string | null;
	let text: string | null;
</script>

<svelte:window bind:innerWidth />

<main class:widescreen={innerWidth > 1023}>
	<h1 style:text-decoration="{context.doc.data.highlight_color} underline">Gallery</h1>
	<div id="container">
		{#each Object.entries(images) as [key, image]}
			<div
				class={`height-${Math.min(
					7,
					Math.floor(
						(image.gallery_image.dimensions.width / image.gallery_image.dimensions.height) * 3
					)
				)}`}
			>
				<img
					src={image.gallery_image.url}
					alt={image.gallery_image.alt}
					on:click={() => toggle(image.gallery_image.url, prismicH.asText(image.image_description))}
				/>
			</div>
		{/each}
	</div>
</main>
{#if isOpen}
	<Lightbox on:click={() => toggle(null, null)} bind:url>
		<p>{text}</p>
	</Lightbox>
{/if}

<style>
	main {
		--column-width: 13rem;
	}
	.widescreen {
		--column-width: 32rem;
	}
	h1 {
		padding: 0 var(--x-padding);
		margin-bottom: 3.5rem;
		margin-top: 7rem;
		font-size: 3rem;
		text-align: center;
	}
	#container {
		max-width: 100rem;
		margin: 0 auto;
		display: grid;
		grid-gap: 1.5rem;
		grid-template-columns: repeat(auto-fill, var(--column-width));
		grid-auto-rows: minmax(20px, auto);
		justify-content: center;
		overflow: hidden;
	}

	#container > * {
		width: var(--column-width);
		float: left;
	}

	.height-0 {
		grid-row-end: span 2;
	}
	.height-1 {
		grid-row-end: span 3;
	}
	.height-2 {
		grid-row-end: span 4;
	}
	.height-3 {
		grid-row-end: span 5;
	}
	.height-4 {
		grid-row-end: span 6;
	}
	.height-5 {
		grid-row-end: span 7;
	}
	.height-6 {
		grid-row-end: span 8;
	}
	.height-7 {
		grid-row-end: span 9;
	}

	#container > * img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--border-radius);
		overflow: hidden;
		transition: filter 0.2s;
	}
	#container > * img:hover {
		filter: brightness(70%);
		cursor: pointer;
	}
</style>
