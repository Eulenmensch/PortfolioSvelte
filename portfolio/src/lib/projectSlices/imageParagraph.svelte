<!-- this needs styling options for all the different slice labels -->
<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	export let slice: { [key: string]: any };
	let images: { [key: string]: any } = slice.items;
</script>

<h1>{prismicH.asText(slice.primary.heading)}</h1>
{@html prismicH.asHTML(slice.primary.paragraph_text)}
{#each Object.entries(images) as [key, item]}
	<img src={item.paragraph_image.url} alt={item.paragraph_image.alt} />
	{@html prismicH.asHTML(item.image_description)}
{/each}
