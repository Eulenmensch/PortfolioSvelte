<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/footer.svelte';
	import ProjectHeader from '$lib/projectHeader.svelte';
	import ProjectOverview from '$lib/projectOverview.svelte';
	import { projectData } from '../../stores/projectStore';

	const projectId = $page.params.project;
</script>

<svelte:head>
	<style>
		body {
			color: whitesmoke;
		}
	</style>
</svelte:head>

<main style="background-color: {$projectData[projectId].bodyColor};">
	<ProjectHeader bind:data={$projectData[projectId]} />
	<ProjectOverview bind:data={$projectData[projectId]} />
	<Footer />
</main>
