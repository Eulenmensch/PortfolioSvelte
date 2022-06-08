<script lang="ts">
	import ProjectHero from './projectHero.svelte';
	import Spacer from './spacer.svelte';

	let projectData = [
		{
			title: 'Unnanounced AAA Game',
			videoId: '',
			titleFont: "'Inter', Arial, sans-serif",
			titleSize: '4rem',
			titleWeight: '900',
			genre: 'Turn-Based-Tactics / 4X',
			roles: 'Game Design Intern',
			pageLink: '/internship',
			externalLink: 'https://kingart-games.com/',
			externalButtonText: 'KING Art Games',
			backgroundImg: 'images/home/KingArtDesk.png',
			overlayColorHSLA: '157, 30%, 7%, 90%',
			innerText: [
				'As an intern at KING Art Games I worked on the combat and UX design of a pre-production project in direct and frequent communication with the Game Director and Lead Designer.',
				'This project is currently still under an NDA and will be updated when possible.'
			]
		},
		{
			title: 'Hoversword',
			videoId: 'HP-GeZLaELo',
			titleFont: "'KnifePrincess', Arial, sans-serif",
			titleSize: '4rem',
			titleWeight: '500',
			genre: 'Action-Adventure / Racing',
			roles: '3Cs / Gameplay / Programming / UX',
			pageLink: '/hoversword',
			externalLink: 'https://eulenmensch.itch.io/hoversword',
			externalButtonText: 'itch.io',
			backgroundImg: 'images/home/HoverswordScreenshotJump.png',
			overlayColorHSLA: '218, 50%, 7%, 90%',
			innerText: [
				'‘Hoversword’ is the vertical slice to a 3rd person action adventure about high speeds, futuristic boardsports, and an underground dungeon-delving hoverboard scene.',
				'I worked on this project together with a game/level designer as well as three artists during my 3rd year of university.'
			]
		},
		{
			title: 'Non-Violent FPS',
			videoId: 'rMMEmDwaF6Y',
			titleFont: "'Bigboy', Arial, sans-serif",
			titleSize: '5rem',
			titleWeight: '500',
			genre: 'FPS / Platformer / Wholesome',
			roles: 'Solo-Project',
			pageLink: '/nvfps',
			externalLink: 'https://eulenmensch.itch.io/nvfps',
			externalButtonText: 'itch.io',
			backgroundImg: 'images/home/nvfpsScreenshotGrapplers.png',
			overlayColorHSLA: '336, 40%, 16%, 0.9',
			innerText: [
				'A series of prototypes that explore non-violent shooting and the effect of system design as well as game feel on the perception of violence in FPS games.',
				"Created as a complimentary design project to my bachelor's thesis."
			]
		},
		{
			title: 'GUSH',
			videoId: 'b61jFY8Ec0c',
			titleFont: "'CoreSansG', Arial, sans-serif",
			titleSize: '4.5rem',
			titleWeight: '500',
			genre: 'Physics-Sandbox / Waterslide',
			roles: 'Systems / Level Design / Prototyping',
			pageLink: '/gush',
			externalLink: 'https://gushthegame.itch.io/gush',
			externalButtonText: 'itch.io',
			backgroundImg: 'images/home/gushScreenshot.png',
			overlayColorHSLA: '13, 87%, 9%, 0.8',
			innerText: [
				'GUSH - currently pink is a sandboxy, physics based waterslide game where your only objective is to get a shiny cube into the jello-filled tank at the end of each level.'
			]
		}
	];
</script>

{#each projectData as data, i}
	<ProjectHero {data} />
	<!-- don't add a spacer at the end of the projects component -->
	{#if i < projectData.length - 1}
		<Spacer height="7rem" />
	{/if}
{/each}
