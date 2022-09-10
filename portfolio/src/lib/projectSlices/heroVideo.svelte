<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	export let slice: { [key: string]: any };
	export let context: { [key: string]: any };
</script>

<main>
	<div>
		<iframe
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
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 90rem;
		aspect-ratio: 16/9;
		margin: 2rem auto;
		padding: 0 var(--x-padding);
	}
	iframe {
		width: 100%;
		aspect-ratio: 16/9;
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: 0rem 0.3rem 3rem rgba(0, 0, 0, 0.6);
	}
</style>
