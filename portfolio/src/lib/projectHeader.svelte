<script>
	import Spacer from './spacer.svelte';

	export let data = {
		title: '',
		titleFont: '',
		titleSize: '',
		titleWeight: '',
		subtitle: '',
		backgroundImg: '',
		overlayColorHSLA: ''
	};
</script>

<header style="background-image: url('../{data.backgroundImg}');">
	<div id="overlay" style="background-color: hsla({data.overlayColorHSLA})" />
	<h1
		style="font-size: calc({data.titleSize} + 1rem); 
        font-weight: {data.titleWeight}; font-family: {data.titleFont};"
	>
		{data.title}
	</h1>
	{#if data.subtitle != '' && data.subtitle != undefined}
		<h2 style="font-family: {data.titleFont}; font-size: calc({data.titleSize} - 2rem);">
			{data.subtitle}
		</h2>
		<Spacer height="2rem" />
	{/if}
</header>

<style>
	header {
		position: relative;
		z-index: 0;
		height: 20rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-size: cover;
		background-position: center;
	}
	#overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -1;
		filter: opacity(80%);
	}
	h1 {
		line-height: 100%;
		padding-bottom: 1rem;
	}
</style>
