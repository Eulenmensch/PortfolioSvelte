<script lang="ts">
	// Privacy-friendly embed: nothing third-party loads until the user clicks.
	let {
		src,
		title,
		provider = 'external content',
		poster = null,
		allow = 'clipboard-write; encrypted-media; picture-in-picture',
		allowfullscreen = true
	}: {
		src: string;
		title: string;
		provider?: string;
		poster?: string | null;
		allow?: string;
		allowfullscreen?: boolean;
	} = $props();

	let loaded = $state(false);
</script>

<div class="facade" style:--poster={poster ? `url(${poster})` : 'none'}>
	{#if loaded}
		<iframe {src} {title} {allow} {allowfullscreen} loading="lazy"></iframe>
	{:else}
		<button type="button" class="load" onclick={() => (loaded = true)}>
			<span class="play" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
			</span>
			<span class="label">Load {provider}</span>
			<span class="note">Loads content from {provider}, which may set cookies.</span>
		</button>
	{/if}
</div>

<style>
	.facade {
		position: relative;
		width: 100%;
		height: 100%;
		min-height: 100%;
	}
	iframe {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		border: none;
	}
	.load {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 1rem;
		text-align: center;
		cursor: pointer;
		color: var(--text-color-primary, whitesmoke);
		background-color: #11151c;
		background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), var(--poster);
		background-size: cover;
		background-position: center;
		transition: background-color 200ms;
	}
	.load:hover {
		background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), var(--poster);
	}
	.play {
		display: grid;
		place-items: center;
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 50%;
		background-color: var(--mango-yellow, #ffbb25);
		color: #1a1a1a;
	}
	.play svg {
		width: 50%;
		height: 50%;
		margin-left: 0.2rem;
	}
	.label {
		font-size: 1.4rem;
		font-weight: 900;
	}
	.note {
		max-width: 26rem;
		font-size: 1rem;
		font-weight: 300;
		opacity: 0.85;
	}
</style>
