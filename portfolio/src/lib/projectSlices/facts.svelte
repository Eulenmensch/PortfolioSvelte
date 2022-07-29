<script lang="ts">
	export let slice: { [key: string]: any };
</script>

{#each Object.entries(slice.primary) as [title, fact]}
	<div id="fact-container">
		<!-- since I'm using the field's UID, I have to format it from unique_ID to unique ID -->
		<h3>{title.replace('_', ' ')}</h3>
		<p>{fact}</p>
	</div>
{/each}

<style>
	#fact-container {
		display: flex;
	}
	h3 {
		width: 7rem;
		font-size: 1rem;
		text-transform: capitalize;
	}
</style>
