<script lang="ts">
	export let slice: { [key: string]: any };
</script>

<main>
	{#each Object.entries(slice.primary) as [title, fact]}
		<div id="fact-container">
			<!-- since I'm using the field's UID, I have to format it from unique_ID to unique ID -->
			<h3>{title.replace('_', ' ')}</h3>
			<p>{fact}</p>
		</div>
	{/each}
</main>

<style>
	:root {
		--fact-width: 35%;
		--color: rgba(0, 0, 0, 0.267);
	}
	main {
		margin-top: 3rem;
		margin-bottom: 4rem;
		padding: 0 var(--x-padding);
	}
	#fact-container {
		display: flex;
		align-items: center;
		margin: 1rem 0;
		border-radius: var(--border-radius);
		line-height: 150%;
		background-color: var(--color);
	}
	h3 {
		width: var(--fact-width);
		padding: 0.9rem;
		font-size: 1.7rem;
		text-transform: capitalize;
	}
	p {
		width: calc(100% - var(--fact-width));
		padding: 0.5rem;
		font-size: 1.7rem;
	}
</style>
