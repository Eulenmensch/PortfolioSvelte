<script lang="ts">
	// import Burger from './burger.svelte';
	let clicked: boolean = false;

	function toggleClicked() {
		clicked = !clicked;
	}
</script>

<menu>
	<img id="icon" src="/images/icons/Favicon.svg" alt="" on:click={toggleClicked} />
	<!-- <Burger on:click={toggleClicked} /> -->
	{#if clicked}
		<nav>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Resumé</li>
				<li>LinkedIn</li>
				<li>Contact</li>
			</ul>
		</nav>
	{/if}
</menu>

<style>
	#icon {
		width: 3.5rem;
		aspect-ratio: 1/1;
	}
	menu {
		position: fixed;
		left: 1rem;
	}
	ul {
		position: relative;
		top: 2rem;
		/* left: 2.5rem; */
		list-style-type: none;
	}
	li {
		font-size: 1.6rem;
		font-weight: 700;
		text-shadow: 0.2rem 0.2rem blue;
		line-height: 180%;
	}
</style>
