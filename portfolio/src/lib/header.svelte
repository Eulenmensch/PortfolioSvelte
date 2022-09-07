<script lang="ts">
	import { onMount } from 'svelte';
	import Menu from './menu.svelte';
	import Spacer from './spacer.svelte';

	var shadow = '';
	let factor = 0.3;
	let length = 1.3;
	let color = '#ffbb25';
	onMount(() => {
		for (var i = 0; i < length / factor; i++) {
			shadow += (shadow ? ',' : '') + i * -1.5 * factor + 'px ' + i * 1 * factor + 'px 0 ' + color;
		}
	});
</script>

<header id="header">
	<Menu />
	<div id="name" style:text-shadow={shadow}>Yoshua Woo</div>
	<Spacer width="1.5rem" />
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
	}
	#occupation {
		font-size: 1.5rem;
		font-weight: 200;
	}
</style>
