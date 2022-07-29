<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	export let slice: { [key: string]: any };
	export let context: { [key: string]: any };
</script>

<main>
	<div>
		<iframe
			width="100%"
			height="100%"
			src={prismicH.asLink(slice.primary.video_url)}
			title="{context.doc.uid} youtube video"
			frameborder="0"
			allow="clipboard-write; encrypted-media; picture-in-picture"
			allowfullscreen
		/>
	</div>
</main>

<style>
	div {
		width: 100vw;
		aspect-ratio: 16/9;
	}
</style>
