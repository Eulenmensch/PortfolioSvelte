<button id="burger" on:click>
	<div class="line" />
	<div class="line" />
	<div class="line" />
</button>

<style>
	:root {
		--square-length: 1.5rem;
	}
	#burger {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: var(--square-length);
		height: var(--square-length);
		cursor: pointer;
	}
	.line {
		background-color: var(--text-color-primary);
		width: var(--square-length);
		height: 0.3rem;
		border-radius: 0.1rem;
	}
</style>
