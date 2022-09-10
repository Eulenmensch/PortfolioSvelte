<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	export let slice: { [key: string]: any };

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<div class:widescreen={innerWidth > 1023}>
	<h3>{prismicH.asText(slice.primary.pitch)}</h3>
</div>

<style>
	div {
		padding: 0 var(--x-padding);
		margin: 5rem 0 2rem;
	}
	.widescreen {
		padding: 1rem 0;
		margin: 0;
	}

	h3 {
		padding: 0 0.8rem;
		font-size: 1.8rem;
		line-height: 130%;
	}
	.widescreen h3 {
		padding: 0;
		line-height: 150%;
		font-size: 1.6rem;
	}
</style>
