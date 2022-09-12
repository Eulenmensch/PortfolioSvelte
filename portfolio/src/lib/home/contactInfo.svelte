<script lang="ts">
	export let contactSlice: { [key: string]: any };
	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<main class:tablet={innerWidth > 767}>
	<div id="contact-info-container">
		<div class="contact-info">
			<svg
				stroke-width="2.5"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				color="currentColor"
				><path
					d="M7 9l5 3.5L17 9"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/><path
					d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"
					stroke="currentColor"
					stroke-width="2.5"
				/>
			</svg>
			<a href={'mailto:' + contactSlice.primary.email}>{contactSlice.primary.email}</a>
		</div>
		<div class="contact-info">
			<svg
				stroke-width="2.5"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				color="currentColor"
				><path
					d="M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479z"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/></svg
			>
			<a href={'tel:' + contactSlice.primary.telephone_number}
				>{contactSlice.primary.telephone_number}</a
			>
		</div>
		<div class="contact-info">
			<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
				><title>LinkedIn</title>
				<path
					fill="currentColor"
					d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
				/>
			</svg>
			<a target="_blank" rel="noopener noreferrer" href={contactSlice.primary.linkedin}>LinkedIn®</a
			>
		</div>
	</div>
</main>

<style>
	#contact-info-container {
		margin-top: 2.5rem;
		margin-bottom: 1.5rem;
	}
	.tablet #contact-info-container {
		margin-top: 0.5rem;
	}

	.contact-info {
		margin: 0.5rem 0;
		display: flex;
		align-items: center;
		font-size: 1.5rem;
		font-weight: 900;
	}
	.tablet .contact-info {
		padding: 0.3rem 0;
	}

	.contact-info svg {
		width: 3rem;
		aspect-ratio: 1/1;
		color: #1a1a1a;
	}
	.tablet .contact-info svg {
		color: var(--text-color-primary);
	}

	.contact-info a {
		color: #1a1a1a;
		margin-left: 0.5rem;
	}

	.tablet .contact-info a {
		color: var(--text-color-primary);
		margin-left: 1rem;
	}
</style>
