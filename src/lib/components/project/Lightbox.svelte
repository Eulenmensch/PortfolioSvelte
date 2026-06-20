<script lang="ts">
	import { fade } from 'svelte/transition';

	let { src, caption, onclose }: { src: string; caption?: string; onclose: () => void } = $props();

	function onkeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') onclose();
	}
</script>

<svelte:window {onkeydown} />

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
<div class="backdrop" transition:fade={{ duration: 200 }} onclick={onclose}>
	<figure>
		<img {src} alt={caption ?? ''} />
		{#if caption}<figcaption>{caption}</figcaption>{/if}
	</figure>
	<button class="close" aria-label="Close" onclick={onclose}>×</button>
</div>

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		background: rgba(0, 0, 0, 0.9);
		cursor: zoom-out;
	}
	figure {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 90vw;
	}
	img {
		max-width: 100%;
		max-height: 85vh;
		border-radius: var(--border-radius);
	}
	figcaption {
		margin-top: 1.5rem;
		max-width: 60ch;
		text-align: center;
		font-size: 1.3rem;
	}
	.close {
		position: fixed;
		top: 1rem;
		right: 1.5rem;
		font-size: 3rem;
		line-height: 1;
		color: var(--text-color-primary);
		cursor: pointer;
	}
</style>
