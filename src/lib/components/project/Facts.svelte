<script lang="ts">
	import type { Facts } from '$lib/content/types';

	let { facts }: { facts: Facts } = $props();

	const labels: Record<string, string> = {
		genre: 'Genre',
		engine: 'Engine',
		teamSize: 'Team Size',
		duration: 'Duration',
		role: 'Role'
	};

	const rows = Object.entries(labels)
		.map(([key, label]) => [label, facts[key as keyof Facts]] as const)
		.filter(([, value]) => value);
</script>

<dl class="facts">
	{#each rows as [label, value]}
		<div class="fact">
			<dt>{label}:</dt>
			<dd>{value}</dd>
		</div>
	{/each}
</dl>

<style>
	.facts {
		margin: 0 0 2rem;
	}
	.fact {
		display: flex;
		align-items: baseline;
		gap: 1rem;
		margin-bottom: 0.6rem;
		line-height: 1.4;
	}
	dt {
		flex: 0 0 35%;
		font-size: 1.4rem;
		font-weight: 700;
	}
	dd {
		font-size: 1.4rem;
		font-weight: 300;
	}

	@media (min-width: 1024px) {
		dt,
		dd {
			font-size: 1.2rem;
		}
	}
</style>
