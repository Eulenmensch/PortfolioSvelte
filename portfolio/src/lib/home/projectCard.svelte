<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import { onMount } from 'svelte';
	import Button from '$lib/button.svelte';
	import Spacer from '$lib/spacer.svelte';
	export let project: { [key: string]: any };
	export let color: string;

	var shadow = '';
	let factor = 5;
	onMount(() => {
		for (var i = 0; i < 300 / factor; i++) {
			shadow += (shadow ? ',' : '') + i * -1.5 * factor + 'px ' + i * 1 * factor + 'px 0 ' + color;
		}
	});

	let title: string | null,
		genre: string | null,
		roles: string | null,
		title_graphic: string | null,
		video_url: string | null,
		background_url: string | null;

	const slices: { [key: string]: any } = project.project_page.data.body;

	Object.entries(slices).forEach((slice) => {
		if (slice[1].slice_type == 'header') {
			title = prismicH.asText(slice[1].primary.project_name);
			title_graphic = prismicH.asImageSrc(slice[1].primary.project_name_graphic);
			background_url = prismicH.asImageSrc(slice[1].primary.header_image);
		} else if (slice[1].slice_type == 'facts') {
			genre = slice[1].primary.genre;
			roles = slice[1].primary.role;
		} else if (slice[1].slice_type == 'hero_video') {
			video_url = prismicH.asLink(slice[1].primary.video_url);
		}
	});

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<main
	style:box-shadow={shadow}
	class:tablet={innerWidth > 767}
	class:widescreen={innerWidth > 1023}
	style:--border-color={color}
	style:--background-url={'url(' + background_url + ')'}
>
	<div id="video-container">
		{#if video_url != null}
			<iframe
				src={video_url}
				title="{title} youtube video"
				frameborder="0"
				allow="clipboard-write; encrypted-media; picture-in-picture"
				allowfullscreen
			/>
		{/if}
	</div>
	<div id="content-container">
		<div id="text-container">
			{#if title_graphic != null}
				<img id="title-graphic" src={title_graphic} alt="" />
			{:else}
				<h1>{title}</h1>
			{/if}
			<p id="genre">{genre}</p>
			<p id="roles"><b>Roles:</b> {roles}</p>
			<div id="pitch">
				{@html prismicH.asHTML(project.overview)}
			</div>
		</div>
		<div id="button-container">
			<Button {color} link={'/projects/' + project.project_page.uid}>More</Button>
			<Spacer height="1rem" width="1rem" />
			<Button {color} link={prismicH.asLink(project.external_link)}
				>{project.external_button_text}</Button
			>
		</div>
	</div>
</main>

<style>
	main {
		padding: 1.3rem 1.5rem 2rem;
		margin: 2rem 0;
		margin-bottom: 6rem;
		background-color: #1f1f22;
		border: solid var(--border-color) 0.5rem;
		border-radius: calc(var(--border-radius) * 3);
		background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), var(--background-url);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0% 60%;
	}
	.widescreen {
		width: 100%;
		display: flex;
		justify-content: space-between;
		min-height: 43rem;
		padding: 0;
		box-shadow: var(--box-shadow) !important;
		border: none;
		border-width: 1rem;
		border-radius: calc(var(--border-radius) * 4);
		overflow: hidden;
		background: var(--background-url);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0% 60%;
	}

	.widescreen #video-container {
		width: 50%;
	}

	#video-container > iframe {
		width: 100%;
		aspect-ratio: 16/9;
		margin-bottom: 1.5rem;
		border-radius: calc(var(--border-radius) * 2);
	}
	.widescreen #video-container > iframe {
		margin: 0;
		height: 100%;
		aspect-ratio: initial;
		border-radius: 0;
	}

	.tablet #content-container {
		display: flex;
		flex-direction: row;
		column-gap: 8rem;
	}
	.widescreen #content-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 50%;
		max-width: revert;
		padding: 2.5rem 3rem 3rem 5rem;
		background-color: rgba(0, 0, 0, 0.9);
	}

	.tablet #text-container {
		padding-bottom: 2rem;
	}
	.widescreen #text-container {
		padding: 0;
	}

	#title-graphic {
		height: 3rem;
		max-width: 100%;
		margin-bottom: 0.5rem;
	}
	.tablet #title-graphic {
		margin-bottom: 1rem;
		height: 4rem;
	}
	.widescreen #title-graphic {
		height: 5rem;
		align-self: flex-start;
		margin-bottom: 0.5rem;
	}

	h1 {
		margin-bottom: 0.5rem;
		font-size: 2.5rem;
		line-height: 100%;
	}
	.tablet h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}
	.widescreen h1 {
		font-size: 4rem;
		line-height: 100%;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.2rem;
	}
	.tablet p {
		font-size: 1.6rem;
	}
	.widescreen p {
		font-size: 1.6rem;
		font-weight: 300;
	}

	#genre {
		margin-bottom: 1rem;
	}
	.widescreen #genre {
		margin-bottom: 2rem;
	}

	#roles {
		margin-bottom: 2rem;
	}
	.widescreen #roles {
		margin-bottom: 2.5rem;
	}

	#pitch > :global(*) {
		margin-bottom: 0.5rem;
		font-size: 1.2rem;
		line-height: 130%;
		font-weight: 600;
	}
	.tablet #pitch > :global(*) {
		font-size: 1.6rem;
	}
	.widescreen #pitch > :global(*) {
		margin-bottom: 1rem;
		font-size: 1.6rem;
		line-height: 150%;
		font-weight: 700;
	}

	#button-container {
		margin-top: 2.5rem;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: center;
		font-size: 1.5rem;
		line-height: 150%;
	}
	.tablet #button-container {
		flex-direction: column;
		align-self: flex-end;
	}
	.widescreen #button-container {
		flex-direction: row;
		align-self: flex-end;
		flex-grow: 1;
	}
</style>
