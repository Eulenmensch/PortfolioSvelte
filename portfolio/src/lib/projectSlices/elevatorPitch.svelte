<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	export let slice: { [key: string]: any };
</script>

<div>
	<h3>{prismicH.asText(slice.primary.pitch)}</h3>
</div>

<style>
	div {
		padding: 0 var(--x-padding);
		margin: 5rem 0;
	}
	h3 {
		padding: 0 0.8rem;
		font-size: 1.8rem;
		line-height: 130%;
	}
</style>
