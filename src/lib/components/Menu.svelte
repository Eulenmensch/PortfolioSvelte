<script lang="ts">
	import { slide, fade } from 'svelte/transition';

	let clicked = $state(false);
	const toggle = () => (clicked = !clicked);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/resume', label: 'Resumé' },
		{
			href: 'https://www.linkedin.com/in/yoshua-woo/',
			label: 'LinkedIn',
			external: true,
			trademark: true
		},
		{ href: '/#contact', label: 'Contact' }
	];
</script>

<menu>
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
	<img id="icon" src="/images/icons/Favicon.svg" alt="Toggle menu" onclick={toggle} />

	{#if clicked}
		<div class="panel slide red" in:slide={{ duration: 200 }} out:slide={{ duration: 600 }}></div>
		<div class="panel slide yellow" in:slide={{ duration: 300 }} out:slide={{ duration: 500 }}></div>
		<div class="panel blue" in:slide={{ duration: 500 }} out:slide={{ duration: 300 }}>
			<nav in:fade={{ delay: 200, duration: 300 }} out:fade={{ duration: 200 }}>
				<ul>
					{#each links as link}
						<li class="nav-item">
							<a
								class:linkedin={link.trademark}
								href={link.href}
								target={link.external ? '_blank' : undefined}
								rel={link.external ? 'noopener noreferrer' : undefined}
								onclick={toggle}>{link.label}</a
							>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	{/if}

	<nav id="widescreen-nav">
		<ul>
			{#each links as link}
				<li class="nav-item">
					<a
						class:linkedin={link.trademark}
						href={link.href}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noopener noreferrer' : undefined}>{link.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</menu>

<style>
	menu {
		/* mobile: fixed so the icon stays reachable while scrolling */
		position: fixed;
		left: 0;
		top: 0;
		width: max-content;
		margin: 0;
		padding: 0;
	}

	#icon {
		position: absolute;
		width: 3.5rem;
		aspect-ratio: 1 / 1;
		top: 1rem;
		left: 1rem;
		z-index: 500;
		cursor: pointer;
		transition: filter 200ms;
	}

	/* full-screen colour panels that cascade in at staggered speeds */
	.panel {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100%;
		z-index: 400;
	}
	.red {
		background-color: var(--mahogany-red);
	}
	.yellow {
		background-color: var(--mango-yellow);
	}
	.blue {
		background-color: var(--kaomaru-blue);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	nav ul {
		list-style: none;
		text-align: center;
	}
	.blue ul {
		font-size: 5vh;
		margin-top: -20vh;
	}
	.nav-item {
		font-weight: 700;
		line-height: 180%;
		text-shadow: -0.2rem 0.2rem var(--queen-blue);
	}
	.nav-item a {
		position: relative;
		color: var(--text-color-primary);
		text-decoration: none;
	}
	.linkedin::after {
		content: '™';
		position: absolute;
		font-size: 0.4em;
	}

	/* desktop horizontal nav */
	#widescreen-nav {
		display: none;
	}

	@media (min-width: 1024px) {
		/* desktop: the menu (and its icon) scroll away with the page… */
		menu {
			position: absolute;
		}
		#icon:hover {
			filter: drop-shadow(0 0 8px rgba(255, 187, 37, 1));
		}
		/* …while the nav stays pinned to the top */
		#widescreen-nav {
			display: block;
			position: fixed;
			left: 6rem;
			top: 1.5rem;
			z-index: 100;
		}
		#widescreen-nav ul {
			display: flex;
			margin: 0;
			font-size: 1.5rem;
		}
		#widescreen-nav .nav-item {
			margin: 0 1.5rem;
			line-height: normal;
			text-shadow: none;
		}
		#widescreen-nav .nav-item a:hover {
			color: var(--mango-yellow);
		}
	}
</style>
