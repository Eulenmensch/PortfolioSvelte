<script lang="ts">
	import ProjectHeader from '$lib/components/project/ProjectHeader.svelte';
	import HeroVideo from '$lib/components/project/HeroVideo.svelte';
	import Facts from '$lib/components/project/Facts.svelte';
	import ElevatorPitch from '$lib/components/project/ElevatorPitch.svelte';
	import SecondaryVideo from '$lib/components/project/SecondaryVideo.svelte';
	import Responsibilities from '$lib/components/project/Responsibilities.svelte';
	import ParagraphImage from '$lib/components/project/ParagraphImage.svelte';
	import Gallery from '$lib/components/project/Gallery.svelte';
	import VideoSection from '$lib/components/project/VideoSection.svelte';

	let { data } = $props();
	const project = $derived(data.project);
	const title = $derived(project.header.name ?? project.uid);

	// Tint the page (and body overscroll area) with the project's colours.
	$effect(() => {
		const prev = document.body.style.backgroundColor;
		document.body.style.backgroundColor = project.colors.primary;
		return () => {
			document.body.style.backgroundColor = prev;
		};
	});
</script>

<svelte:head>
	<title>{title} — Yoshua Woo</title>
</svelte:head>

<article
	class="project"
	style:--primary={project.colors.primary}
	style:--text={project.colors.text}
	style:--highlight={project.colors.highlight}
>
	<ProjectHeader header={project.header} primary={project.colors.primary} />

	{#if project.heroVideo}
		<HeroVideo url={project.heroVideo} {title} poster={project.header.headerImage?.src} />
	{/if}

	<div class="content">
		<div class="overview">
			<div class="summary">
				<Facts facts={project.facts} />
				{#if project.elevatorPitch}
					<ElevatorPitch pitch={project.elevatorPitch} />
				{/if}
			</div>
			{#if project.secondaryVideo?.url}
				<div class="secondary">
					<SecondaryVideo
						url={project.secondaryVideo.url}
						descriptor={project.secondaryVideo.descriptor}
						poster={project.header.headerImage?.src}
					/>
				</div>
			{/if}
		</div>

		{#if project.responsibilities}
			<Responsibilities responsibilities={project.responsibilities} />
		{/if}

		{#each project.sections as section, i}
			{#if section.type === 'paragraphImage'}
				<ParagraphImage {section} index={i} />
			{:else if section.type === 'gallery'}
				<Gallery {section} />
			{:else if section.type === 'videoSection'}
				<VideoSection {section} />
			{/if}
		{/each}
	</div>

	<a class="back" href="/#projects">← Back to all projects</a>
</article>

<style>
	.project {
		display: block;
		min-height: 100vh;
		background-color: var(--primary);
		color: var(--text);
		padding-bottom: 6rem;
	}

	.content {
		max-width: 100rem;
		margin: 0 auto;
		padding: 0 var(--x-padding);
	}

	.summary :global(a),
	.content :global(a) {
		color: var(--highlight);
	}

	.overview {
		margin: 3rem 0;
	}

	.back {
		display: block;
		text-align: center;
		margin-top: 4rem;
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--highlight);
		text-decoration: none;
	}
	.back:hover {
		text-decoration: underline;
	}

	@media (min-width: 1024px) {
		.content {
			padding: 0 2rem;
		}
		.overview {
			display: flex;
			gap: 8rem;
			align-items: flex-start;
			margin: 6rem 0 3rem;
		}
		.summary {
			flex: 1 1 50%;
		}
		.secondary {
			flex: 1 1 50%;
		}
	}
</style>
