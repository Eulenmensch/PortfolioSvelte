<script lang="ts">
	import { page } from '$app/stores';
	import ProjectHeader from '$lib/projectHeader.svelte';
	import ProjectOverview from '$lib/projectOverview.svelte';
	import { projectData } from '../../stores/projectStore';

	const projectId = $page.params.project;

	let data: {
		title: '';
		titleFont: '';
		titleSize: '';
		titleWeight: '';
		subtitle: '';
		backgroundImg: '';
		overlayColorHSLA: '';
	} = $projectData[projectId];
</script>

<svelte:head>
	<style>
		body {
			color: whitesmoke;
		}
	</style>
</svelte:head>

<ProjectHeader {data} />
<ProjectOverview {data} />
