<script lang="ts">
	import { Body } from 'svelte-body';
	import Headshot from '$lib/home/headshot.svelte';
	import Wave from '$lib/home/wave.svelte';
	import ProjectCard from '$lib/home/projectCard.svelte';
	const style = {
		backgroundColor: '#636A25',
		width: '100vw'
	};

	export let document: { [key: string]: any };

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
<Headshot />
<Wave />

{#each Object.entries(document) as [key, project], i}
	<ProjectCard bind:project bind:color={colors[i]} />
{/each}

<style></style>
