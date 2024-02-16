<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	export let slice: { [key: string]: any };
	let videos: { [key: string]: any } = slice.items;

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<main class:widescreen={innerWidth > 1023}>
	{#each Object.entries(videos) as [key, video]}
		<div id="container">
			<div>
				<iframe
					width="100%"
					height="100%"
					src={prismicH.asLink(video.video_url)}
					title={video.video_title}
					frameborder="0"
					allow="clipboard-write; encrypted-media; picture-in-picture"
					allowfullscreen
				/>
			</div>
			{@html prismicH.asHTML(video.video_description)}
		</div>
	{/each}
</main>

<style>
	main {
		padding: 0 var(--x-padding);
	}
	.widescreen {
		padding: 0;
		display: flex;
		column-gap: 3rem;
	}

	div {
		width: 100%;
		aspect-ratio: 16/9;
	}
	iframe {
		border-radius: var(--border-radius);
	}
	main :global(p) {
		font-size: 1rem;
		font-weight: 200;
		padding-left: 0.3rem;
		margin-bottom: 3rem;
	}
	.widescreen :global(p) {
		font-size: 1.2rem;
		font-weight: 200;
	}
</style>
