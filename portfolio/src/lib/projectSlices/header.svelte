<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	export let slice: { [key: string]: any };
	export let context: { [key: string]: any };

	const image = prismicH.asImageWidthSrcSet(slice.primary.header_image);
	const imageSrc = image?.src;
</script>

<header style:background-image="url({imageSrc})" style:--overlay={context.doc.data.primary_color}>
	<h1>{prismicH.asText(slice.primary.project_name)}</h1>
	<h2>{prismicH.asText(slice.primary.subtitle)}</h2>
</header>

<style>
	header {
		height: 20vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--overlay);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 50% 60%;
		background-blend-mode: overlay;
	}
</style>
