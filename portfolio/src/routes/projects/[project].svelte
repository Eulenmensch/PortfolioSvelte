<script lang="ts">
	// import { SliceZone } from '@prismicio/svelte';
	// import { dev } from '$app/env';
	// import components from '$lib/projectSlices';

	import { Body } from 'svelte-body';
	import Header from '$lib/projectSlices/header.svelte';
	import Facts from '$lib/projectSlices/facts.svelte';
	import HeroVideo from '$lib/projectSlices/heroVideo.svelte';
	import ElevatorPitch from '$lib/projectSlices/elevatorPitch.svelte';
	import Responsibilities from '$lib/projectSlices/responsibilities.svelte';
	import ImageParagraph from '$lib/projectSlices/imageParagraph.svelte';
	import VideoSection from '$lib/projectSlices/videoSection.svelte';
	import Gallery from '$lib/projectSlices/gallery.svelte';
	import SecondaryVideo from '$lib/projectSlices/secondaryVideo.svelte';

	export let document: { [key: string]: any };
	let slices: { [key: string]: any } = document.data.body;
	let context = { doc: document };

	let innerWidth: number;

	const style = {
		backgroundColor: document.data.primary_color,
		color: document.data.text_color
	};

	let title: string = document.slugs[0];
	let splitTitle = title.split('-');
	let upperSplitTitle = new Array<string>();
	splitTitle.forEach((word) => {
		upperSplitTitle.push(word.charAt(0).toUpperCase() + word.substring(1));
	});
	title = upperSplitTitle.join(' ');
	console.log(title);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<svelte:window bind:innerWidth />
<Body {style} />

<!-- <SliceZone slices={document.data.body} {components} context={{ doc: document }} /> -->
<main class:widescreen={innerWidth > 1023}>
	{#each Object.entries(slices) as slice}
		{#if slice[1].slice_type == 'header'}
			<Header bind:slice={slice[1]} bind:context />
		{:else if slice[1].slice_type == 'hero_video'}
			<HeroVideo bind:slice={slice[1]} bind:context />
		{/if}
	{/each}
	<div id="content">
		<div id="overview">
			<div id="summary">
				<div id="summary-text">
					{#each Object.entries(slices) as slice}
						{#if slice[1].slice_type == 'facts'}
							<Facts bind:slice={slice[1]} />
						{:else if slice[1].slice_type == 'elevator_pitch'}
							<ElevatorPitch bind:slice={slice[1]} />
						{:else if slice[1].slice_type == 'secondary_video'}
							{#if innerWidth > 1023}
								<p id="secondary-video-text">
									To the right, you can see {slice[1].primary.descriptor}.
								</p>
							{:else}
								<p id="secondary-video-text">
									Below, you can see {slice[1].primary.descriptor}.
								</p>
							{/if}
						{/if}
					{/each}
				</div>
				{#each Object.entries(slices) as slice}
					{#if slice[1].slice_type == 'secondary_video'}
						<div id="secondary-video">
							<SecondaryVideo bind:slice={slice[1]} bind:context />
						</div>
					{/if}
				{/each}
			</div>
			<div id="responsibilities">
				{#each Object.entries(slices) as slice}
					{#if slice[1].slice_type == 'responsibilities'}
						<Responsibilities bind:slice={slice[1]} bind:context />
					{/if}
				{/each}
			</div>
		</div>
		{#each Object.entries(slices) as slice}
			{#if slice[1].slice_type == 'paragraph_with_image'}
				<ImageParagraph bind:slice={slice[1]} bind:context />
			{:else if slice[1].slice_type == 'video_section'}
				<VideoSection bind:slice={slice[1]} />
			{:else if slice[1].slice_type == 'gallery'}
				<Gallery bind:slice={slice[1]} bind:context />
			{/if}
		{/each}
	</div>
</main>

<style>
	.widescreen #content {
		max-width: 100rem;
		margin: 0 auto;
	}

	.widescreen #summary {
		margin: 10rem 0 3rem;
		width: 100%;
		display: flex;
		column-gap: 8rem;
	}
	.widescreen #summary-text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 50%;
	}

	.widescreen #overview {
		display: flex;
		flex-wrap: wrap;
	}

	#secondary-video-text {
		margin-bottom: 4.5rem;
		padding: 0 2.1rem;
		font-size: 1.5rem;
		font-weight: 300;
	}
	.widescreen #secondary-video-text {
		margin: 0;
		padding: 0;
	}

	.widescreen #secondary-video {
		width: 50%;
	}
</style>
