<script lang="ts">
	import Hero from '$lib/hero.svelte';
	import Profile from '$lib/profile.svelte';
	import Projects from '$lib/projects.svelte';
	import AdditionalWorks from '$lib/additionalWorks.svelte';
	import Spacer from '$lib/spacer.svelte';
</script>

<svelte:head>
	<style>
		body {
			background: hsl(190, 12%, 10%);
			color: whitesmoke;
		}
	</style>
</svelte:head>

<main>
	<Spacer height="18rem" />
	<Hero />
	<Spacer height="14rem" />
	<Profile />
	<Spacer height="16rem" />
	<Projects />
	<Spacer height="20rem" />
	<AdditionalWorks />
	<!-- <Spacer height="100rem" /> -->
</main>

<style>
	main {
		display: flex;
		flex-flow: column;
		align-items: center;
		max-width: 100%;
	}
</style>
