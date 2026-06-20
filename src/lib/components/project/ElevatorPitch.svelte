<script lang="ts">
	import { mdInline } from '$lib/markdown';

	let { pitch }: { pitch: string } = $props();
	// content migrated as a bold heading ("## **…**"); render it as a plain tagline.
	const text = $derived(pitch.replace(/^#+\s*/, ''));
</script>

<p class="pitch">{@html mdInline(text)}</p>

<style>
	.pitch {
		font-size: 1.7rem;
		line-height: 1.4;
		margin: 2rem 0;
	}
	.pitch :global(strong) {
		font-weight: 800;
	}

	@media (min-width: 1024px) {
		.pitch {
			font-size: 1.6rem;
			margin: 0 0 1rem;
		}
	}
</style>
