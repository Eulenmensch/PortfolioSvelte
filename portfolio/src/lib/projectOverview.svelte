<script>
	export let data = {
		videoId2: '',
		title: '',
		facts: {
			genre: '',
			engine: '',
			'team size': '',
			duration: '',
			role: ''
		},
		gameDescription: '',
		videoDescription: '',
		calloutText: ['']
	};
</script>

<div id="container">
	<div id="facts-video-container">
		<div id="facts-container">
			<div id="quick-facts">
				{#each Object.entries(data.facts) as fact}
					<div id="fact">
						<div id="fact-key">{fact[0]}</div>
						<div id="fact-value">{fact[1]}</div>
					</div>
				{/each}
			</div>
			<div id="game-description"><p>{data.gameDescription}</p></div>
			<div id="video-description"><p>{data.videoDescription}</p></div>
		</div>
		{#if data.videoId2 != '' && data.videoId2 != undefined}
			<div id="video-container">
				<iframe
					width="100%"
					height="100%"
					src="https://www.youtube-nocookie.com/embed/{data.videoId2}"
					title="{data.title} youtube video"
					frameborder="0"
					allow="clipboard-write; encrypted-media; picture-in-picture"
					allowfullscreen
				/>
			</div>
		{/if}
	</div>
	<div id="intro-text">
		{#each data.calloutText as paragraph}
			<p>{paragraph}</p>
		{/each}
	</div>
</div>

<style>
	#container {
		display: flex;
		max-width: 140rem;
		width: 100%;
	}
</style>
