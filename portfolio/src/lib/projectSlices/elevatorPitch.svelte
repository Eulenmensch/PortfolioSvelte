<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	export let slice: { [key: string]: any };
</script>

<h3>{prismicH.asText(slice.primary.pitch)}</h3>
