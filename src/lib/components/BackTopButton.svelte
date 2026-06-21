<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div class="wrap" transition:fade={{ duration: 300 }}>
	<button onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

<style>
	.wrap {
		position: fixed;
		z-index: 50;
		bottom: 1rem;
		right: 0.7rem;
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
		color: var(--mango-yellow);
		cursor: pointer;
		transition:
			background-color 300ms,
			color 300ms;
	}
	button svg {
		width: 50%;
		height: 50%;
	}

	@media (min-width: 1024px) {
		.wrap {
			bottom: 1.7rem;
			right: 1.5rem;
		}
		button {
			border: none;
			background-color: var(--mango-yellow);
			color: #1a1a1a;
			box-shadow: var(--box-shadow);
		}
		button:hover {
			background-color: var(--kaomaru-blue);
			color: var(--text-color-primary);
		}
	}
</style>
