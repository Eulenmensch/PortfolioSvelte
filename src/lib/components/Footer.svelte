<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="legal">
		<b>Copyright © {year} by Yoshua Woo</b>
		<p>All images, logos and names are used with permission</p>
		<p class="privacy">
			This site uses no tracking or analytics. Embedded videos and previews load only when you
			choose to open them.
		</p>
	</div>
</footer>

<style>
	footer {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 6rem 1.5rem 4rem;
	}
	.legal {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.5rem 4rem;
		width: 80%;
		font-size: 1.3rem;
		text-align: center;
	}
	.legal b,
	.legal p {
		width: 100%;
	}
	.privacy {
		font-size: 1.1rem;
		font-weight: 300;
		opacity: 0.8;
	}
</style>
