<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	export let slice: { [key: string]: any };
	export let context: { [key: string]: any };
	let images: { [key: string]: any } = slice.items;
</script>

<main>
	<h1 style:text-decoration="{context.doc.data.highlight_color} underline">
		{prismicH.asText(slice.primary.heading)}
	</h1>
	{@html prismicH.asHTML(slice.primary.paragraph_text)}
	{#each Object.entries(images) as [key, item]}
		<!-- an empty paragraph_image object means that it is a video embed instead -->
		{#if Object.keys(item.paragraph_image).length === 0}
			{@html item.video_embed.html}
		{:else}
			<img src={item.paragraph_image.url} alt={item.paragraph_image.alt} />
		{/if}
		<div id="image-description">{@html prismicH.asHTML(item.image_description)}</div>
	{/each}
</main>

<!-- this needs different components for all the different slice labels -->

<!-- use the component directive here to dynamically load the correct component -->
<style>
	main {
		padding: 0 var(--x-padding);
		margin-top: 7rem;
		margin-bottom: 3rem;
	}
	h1 {
		font-size: 3rem;
		line-height: 150%;
		margin-bottom: 1rem;
	}
	:global(p) {
		margin-bottom: 1rem;
	}
	:global(p, li) {
		font-size: 1.3rem;
		line-height: 150%;
	}
	:global(ul) {
		margin: 1rem 0;
		padding-left: 2rem;
	}
	img,
	main :global(iframe) {
		width: 100%;
		margin: 2rem 0 0.2rem;
		border-radius: var(--border-radius);
		box-shadow: var(--box-shadow);
	}
	main :global(iframe) {
		height: 100%;
		aspect-ratio: 16/9;
	}
	#image-description :global(p) {
		font-size: 1rem;
		font-weight: bold;
		padding-left: 0.3rem;
	}
</style>
