<script lang="ts">
	import Lightbox from './Lightbox.svelte';
	import type { GallerySection, GalleryImage } from '$lib/content/types';

	let { section }: { section: GallerySection } = $props();
	const images = $derived(section.images.filter((img) => img.src));

	let active = $state<GalleryImage | null>(null);
</script>

<section class="gallery">
	<h2>Gallery</h2>
	<div class="masonry">
		{#each images as image}
			<button class="tile" onclick={() => (active = image)}>
				<img src={image.src} alt={image.alt ?? image.caption ?? ''} loading="lazy" />
			</button>
		{/each}
	</div>
</section>

{#if active?.src}
	<Lightbox src={active.src} caption={active.caption} onclose={() => (active = null)} />
{/if}

<style>
	.gallery {
		margin: 7rem 0;
		padding: 0 var(--x-padding);
	}
	h2 {
		text-align: center;
		font-size: 3rem;
		margin-bottom: 3rem;
		text-decoration: underline;
		text-decoration-color: var(--highlight);
		text-underline-offset: 0.2em;
	}
	.masonry {
		max-width: 100rem;
		margin: 0 auto;
		column-count: 2;
		column-gap: 1.5rem;
	}
	.tile {
		display: block;
		width: 100%;
		margin-bottom: 1.5rem;
		break-inside: avoid;
		cursor: zoom-in;
	}
	img {
		width: 100%;
		border-radius: var(--border-radius);
		transition: filter 0.2s;
	}
	.tile:hover img {
		filter: brightness(70%);
	}

	@media (min-width: 768px) {
		.masonry {
			column-count: 3;
		}
	}
</style>
