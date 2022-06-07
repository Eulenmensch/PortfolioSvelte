<script lang="ts">
	import Button from './button.svelte';
	import Spacer from './spacer.svelte';

	export let videoId = '',
		title = '',
		titleFont = '',
		titleSize = '',
		titleWeight = '',
		genre = '',
		roles = '',
		pageLink = '',
		externalLink = '',
		externalButtonText = '',
		backgroundImg = '',
		overlayColorHSLA = '';
</script>

<section style="background-image: url({backgroundImg});">
	<div id="video">
		{#if videoId != ''}
			<iframe
				width="100%"
				height="100%"
				src="https://www.youtube-nocookie.com/embed/{videoId}"
				title="{title} youtube video"
				frameborder="0"
				allow="clipboard-write; encrypted-media; picture-in-picture"
				allowfullscreen
			/>
		{/if}
	</div>
	<main style="background-color: hsl({overlayColorHSLA});">
		<h1 style="font-family: {titleFont}; font-size:{titleSize}; font-weight: {titleWeight}">
			{title}
		</h1>
		<Spacer height="0.7rem" />
		<h2>{genre}</h2>
		<Spacer height="2rem" />
		<div id="roles"><b>Roles:</b> {roles}</div>
		<Spacer height="2.5rem" />
		<div id="description">
			<slot />
		</div>
		<Spacer height="2.5rem" />
		<div id="buttons">
			<Button link={pageLink}>Project Page</Button>
			<Spacer width="1.5rem" />
			<Button link={externalLink}>{externalButtonText}</Button>
		</div>
	</main>
</section>

<style>
	section {
		display: flex;
		max-width: 140rem;
		width: 100%;
		height: 40rem;
		border-radius: 2rem;
		overflow: hidden;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0% 60%;
	}
	#video {
		width: 50%;
	}
	main {
		position: relative;
		width: 50%;
		padding: 2.5rem 3rem 3rem 5rem;
	}
	h1 {
		font-size: 4rem;
		line-height: 100%;
	}
	h2 {
		font-size: 1.6rem;
		font-weight: 300;
	}
	#roles {
		font-size: 1.6rem;
		font-weight: 300;
	}
	#description :global(p) {
		font-size: 1.6rem;
		font-weight: 700;
		line-height: 150%;
		margin-bottom: 1rem;
	}
	#buttons {
		position: absolute;
		bottom: 4rem;
		display: flex;
		font-size: 1.6rem;
		height: 4.5rem;
	}
</style>
