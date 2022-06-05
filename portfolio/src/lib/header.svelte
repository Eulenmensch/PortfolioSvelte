<script lang="ts">
	import Menu from './menu.svelte';
	import Spacer from './spacer.svelte';
</script>

<header id="header">
	<Menu />
	<div id="name">Yoshua Woo</div>
	<Spacer width="1rem" />
	<div id="occupation">Game Designer</div>
</header>

<style>
	header {
		display: flex;
		width: 100vw;
		padding: 2.5rem 5rem 0.5rem;
	}
	#name {
		font-size: 2rem;
		font-weight: 700;
		text-shadow: 0.2rem 0.2rem blue;
	}
	#occupation {
		font-size: 2rem;
		font-weight: 200;
	}
</style>
