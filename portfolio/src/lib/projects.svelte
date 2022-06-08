<script lang="ts">
	import ProjectHero from './projectHero.svelte';
	import Spacer from './spacer.svelte';
	import { projectData } from '../stores/projectStore';

	let projects: {
		videoId: string;
		title: string;
		titleFont: string;
		titleSize: string;
		titleWeight: string;
		genre: string;
		roles: string;
		pageLink: string;
		externalLink: string;
		externalButtonText: string;
		backgroundImg: string;
		overlayColorHSLA: string;
		innerText: string[];
	}[] = [];
	for (const [key, value] of Object.entries($projectData)) {
		projects.push(value);
	}
</script>

{#each projects as data, i}
	<ProjectHero {data} />
	<!-- don't add a spacer at the end of the projects component -->
	{#if i < projects.length - 1}
		<Spacer height="7rem" />
	{/if}
{/each}
