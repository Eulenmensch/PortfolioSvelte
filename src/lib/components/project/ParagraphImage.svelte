<script lang="ts">
	import EmbedFacade from '$lib/components/EmbedFacade.svelte';
	import { md, mdInline } from '$lib/markdown';
	import { youtubeEmbed } from '$lib/youtube';
	import type { ParagraphImageSection } from '$lib/content/types';

	let { section, index }: { section: ParagraphImageSection; index: number } = $props();
	const items = $derived(section.items ?? []);
</script>

<section class="par" class:reverse={index % 2 === 1}>
	<div class="text">
		{#if section.heading}
			<h2>{section.heading}</h2>
		{/if}
		{@html md(section.body)}
	</div>

	{#if items.length}
		<div class="images">
			{#each items as item}
				<figure>
					{#if item.videoEmbed}
						<div class="frame">
							<EmbedFacade
								src={youtubeEmbed(item.videoEmbed) ?? ''}
								title={section.heading ?? 'video'}
								provider="YouTube"
							/>
						</div>
					{:else if item.image}
						<img src={item.image.src} alt={item.image.alt ?? ''} loading="lazy" />
					{/if}
					{#if item.description}
						<figcaption>{@html mdInline(item.description)}</figcaption>
					{/if}
				</figure>
			{/each}
		</div>
	{/if}
</section>

<style>
	.par {
		padding: 0 var(--x-padding);
		margin: 5rem 0;
	}
	h2 {
		font-size: 2.4rem;
		line-height: 1.3;
		margin-bottom: 1rem;
		text-decoration: underline;
		text-decoration-color: var(--highlight);
		text-underline-offset: 0.2em;
	}
	.text :global(p),
	.text :global(li) {
		font-size: 1.3rem;
		line-height: 1.5;
		margin-bottom: 1rem;
	}
	.text :global(ul) {
		margin: 1rem 0;
		padding-left: 2rem;
	}

	.images {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-top: 2rem;
	}
	figure img {
		width: 100%;
		border-radius: var(--border-radius);
		box-shadow: var(--box-shadow);
		display: block;
	}
	figure .frame {
		aspect-ratio: 16 / 9;
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: var(--box-shadow);
	}
	figcaption {
		margin-top: 0.5rem;
		padding-left: 0.3rem;
		font-size: 1.1rem;
		font-weight: 200;
	}

	@media (min-width: 1024px) {
		.par {
			display: flex;
			align-items: center;
			gap: 6rem;
			max-width: 100rem;
			margin: 10rem auto;
			padding: 0;
		}
		.par.reverse {
			flex-direction: row-reverse;
		}
		.text {
			flex: 1 1 55%;
		}
		.images {
			flex: 1 1 45%;
			margin-top: 0;
		}
		h2 {
			font-size: 3rem;
		}
		.text :global(p),
		.text :global(li) {
			font-size: 1.4rem;
		}
		figcaption {
			font-size: 1.2rem;
		}
	}
</style>
