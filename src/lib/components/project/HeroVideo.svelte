<script lang="ts">
	import EmbedFacade from '$lib/components/EmbedFacade.svelte';
	import { youtubeEmbed } from '$lib/youtube';

	let { url, title, poster = null }: { url: string; title: string; poster?: string | null } = $props();
	const src = $derived(youtubeEmbed(url));
</script>

{#if src}
	<div class="hero-video">
		<div class="frame">
			<EmbedFacade {src} {title} provider="YouTube" {poster} />
		</div>
	</div>
{/if}

<style>
	.hero-video {
		width: 100%;
		max-width: 90rem;
		margin: 2rem auto;
		padding: 0 var(--x-padding);
	}
	.frame {
		aspect-ratio: 16 / 9;
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: var(--box-shadow);
	}
</style>
