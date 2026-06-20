<script lang="ts">
	import { about } from '$lib/content';
	import { md } from '$lib/markdown';

	const bg = about.backgroundImage?.src;

	// Solid navy behind the 100vh background image (and overscroll area).
	$effect(() => {
		const prev = document.body.style.backgroundColor;
		document.body.style.backgroundColor = '#09275a';
		return () => {
			document.body.style.backgroundColor = prev;
		};
	});
</script>

<svelte:head>
	<title>About — Yoshua Woo</title>
	<meta
		name="description"
		content="About Yoshua Woo — a game designer from Berlin who loves making controls, game feel and systems that feel great to play."
	/>
</svelte:head>

<div class="about">
	{#if bg}
		<div class="backdrop" style:--img={`url(${bg})`} aria-hidden="true"></div>
	{/if}
	<div class="text">
		<h1>{about.heading}</h1>
		{@html md(about.body)}
	</div>
</div>

<style>
	.about {
		position: relative;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 var(--x-padding);
		background-color: #09275a;
	}

	.backdrop {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -10;
		width: 100%;
		height: 100vh;
		background-image:
			linear-gradient(180deg, rgba(0, 255, 191, 0.25), hsla(0, 0%, 100%, 0)),
			linear-gradient(180deg, transparent, #09275a),
			linear-gradient(180deg, rgba(9, 63, 90, 0.78), rgba(9, 63, 90, 0.78)), var(--img);
		background-size: cover;
		background-position: center;
	}

	.text {
		max-width: 62rem;
	}
	h1 {
		font-size: 4rem;
		line-height: 1;
		padding: 12rem 0 3rem;
	}
	.text :global(p) {
		font-size: 1.6rem;
		line-height: 1.5;
		margin-bottom: 1.5rem;
	}
	.text :global(a) {
		color: var(--mango-yellow);
	}
</style>
