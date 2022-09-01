<script lang="ts">
	export let slice: { [key: string]: any };
	export let context: { [key: string]: any };
	let images: { [key: string]: any } = slice.items;
</script>

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
			<img src={image.gallery_image.url} alt={image.gallery_image.alt} />
		</div>
	{/each}
</div>

<style>
	:root {
		--column-width: 13rem;
	}
	h1 {
		padding: 0 var(--x-padding);
		margin-bottom: 3.5rem;
		margin-top: 7rem;
		font-size: 3rem;
		text-align: center;
	}
	#container {
		max-width: 140rem;
		margin: 0 auto;
		display: grid;
		grid-gap: 1.5rem;
		grid-template-columns: repeat(auto-fill, var(--column-width));
		grid-auto-rows: minmax(20px, auto);
		justify-content: center;
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
	}
	#container > * img:hover {
		filter: brightness(70%);
	}
</style>
