<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import { dev } from '$app/env';
	import components from '$lib/projectSlices';

	export let document;
</script>

<SliceZone slices={document.data.body} {components} {dev} />
