<script>
	import Spacer from './spacer.svelte';

	const year = new Date().getFullYear();
</script>

<footer>
	<Spacer height="20rem" />
	<div id="legal">
		<b>Copyright © {year} by Yoshua Woo</b>
		<Spacer width="4rem" height="1rem" />
		<p>All images, logos and names are used with permission</p>
	</div>
	<Spacer height="10rem" />
</footer>

<style>
	footer {
		position: absolute;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 20;
	}
	#legal {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		width: 80%;
		font-size: 1.3rem;
	}
	p,
	b {
		width: 100%;
		text-align: center;
	}
</style>
