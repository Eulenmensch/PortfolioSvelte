<script lang="ts">
	// import Burger from './burger.svelte';
	import { slide, fade, fly } from 'svelte/transition';
	let clicked: boolean = false;

	function toggleClicked() {
		clicked = !clicked;
	}

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<menu class:widescreen={innerWidth > 1023}>
	<img id="icon" src="/images/icons/Favicon.svg" alt="" on:click={toggleClicked} />
	{#if clicked}
		<div
			class:clicked
			class="slide"
			id="red"
			in:slide={{ duration: 200 }}
			out:slide={{ duration: 600 }}
		/>
		<div
			class:clicked
			class="slide"
			id="yellow"
			in:slide={{ duration: 300 }}
			out:slide={{ duration: 500 }}
		/>
		<div class:clicked in:slide={{ duration: 500 }} out:slide={{ duration: 300 }}>
			<!-- <Burger on:click={toggleClicked} /> -->
			<nav in:fade={{ delay: 200, duration: 300 }} out:fade={{ duration: 200 }}>
				<ul>
					<li class="nav-item">
						<a href="/" on:click={toggleClicked}>Home</a>
					</li>
					<li class="nav-item">
						<a href="/about" on:click={toggleClicked}>About</a>
					</li>
					<li class="nav-item">
						<a href="/resume" on:click={toggleClicked}>Resumé</a>
					</li>
					<li class="nav-item">
						<a
							id="linkedin"
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.linkedin.com/in/yoshua-woo/"
							on:click={toggleClicked}>LinkedIn</a
						>
					</li>
					<li class="nav-item">
						<a href="/#contact" on:click={toggleClicked}>Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	{/if}
	{#if innerWidth > 1023}
		<nav id="widescreen-nav">
			<ul>
				<li class="nav-item">
					<a href="/">Home</a>
				</li>
				<li class="nav-item">
					<a href="/about">About</a>
				</li>
				<li class="nav-item">
					<a href="/resume">Resumé</a>
				</li>
				<li class="nav-item">
					<a
						id="linkedin"
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/in/yoshua-woo/">LinkedIn</a
					>
				</li>
				<li class="nav-item">
					<a href="/#contact">Contact</a>
				</li>
			</ul>
		</nav>
	{/if}
</menu>

<style>
	#linkedin::after {
		content: '™';
		position: absolute;
	}
	#icon {
		position: absolute;
		width: 3.5rem;
		aspect-ratio: 1/1;
		top: 1rem;
		left: 1rem;
		z-index: 500;
		cursor: pointer;
		transition: filter 200ms;
	}
	.widescreen #icon {
		position: fixed;
	}
	.widescreen #icon:hover {
		filter: drop-shadow(0 0 8px rgba(255, 187, 37, 1));
	}
	menu {
		position: fixed;
		left: 0;
		top: 0;
		width: max-content;
	}
	.widescreen {
		position: absolute;
		left: 0;
		top: 0;
	}
	.widescreen #widescreen-nav {
		position: relative;
		left: 5rem;
		top: 1.3rem;
		width: 100%;
		display: flex;
		/* justify-content: center; */
	}
	.widescreen #widescreen-nav > ul {
		display: flex;
		margin: 0;
		font-size: 1.5rem;
	}
	.widescreen #widescreen-nav .nav-item {
		margin: 0 2rem;
		font-weight: 700;
	}
	.clicked {
		position: fixed;
		height: 100vh;
		width: 100%;
		z-index: 400;
		background-color: var(--kaomaru-blue);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.slide {
		top: 0;
		left: 0;
	}
	#yellow {
		background-color: var(--mango-yellow);
	}
	#red {
		background-color: var(--mahogany-red);
	}
	ul {
		font-size: 5vh;
		margin-top: -20vh;
		list-style-type: none;
		text-align: center;
	}
	.nav-item {
		font-weight: 700;
		text-shadow: -0.2rem 0.2rem blue;
		line-height: 180%;
	}
	.nav-item a {
		position: relative;
		color: var(--text-color-primary);
		text-decoration: none;
	}
</style>
