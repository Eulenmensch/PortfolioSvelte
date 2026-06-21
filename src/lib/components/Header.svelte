<script lang="ts">
	import Menu from './Menu.svelte';
</script>

<header id="header">
	<Menu />
	<div id="name">Yoshua Woo</div>
	<div id="occupation">Game Designer</div>
</header>

<style>
	header {
		position: absolute;
		top: 0;
		z-index: 100;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		width: 100%;
		padding: 1.3rem 1.3rem 0.5rem 2rem;
	}
	#name {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		/* stepped yellow shadow (was JS-generated in the original) */
		text-shadow:
			0 0 0 var(--mango-yellow),
			-0.45px 0.3px 0 var(--mango-yellow),
			-0.9px 0.6px 0 var(--mango-yellow),
			-1.35px 0.9px 0 var(--mango-yellow),
			-1.8px 1.2px 0 var(--mango-yellow);
	}
	#occupation {
		font-size: 1.5rem;
		font-weight: 200;
	}
</style>
