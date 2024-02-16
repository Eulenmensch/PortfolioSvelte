<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	export let slice: { [key: string]: any };
	export let context: { [key: string]: any };
	let images: { [key: string]: any } = slice.items;

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<main class:widescreen={innerWidth > 1023}>
	<div class={slice.slice_label}>
		<div id="paragraph-text">
			<h1 style:text-decoration="{context.doc.data.highlight_color} underline">
				{prismicH.asText(slice.primary.heading)}
			</h1>
			{@html prismicH.asHTML(slice.primary.paragraph_text)}
		</div>
		<div id="images">
			{#each Object.entries(images) as [key, item]}
				<!-- an empty paragraph_image object means that it is a video embed instead -->
				<div id="image-container">
					{#if Object.keys(item.paragraph_image).length === 0}
						{@html item.video_embed.html}
					{:else if innerWidth > 1023}
						<div
							id="image"
							style:background-image={'url(' + prismicH.asImageSrc(item.paragraph_image) + ')'}
						/>
					{:else}
						<img src={item.paragraph_image.url} alt={item.paragraph_image.alt} />
					{/if}
					<div id="image-description">{@html prismicH.asHTML(item.image_description)}</div>
				</div>
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		padding: 0 var(--x-padding);
		margin-top: 7rem;
		margin-bottom: 3rem;
	}
	.widescreen {
		margin: 10rem 0 20rem;
		padding: 0;
	}

	.widescreen :first-of-type {
		margin-top: 0;
	}

	.widescreen > * {
		display: flex;
		flex-direction: row;
		column-gap: 9rem;
		justify-content: space-between;
	}

	.widescreen #paragraph-text {
		position: relative;
	}

	h1 {
		font-size: 3rem;
		line-height: 150%;
		margin-bottom: 1rem;
	}
	.widescreen h1 {
		position: absolute;
		top: -2.9ch;
	}
	.widescreen .image_above h1 {
		position: static;
	}

	#paragraph-text :global(p) {
		margin-bottom: 1rem;
	}
	#paragraph-text :global(p:last-child) {
		margin: 0;
	}
	#paragraph-text :global(p),
	#paragraph-text :global(li) {
		font-size: 1.3rem;
		line-height: 150%;
	}
	.widescreen #paragraph-text :global(li) {
		margin-bottom: 0.7rem;
	}
	#paragraph-text :global(ul) {
		margin: 1rem 0;
		padding-left: 2rem;
	}

	.image_left {
		flex-direction: row-reverse;
	}
	.image_below {
		flex-direction: column;
	}
	.image_above {
		flex-direction: column-reverse;
	}

	.widescreen .image_right #paragraph-text,
	.widescreen .image_left #paragraph-text {
		width: 55%;
	}

	#images {
		display: flex;
		flex-direction: column;
	}
	.widescreen .image_right #images,
	.widescreen .image_left #images {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 45%;
	}
	.widescreen .image_above #images,
	.widescreen .image_below #images {
		padding: 1rem 0;
	}

	#images #image-container {
		display: flex;
		flex-direction: column;
	}
	.widescreen .image_right #image-container,
	.widescreen .image_left #image-container {
		height: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}
	.widescreen .image_right #image-container:last-child,
	.widescreen .image_left #image-container:last-child {
		margin-bottom: 0;
	}

	#image,
	img,
	main :global(iframe) {
		width: 100%;
		margin: 2rem 0 0.2rem;
		border-radius: var(--border-radius);
		box-shadow: var(--box-shadow);
		background-size: cover;
		background-position: 50%;
	}
	.widescreen #image,
	.widescreen :global(iframe) {
		flex-grow: 1;
		margin: 0;
		aspect-ratio: unset;
	}

	.widescreen .image_above #image-container:only-child #image,
	.widescreen .image_below #image-container:only-child #image {
		aspect-ratio: 16/6;
	}

	main :global(iframe) {
		height: 100%;
		aspect-ratio: 16/9;
	}

	#image-description :global(p) {
		font-size: 1rem;
		font-weight: 200;
		padding-left: 0.3rem;
	}
	.widescreen #image-description :global(p) {
		margin-top: 0.5rem;
		font-size: 1.2rem;
	}
</style>
