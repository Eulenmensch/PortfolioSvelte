<script lang="ts">
	let open = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/resume', label: 'Resumé' },
		{ href: 'https://www.linkedin.com/in/yoshua-woo/', label: 'LinkedIn', external: true },
		{ href: '/#contact', label: 'Contact' }
	];

	const close = () => (open = false);
</script>

<header>
	<button class="burger" aria-label="Toggle menu" aria-expanded={open} onclick={() => (open = !open)}>
		<span class:open></span>
		<span class:open></span>
		<span class:open></span>
	</button>

	<a class="brand" href="/" onclick={close}>
		<span class="name">Yoshua Woo</span>
		<span class="occupation">Game Designer</span>
	</a>

	<nav class="desktop">
		<ul>
			{#each links as link}
				<li>
					<a
						href={link.href}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noopener noreferrer' : undefined}>{link.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>

{#if open}
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
	<div class="overlay" onclick={close}>
		<nav class="mobile">
			<ul>
				{#each links as link}
					<li>
						<a
							href={link.href}
							target={link.external ? '_blank' : undefined}
							rel={link.external ? 'noopener noreferrer' : undefined}
							onclick={close}>{link.label}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
{/if}

<style>
	header {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding: 1.3rem 1.3rem 0.5rem 2rem;
	}

	.brand {
		margin-left: auto;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		text-decoration: none;
		color: var(--text-color-primary);
	}
	.name {
		font-size: 2rem;
		font-weight: 700;
		text-shadow:
			-0.15rem 0.1rem var(--mango-yellow),
			-0.3rem 0.2rem var(--mango-yellow);
	}
	.occupation {
		font-size: 1.5rem;
		font-weight: 200;
	}

	/* burger */
	.burger {
		position: fixed;
		top: 1.4rem;
		left: 1.2rem;
		z-index: 500;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		width: 2.6rem;
		cursor: pointer;
	}
	.burger span {
		height: 0.35rem;
		width: 100%;
		border-radius: 100rem;
		background-color: var(--mango-yellow);
		transition: transform 250ms, opacity 200ms;
	}
	.burger span.open:nth-child(1) {
		transform: translateY(0.7rem) rotate(45deg);
	}
	.burger span.open:nth-child(2) {
		opacity: 0;
	}
	.burger span.open:nth-child(3) {
		transform: translateY(-0.7rem) rotate(-45deg);
	}

	.desktop {
		display: none;
	}

	/* mobile overlay menu */
	.overlay {
		position: fixed;
		inset: 0;
		z-index: 400;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--kaomaru-blue);
	}
	.mobile ul {
		list-style: none;
		text-align: center;
	}
	.mobile li {
		font-size: 2.6rem;
		font-weight: 700;
		line-height: 200%;
		text-shadow: -0.2rem 0.2rem var(--queen-blue);
	}
	.mobile a {
		color: var(--text-color-primary);
		text-decoration: none;
	}

	@media (min-width: 1024px) {
		.burger {
			display: none;
		}
		.desktop {
			display: block;
			position: fixed;
			top: 1.6rem;
			left: 2rem;
			z-index: 100;
		}
		.desktop ul {
			display: flex;
			gap: 3rem;
			list-style: none;
			font-size: 1.5rem;
			font-weight: 700;
		}
		.desktop a {
			color: var(--text-color-primary);
			text-decoration: none;
		}
		.desktop a:hover {
			color: var(--mango-yellow);
		}
	}
</style>
