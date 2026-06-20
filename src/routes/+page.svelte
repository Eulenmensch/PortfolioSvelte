<script lang="ts">
	import { home, projects } from '$lib/content';
	import Wave from '$lib/components/home/Wave.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import ProjectCard from '$lib/components/home/ProjectCard.svelte';
	import SecondaryCard from '$lib/components/home/SecondaryCard.svelte';
	import Contact from '$lib/components/home/Contact.svelte';

	const palette = ['var(--mango-yellow)', 'var(--mahogany-red)', 'var(--queen-blue)'];
	const accent = (i: number) => palette[i % palette.length];
</script>

<svelte:head>
	<title>Yoshua Woo — Game Designer</title>
	<meta
		name="description"
		content="Portfolio of Yoshua Woo, a game designer from Berlin specializing in 3Cs, game feel, systems and UX design."
	/>
</svelte:head>

<Wave />
<Hero hero={home.hero} />

<div class="container">
	<section id="projects" class="projects">
		{#each home.projects as ref, i (ref.uid)}
			{#if projects[ref.uid]}
				<ProjectCard {ref} project={projects[ref.uid]} color={accent(i)} />
			{/if}
		{/each}
	</section>

	<section class="secondary">
		{#each home.secondaryProjects as project, i (project.title)}
			<SecondaryCard {project} color={accent(i + 1)} />
		{/each}
	</section>

	<Contact contact={home.contact} />
</div>

<style>
	.container {
		max-width: 70rem;
		margin: 0 auto;
		padding: 6rem 2rem 0;
	}

	@media (min-width: 1024px) {
		.container {
			max-width: 90rem;
			padding-top: 10rem;
		}
		.secondary {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}
	}
</style>
