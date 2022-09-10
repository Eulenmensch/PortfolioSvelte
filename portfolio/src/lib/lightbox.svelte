<script lang="ts">
	export let url: string | null = '';

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<main on:click class:widescreen={innerWidth > 1023}>
	<div>
		<img src={url} alt="" />
		<slot>image missing</slot>
	</div>
</main>

<style>
	main {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background: rgba(0, 0, 0, 0.9);
		z-index: 1000;

		display: flex;
		align-items: center;
		justify-content: center;
	}
	div {
		display: flex;
		max-width: 90vw;
		/* height: 50vh; */
		flex-direction: column;
		align-items: center;
		flex-wrap: wrap;
	}
	img {
		/* height: 100%; */
		max-width: 100%;
		/* margin: auto; */
		max-height: 90vh;
		border-radius: var(--border-radius);
		background-size: cover;
		background-position: 50%;
	}
	.widescreen div :global(p) {
		margin-top: 2rem;
		width: 60%;
		text-align: center;
	}
</style>
