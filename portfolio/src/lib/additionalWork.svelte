<script lang="ts">
	import Spacer from './spacer.svelte';
	import { mediaType } from '../types';
	import { element } from 'svelte/internal';

	export let data = {
		mediaFormat: mediaType.image,
		mediaURL: '',
		mediaAlt: '',
		backgroundURL: '',
		colorOverlay: '',
		title: '',
		platform: '',
		engine: '',
		genre: '',
		text: ['']
	};
</script>

<div
	id="project-container"
	style="background-image:url({data.backgroundURL}); backround-position:center; background-size:cover;"
>
	<div style=" height:100%; background-color: {data.colorOverlay};">
		<div id="media-container">
			{#if data.mediaFormat == mediaType.image}
				<img src={data.mediaURL} alt={data.mediaAlt} style="height: 100%; object-fit:contain" />
			{:else if data.mediaFormat == mediaType.video}
				<video autoplay loop muted src={data.mediaURL} style="height: 100%;" />
			{:else if data.mediaFormat == mediaType.iframe}
				<iframe
					src={data.mediaURL}
					title={data.mediaAlt}
					frameborder="0"
					width="100%"
					height="100%"
					on:load={(e) => (e.currentTarget.style.display = 'inline')}
				/>
			{/if}
		</div>
		<div id="text-container">
			<div id="title-container">
				<h1>{data.title}</h1>
				<h3>({data.platform})</h3>
			</div>
			<h2>{data.genre}</h2>
			<h4>{data.engine}</h4>
			<Spacer height="3rem" />
			{#each data.text as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
	</div>
</div>

<style>
	:root {
		--text-x-padding: 5rem;
	}
	#project-container {
		max-width: 68rem;
		border-radius: 2rem;
		overflow: hidden;
	}
	#media-container {
		aspect-ratio: 16/9;
	}
	#text-container {
		position: relative;
		padding: 3rem var(--text-x-padding) 4rem;
	}
	#title-container {
		display: flex;
	}
	h1 {
		margin-left: -0.2rem;
		font-size: 4rem;
		line-height: 150%;
	}
	h2 {
		font-size: 1.8rem;
		font-weight: 500;
	}
	h3 {
		font-size: 2.5rem;
		font-weight: 200;
		line-height: 150%;
		padding-top: 0.4rem;
		padding-left: 0.3rem;
	}
	h4 {
		position: absolute;
		top: 4.5rem;
		right: var(--text-x-padding);
		font-size: 2rem;
		font-weight: 900;
	}
	p {
		font-size: 1.5rem;
		line-height: 150%;
		padding-bottom: 1rem;
	}
	iframe {
		display: none;
	}
</style>
