<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import { dev } from '$app/env';
	import components from '$lib/projectSlices';

	import { Body } from 'svelte-body';

	export let document: { [key: string]: any };

	const style = {
		backgroundColor: document.data.primary_color,
		color: document.data.text_color
	};
</script>

<Body {style} />

<SliceZone slices={document.data.body} {components} context={{ doc: document }} />
