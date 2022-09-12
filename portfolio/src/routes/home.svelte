<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import { Body } from 'svelte-body';
	import Headshot from '$lib/home/headshot.svelte';
	import Wave from '$lib/home/wave.svelte';
	import ProjectCard from '$lib/home/projectCard.svelte';
	import AdditionalCard from '$lib/home/additionalCard.svelte';
	import ContactForm from '$lib/home/contactForm.svelte';

	let innerWidth: number = 0;

	let style = {};
	$: style = {
		width: '100vw',
		...(innerWidth < 1024 && { backgroundColor: '#636A25' }),
		...(innerWidth > 1023 && { backgroundColor: '#0d131b' })
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

	let contactSlice: { [key: string]: any };
	Object.entries(body).forEach((entry) => {
		if (entry[1].slice_type == 'contact_form') {
			contactSlice = entry[1];
		}
	});

	let profile_photo = prismicH.asImageSrc(document.data.body[0].primary.hero_image);
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
	//HACK: this orders the additional work containers in a way
	//that their z-indexes order them visually correctly
	let numbers = [8, 9, 6, 7, 4, 5, 2, 3];
</script>

<svelte:window bind:innerWidth />

<Body {style} />
<div class:tablet={innerWidth > 767} class:widescreen={innerWidth > 1023}>
	<div id="hero">
		{#if innerWidth > 1023}
			<div>
				{@html prismicH.asHTML(document.data.body[0].primary.hero_text)}
			</div>
		{/if}
		<Headshot image={profile_photo} />
	</div>
	<Wave />

	<div id="projects">
		<div id="project-cards">
			{#each projectPages as project, i}
				<ProjectCard bind:project bind:color={colors[i]} />
			{/each}
		</div>

		<div id="additional-cards">
			{#each secondaryPages as project, i}
				<AdditionalCard bind:project bind:color={colors[i + 1]} bind:index={numbers[i]} />
			{/each}
		</div>
	</div>

	<div id="contact">
		<ContactForm bind:contactSlice />
	</div>
</div>

<style>
	.tablet #projects {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		margin-top: 20rem;
		max-width: 70rem;
	}
	.widescreen #projects {
		margin-top: 25rem;
		max-width: 145rem;
	}

	.widescreen #hero {
		width: 80rem;
		display: flex;
		align-items: center;
		margin: 20rem auto 0;
	}
	.widescreen #hero > div {
		padding-top: 4rem;
		width: 80%;
		margin-right: 6rem;
	}
	.widescreen #hero > div > :global(p) {
		margin-bottom: 1rem;
		font-size: 1.9rem;
		line-height: 150%;
		font-weight: 300;
	}
	.widescreen #hero > div > :global(p > strong) {
		font-weight: 800;
	}

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
	.tablet #additional-cards {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.tablet #contact {
		margin: 0 2rem;
	}
	.widescreen #contact {
		margin-top: 10rem;
		margin-bottom: 5rem;
	}
</style>
