<script lang="ts">
	import type { Project } from '$lib/content/types';

	let { header, primary }: { header: Project['header']; primary: string } = $props();
</script>

<header
	style:--bg={header.headerImage ? `url(${header.headerImage.src})` : 'none'}
	style:--gradient={`linear-gradient(rgba(0,0,0,0.7), ${primary})`}
>
	{#if header.nameGraphic}
		<img src={header.nameGraphic.src} alt={header.name ?? ''} />
	{:else if header.name}
		<h1>{header.name}</h1>
	{/if}
	{#if header.subtitle}
		<h2>{header.subtitle}</h2>
	{/if}
</header>

<style>
	header {
		height: 45vw;
		max-height: 24rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		text-align: center;
		background: var(--gradient), var(--bg);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 50% 60%;
	}
	img {
		height: 40%;
		max-width: 80vw;
		margin-top: 3rem;
		object-fit: contain;
	}
	h1 {
		font-size: 4rem;
		line-height: 1;
		margin-top: 3rem;
	}
	h2 {
		font-size: 2rem;
		font-weight: 300;
	}
</style>
