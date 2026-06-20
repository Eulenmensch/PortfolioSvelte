<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href = null,
		color = 'var(--mango-yellow)',
		external = false,
		onclick,
		children
	}: {
		href?: string | null;
		color?: string;
		external?: boolean;
		onclick?: (e: MouseEvent) => void;
		children: Snippet;
	} = $props();
</script>

<a
	{href}
	style:--btn-color={color}
	{onclick}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
>
	{@render children()}
</a>

<style>
	a {
		padding: 0.5rem 1.3rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		border: 0.4rem solid var(--btn-color);
		border-radius: 100rem;
		color: var(--btn-color);
		background-color: black;
		text-decoration: none;
		font-weight: 900;
		cursor: pointer;
		transition:
			background-color 300ms,
			color 300ms;
	}
	a:hover {
		background-color: var(--btn-color);
		color: black;
	}
</style>
