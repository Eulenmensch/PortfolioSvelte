<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	export let slice: { [key: string]: any };
	export let context: { [key: string]: any };
</script>

<div id="container" style:border-color={context.doc.data.highlight_color}>
	{@html prismicH.asHTML(slice.primary.responsibilities)}
</div>

<style>
	#container {
		border-left: 0.3rem solid;
		padding: 1.5rem 2rem 2rem 3rem;
		background: hsla(0 0% 0% / 0.7);
		font-size: 1.3rem;
		line-height: 160%;
		margin: 5rem 0;
	}
	#container :global(p):not(:last-child) {
		margin-bottom: 1rem;
	}
</style>
