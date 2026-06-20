<script lang="ts">
	import { md } from '$lib/markdown';

	let { responsibilities }: { responsibilities: string } = $props();
</script>

<div class="responsibilities">
	{@html md(responsibilities)}
</div>

<style>
	.responsibilities {
		border-left: 0.3rem solid var(--highlight);
		padding: 1.5rem 2rem 2rem 3rem;
		background: hsla(0 0% 0% / 0.7);
		font-size: 1.3rem;
		line-height: 1.6;
		margin: 4rem 0;
	}
	.responsibilities :global(p:not(:last-child)) {
		margin-bottom: 1rem;
	}
</style>
