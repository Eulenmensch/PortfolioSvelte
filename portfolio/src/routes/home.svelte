<script lang="ts">
	import { Body } from 'svelte-body';
	import Headshot from '$lib/home/headshot.svelte';
	import Wave from '$lib/home/wave.svelte';
	const style = {
		backgroundColor: '#636A25',
		width: '100vw'
	};
</script>

<Body {style} />
<Headshot />
<Wave />

<style></style>
