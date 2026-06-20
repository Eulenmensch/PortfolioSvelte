<script lang="ts">
	import EmbedFacade from '$lib/components/EmbedFacade.svelte';
	import { youtubeEmbed } from '$lib/youtube';

	let {
		url,
		descriptor,
		poster = null
	}: { url?: string; descriptor?: string; poster?: string | null } = $props();
	const src = $derived(youtubeEmbed(url));
</script>

{#if src}
	<figure class="secondary-video">
		<div class="frame">
			<EmbedFacade {src} title={descriptor ?? 'video'} provider="YouTube" {poster} />
		</div>
		{#if descriptor}
			<figcaption>{descriptor}</figcaption>
		{/if}
	</figure>
{/if}

<style>
	.secondary-video {
		margin: 0;
	}
	.frame {
		aspect-ratio: 16 / 9;
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: var(--box-shadow);
	}
	figcaption {
		margin-top: 0.75rem;
		font-size: 1.2rem;
		font-weight: 300;
	}
</style>
