<script lang="ts">
	import EmbedFacade from '$lib/components/EmbedFacade.svelte';
	import { md } from '$lib/markdown';
	import { youtubeEmbed } from '$lib/youtube';
	import type { VideoSection } from '$lib/content/types';

	let { section }: { section: VideoSection } = $props();
</script>

<div class="video-section">
	{#each section.items as item}
		<div class="item">
			<div class="frame">
				<EmbedFacade src={youtubeEmbed(item.url) ?? ''} title={item.title ?? 'video'} provider="YouTube" />
			</div>
			{#if item.title}<h3>{item.title}</h3>{/if}
			{#if item.description}<div class="desc">{@html md(item.description)}</div>{/if}
		</div>
	{/each}
</div>

<style>
	.video-section {
		padding: 0 var(--x-padding);
		margin: 5rem 0;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
	.frame {
		aspect-ratio: 16 / 9;
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: var(--box-shadow);
	}
	h3 {
		margin-top: 0.75rem;
		font-size: 1.4rem;
		font-weight: 700;
	}
	.desc :global(p) {
		font-size: 1.1rem;
		font-weight: 200;
		margin-top: 0.25rem;
	}

	@media (min-width: 1024px) {
		.video-section {
			flex-direction: row;
			max-width: 100rem;
			margin: 6rem auto;
			padding: 0;
		}
		.item {
			flex: 1;
		}
		.desc :global(p) {
			font-size: 1.2rem;
		}
	}
</style>
