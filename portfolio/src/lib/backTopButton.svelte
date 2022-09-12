<script lang="ts">
	import { fade } from 'svelte/transition';

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />
<main class:widescreen={innerWidth > 1023} transition:fade={{ duration: 300 }}>
	<div id="socials-container">
		<button on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
			<svg
				width="24px"
				height="24px"
				stroke-width="4.5"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				color="currentColor"
			>
				<path
					d="M6 15l6-6 6 6"
					stroke="currentColor"
					stroke-width="4.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</div>
</main>

<style>
	#socials-container {
		position: fixed;
		z-index: 50;
		bottom: 1rem;
		right: 0.7rem;
	}
	.widescreen #socials-container {
		bottom: 1.7rem;
		right: 1.5rem;
	}

	button {
		height: 4rem;
		width: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border: solid 0.5rem var(--mango-yellow);
		border-radius: 50%;
		background-color: #1a1a1a;
		cursor: pointer;
		transition: background-color 300ms, color 300ms;
	}
	button svg {
		width: 50%;
		height: 50%;
	}

	.widescreen button {
		border: none;
		background-color: var(--mango-yellow);
		color: #1a1a1a;
		box-shadow: var(--box-shadow);
	}
	.widescreen button:hover {
		background-color: var(--kaomaru-blue);
		color: var(--text-color-primary);
	}
</style>
