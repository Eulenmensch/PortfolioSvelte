<script lang="ts">
	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<div class:tablet={innerWidth > 767} class:widescreen={innerWidth > 1023}>
	<img src="images/home/hero-wave.svg" alt="" />
</div>

<style>
	div {
		position: absolute;
		z-index: -10;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}
	img {
		position: absolute;
		top: -20vw;
		left: -100%;
		width: 300%;
		min-width: 80rem;
	}
	.tablet > img {
		top: -23vw;
		left: -90%;
		width: 275%;
		transform: scaleY(92%);
	}
	.widescreen > img {
		transform: rotate(180deg);
		top: unset;
		bottom: -20vh;
		/* width: 420vh; */
		width: 310vw;
		left: -70%;
	}
</style>
