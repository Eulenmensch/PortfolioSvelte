<script lang="ts">
	export let slice: { [key: string]: any };
	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<main class:widescreen={innerWidth > 1023}>
	{#each Object.entries(slice.primary) as [title, fact]}
		<div id="fact-container">
			<!-- since I'm using the field's UID, I have to format it from unique_ID to unique ID -->
			<h3>{title.replace('_', ' ') + ':'}</h3>
			<p>{fact}</p>
		</div>
	{/each}
</main>

<style>
	:root {
		--fact-width: 40%;
		--color: rgba(0, 0, 0, 0.267);
	}
	.widescreen {
		--fact-width: 25%;
		padding: 0;
		margin: 0;
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
	.widescreen #fact-container {
		background: none;
		margin: 0;
		margin-bottom: 0.8rem;
		font-size: 1rem;
	}

	h3 {
		width: var(--fact-width);
		padding: 0.9rem;
		font-size: 1.7rem;
		text-transform: capitalize;
	}
	.widescreen h3 {
		padding: 0;
		font-size: 1.2rem;
	}

	p {
		width: calc(100% - var(--fact-width));
		padding: 0.5rem;
		font-size: 1.7rem;
	}
	.widescreen p {
		width: auto;
		margin: 0;
		padding: 0;
		font-size: 1.2rem;
	}
</style>
