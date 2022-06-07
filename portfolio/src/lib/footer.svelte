<script>
	import Spacer from './spacer.svelte';

	const year = new Date().getFullYear();
</script>

<Spacer height="20rem" />
<footer>
	<b>Copyright © {year} by Yoshua Woo</b>
	<Spacer width="4rem" />
	<p>All images, logos and names are used with permission</p>
</footer>
<Spacer height="10rem" />

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.3rem;
	}
</style>
