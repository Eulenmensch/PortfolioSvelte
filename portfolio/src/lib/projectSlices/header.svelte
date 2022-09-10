<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	export let slice: { [key: string]: any };
	export let context: { [key: string]: any };

	const image = prismicH.asImageWidthSrcSet(slice.primary.header_image);
	const imageSrc = image?.src;
	const titleGraphic = prismicH.asImageSrc(slice.primary.project_name_graphic);
</script>

<header
	style:--background-image="url({imageSrc})"
	style:--overlay={context.doc.data.primary_color}
	style:--gradient={'linear-gradient(rgba(0,0,0,0.7), ' + context.doc.data.primary_color + ')'}
>
	{#if titleGraphic != null}
		<img src={titleGraphic} alt="" />
	{:else}
		<h1>{prismicH.asText(slice.primary.project_name)}</h1>
	{/if}
	<h2>{prismicH.asText(slice.primary.subtitle)}</h2>
</header>

<style>
	header {
		height: 45vw;
		max-height: 20rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* background: var(--overlay); */
		background: var(--gradient), var(--background-image);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 50% 60%;
		/* background-blend-mode: multiply; */
	}
	img {
		height: 40%;
		max-width: 80vw;
		margin-top: 3rem;
	}
</style>
