<script lang="ts">
	export let link: string = '';
</script>

<a href={link}>
	<slot>Button</slot>
</a>

<style>
	a {
		padding: 0.5rem 1.3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0.4rem solid var(--color);
		border-radius: 100rem;
		/* border-bottom: 0.5rem solid var(--text-color-primary); */
		color: var(--color);
		background-color: black;
		text-decoration: none;
		font-weight: 900;
		cursor: pointer;
		pointer-events: auto;
	}
</style>
