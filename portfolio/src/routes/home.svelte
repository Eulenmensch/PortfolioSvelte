<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import { Body } from 'svelte-body';
	import Headshot from '$lib/home/headshot.svelte';
	import Wave from '$lib/home/wave.svelte';
	import ProjectCard from '$lib/home/projectCard.svelte';
	import AdditionalCard from '$lib/home/additionalCard.svelte';
	const style = {
		backgroundColor: '#636A25',
		width: '100vw'
	};

	export let document: { [key: string]: any };

	let projectPages: Array<{ [key: string]: any }> = new Array();
	let body: { [key: string]: any } = document.data.body;
	Object.entries(body).forEach((entry) => {
		if (entry[1].slice_type == 'project') {
			projectPages.push(entry[1].primary);
		}
	});

	let secondaryPages: Array<{ [key: string]: any }> = new Array();
	Object.entries(body).forEach((entry) => {
		if (entry[1].slice_type == 'secondary_project') {
			secondaryPages.push(entry[1]);
		}
	});

	let image = prismicH.asImageSrc(document.data.body[0].primary.hero_image);
	// Colors from: https://hue.tools/mix?mode=lch&colors=636a25ff%3B7600ffff&gamma=1.01&format=hex
	// FIXME: Should be solved using an algorithm instead of repeating the colors
	let colors = [
		'#FFBB25',
		'#B53401',
		'#3F62A4',
		'#FFBB25',
		'#B53401',
		'#3F62A4',
		'#FFBB25',
		'#B53401',
		'#3F62A4'
	];
</script>

<Body {style} />
<Headshot {image} />
<Wave />

<div id="project-cards">
	{#each projectPages as project, i}
		<ProjectCard bind:project bind:color={colors[i]} />
	{/each}
</div>

<div id="additional-cards">
	{#each secondaryPages as project, i}
		<AdditionalCard bind:project bind:color={colors[i + 1]} />
	{/each}
</div>

<style>
	#project-cards {
		padding: 0 2rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#additional-cards {
		position: relative;
		z-index: 10;
	}
</style>
