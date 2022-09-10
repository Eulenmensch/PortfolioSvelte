<script lang="ts">
	export let slice: { [key: string]: any };
	export let context: { [key: string]: any };

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<main class:widescreen={innerWidth > 1023}>
	<div>
		{@html slice.primary.video_url.html}
	</div>
</main>

<style>
	div {
		display: flex;
		align-items: stretch;
		justify-content: stretch;
		width: 100%;
		max-width: 90rem;
		margin: 2rem auto;
		padding: 0 var(--x-padding);
	}
	.widescreen > div {
		margin: 0;
		padding: 0;
	}
	div > :global(iframe) {
		width: 100%;
		height: 100%;
		aspect-ratio: 16/9;
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: var(--box-shadow);
	}
</style>
