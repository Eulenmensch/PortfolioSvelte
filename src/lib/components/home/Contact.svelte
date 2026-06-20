<script lang="ts">
	import type { Contact } from '$lib/content/types';

	let { contact }: { contact: Contact } = $props();

	let success = $state(false);
	let submitting = $state(false);
	const bg = $derived(contact.background?.src);

	async function submit(e: SubmitEvent) {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		submitting = true;
		try {
			const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
			const res = await fetch('https://api.staticforms.xyz/submit', { method: 'POST', body });
			if (res.ok) success = true;
		} finally {
			submitting = false;
		}
	}
</script>

<section id="contact" class="contact" style:--bg={bg ? `url(${bg})` : 'none'}>
	<div class="cta">
		<h2>{contact.callToAction}</h2>
		<div class="info">
			<a href={`mailto:${contact.email.replace('[at]', '@')}`}>{contact.email}</a>
			<a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
		</div>
	</div>

	<form onsubmit={submit} class:success>
		<input type="text" name="name" placeholder="Your Name" required />
		<input type="email" name="email" placeholder="Your Email" required />
		<textarea name="message" placeholder="Your Message..." required></textarea>
		<input type="text" name="honeypot" style="display:none" tabindex="-1" autocomplete="off" />
		<input type="hidden" name="accessKey" value="c184eab0-febe-4343-9048-5366fadada04" />
		<input type="hidden" name="subject" value="Portfolio Inquiry" />
		<button type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Submit'}</button>

		{#if success}
			<div class="thanks">Thank you!</div>
		{/if}
	</form>
</section>

<style>
	.contact {
		position: relative;
		margin: 6rem 0 0;
		display: flex;
		flex-direction: column;
		border-radius: calc(var(--border-radius) * 3);
		overflow: hidden;
		background-color: var(--mango-yellow);
		box-shadow: var(--box-shadow);
		color: #1a1a1a;
	}

	.cta {
		padding: 2rem;
		background-image: linear-gradient(rgba(20, 19, 71, 0.85), rgba(20, 19, 71, 0.85)), var(--bg);
		background-size: cover;
		color: var(--text-color-primary);
	}
	h2 {
		font-size: 3.5rem;
		font-weight: 900;
		line-height: 1;
		margin-bottom: 1.5rem;
	}
	.info {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-size: 1.5rem;
		font-weight: 700;
	}
	.info a {
		color: var(--text-color-primary);
		text-decoration: none;
	}
	.info a:hover {
		text-decoration: underline;
	}

	form {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem;
	}
	input,
	textarea {
		padding: 1rem 1.2rem;
		border: none;
		border-radius: var(--border-radius);
		background-color: whitesmoke;
		color: #1a1a1a;
		font-size: 1.3rem;
		font-weight: 600;
		font-family: inherit;
	}
	textarea {
		min-height: 12rem;
		resize: vertical;
	}
	input::placeholder,
	textarea::placeholder {
		color: #555;
	}
	button {
		align-self: flex-end;
		padding: 0.8rem 2rem;
		border-radius: 100rem;
		background-color: #1a1a1a;
		color: var(--mango-yellow);
		font-weight: 900;
		font-size: 1.4rem;
		cursor: pointer;
	}
	button:disabled {
		opacity: 0.6;
		cursor: default;
	}
	.thanks {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
		background-color: var(--kaomaru-blue);
		color: var(--text-color-primary);
		font-size: 3rem;
		font-weight: 900;
	}

	@media (min-width: 1024px) {
		.contact {
			flex-direction: row;
		}
		.cta,
		form {
			width: 50%;
			padding: 4rem;
		}
		.cta {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
</style>
