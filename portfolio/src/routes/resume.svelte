<script lang="ts">
	import Spacer from '$lib/spacer.svelte';
</script>

<svelte:head>
	<style>
		body {
			background-color: hsla(218, 91%, 21%, 1);
			color: whitesmoke;
		}
	</style>
	<title>Resumé</title>
</svelte:head>

<Spacer height="5rem" />
<main>
	<h1>Resumé</h1>
	<Spacer height="10rem" />
	<div id="resume-container">
		<div id="resume-embed">
			<iframe
				src="https://drive.google.com/file/d/1-gNiHghbsMNHcCwtHJpqKspZ93B0lReT/preview"
				width="100%"
				height="100%"
				allow="autoplay"
				title="Resumé"
			/>
		</div>
		<div id="resume-button">
			<a href="https://drive.google.com/file/d/1-gNiHghbsMNHcCwtHJpqKspZ93B0lReT/view">
				<img src="images/icons/PDF.svg" alt="Clickable PDF Icon" />
			</a>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
	h1 {
		font-size: 5rem;
		line-height: 100%;
		text-shadow: 0.2rem 0.2rem blue;
	}
	#resume-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		background-color: hsla(218, 91%, 10%, 1);
	}
	#resume-embed {
		width: 100%;
		max-width: 100rem;
		aspect-ratio: 1/1.2;
	}
	iframe {
		border-style: none;
	}
	#resume-button {
		width: 20rem;
	}
</style>
