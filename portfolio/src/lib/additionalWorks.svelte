<script lang="ts">
	import AdditionalWork from './additionalWork.svelte';
	import Spacer from './spacer.svelte';
	import { mediaType } from '../types';

	let additionalWorkDataSet = [
		{
			mediaFormat: mediaType.video,
			mediaURL:
				'https://uploads-ssl.webflow.com/60cf32d782c9a8cd144e24e5/614a2daaf255a3826c717621_Lightbending%20Cut-transcode.mp4',
			mediaAlt: '',
			backgroundURL: 'images/home/lightbendingBackground.png',
			colorOverlay: 'rgba(5, 4, 26, 0.82)',
			title: 'Lightbending',
			platform: 'PC',
			engine: 'Unity',
			genre: 'Interactive Installation',
			text: [
				'This installation was designed, developed and realized in three weeks.',
				'By moving adhesive VR trackers to any position on the walls, players can influence the flow of particles that are being projected onto the walls and the ground.',
				'Two other players can use VR controllers like paint guns to color in the particles flowing through the space.'
			]
		},
		{
			mediaFormat: mediaType.iframe,
			mediaURL: 'https://itch.io/embed-upload/1438901?color=f6eed8',
			mediaAlt: '',
			backgroundURL: 'images/home/tinypumpBackground.png',
			colorOverlay: 'rgba(3, 6, 32, 0.86)',
			title: 'Tiny Pump',
			platform: 'Web',
			engine: 'Unity',
			genre: 'Arcade / Food-Slicing',
			text: [
				'A playable banner advertisement for a fictional cup-ramen product.',
				'Players use the sharp end of a physically simulated noodle to slice the ingredients that then fall into the cup.',
				"The game uses Unity's DOTS framework, builds to asm.js as well as WebAssembly and can be played in messengers, ad banners or as a conventional web game (Or in the box to the top)."
			]
		},
		{
			mediaFormat: mediaType.video,
			mediaURL: 'videos/toytiedGameplay.mp4',
			mediaAlt: '',
			backgroundURL: 'images/home/toytiedIllustration.png',
			colorOverlay: 'rgba(34, 24, 27, 0.9)',
			title: 'Toy-Tied',
			platform: 'PC',
			engine: 'Unity',
			genre: 'Puzzle / Alternative Controls',
			text: [
				'A two-day gamejam game about two plushies tied together with a chinese finger trap.',
				'The two characters take turns and are moved by hitting the corresponding key on the keyboard, as long as that key is not occupied and also reachable.',
				'While players can figure out earlier levels in peace, later levels have toy soldiers that fire rockets at the characters.'
			]
		},
		{
			mediaFormat: mediaType.image,
			mediaURL: 'images/home/parasiteScreenshot.png',
			mediaAlt: 'a stylized depiction of a parasitic worm feeding on a cell',
			backgroundURL: 'images/home/parasiteBackground.png',
			colorOverlay: 'rgba(19, 6, 14, 0.85)',
			title: 'Parasite',
			platform: 'Mobile/Web',
			engine: 'Unity',
			genre: 'Farming / Experimental',
			text: [
				'A three-day gamejam game where players collaborate to survive as a parasitic organism.',
				"Once the parasite's hunger has been satisfied, a player can give on their game-code to another player to 'reproduce' and continue the chain of parasites.",
				'The state of the host body including available resources are given along as well, forcing players to think ahead to leave a good game state for the next player in line.'
			]
		}
	];
</script>

<h1>Other projects I have worked on:</h1>
<Spacer height="4rem" />
<div id="container">
	{#each additionalWorkDataSet as data, i}
		<AdditionalWork {data} />
	{/each}
</div>

<style>
	h1 {
		font-size: 3rem;
	}
	#container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: stretch;
		justify-content: space-between;
		max-width: 140rem;
	}
	#container > :global(div) {
		margin-top: 4rem;
		flex-grow: 1;
	}
</style>
