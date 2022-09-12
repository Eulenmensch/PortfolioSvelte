<script lang="ts">
	import * as prismicH from '@prismicio/helpers';
	import { onMount } from 'svelte';

	export let contactSlice: { [key: string]: any };

	var shadow = '';
	let factor = 5;
	onMount(() => {
		for (var i = 0; i < 300 / factor; i++) {
			shadow += (shadow ? ',' : '') + i * -1.5 * factor + 'px ' + i * 1 * factor + 'px 0 #1a1a1a';
		}
	});

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<main
	class:tablet={innerWidth > 767}
	class:widescreen={innerWidth > 1023}
	style:box-shadow={shadow}
	style:--background-image={'url(' +
		prismicH.asImageSrc(contactSlice.primary.background_image) +
		')'}
>
	<div id="cta">
		<h1>{prismicH.asText(contactSlice.primary.call_to_action)}</h1>
		{#if innerWidth > 767}
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
			</div>
		{/if}
	</div>
	<form action="https://api.staticforms.xyz/submit" method="post">
		<input type="text" name="name" placeholder="Your Name" />
		<input type="text" name="email" placeholder="Your Email" />
		<textarea name="message" placeholder="Your Message..." />
		<input type="text" name="honeypot" style="display:none" />
		<input type="hidden" name="accessKey" value="c184eab0-febe-4343-9048-5366fadada04" />
		<input type="hidden" name="subject" value="Portfolio Inquiry" />
		<input type="hidden" name="replyTo" value="@" />
		<!-- <input type="hidden" name="redirectTo" value="https://example.com/contact/success" /> -->
		<div id="submit">
			<input type="submit" value="Submit" />
			<svg
				viewBox="0 0 24 24"
				stroke-width="2.5"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				color="#1a1a1a"
				><path
					d="M9 9l4.5 3L18 9M3 13.5h2M1 10.5h4"
					stroke="#1a1a1a"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/><path
					d="M5 7.5V7a2 2 0 012-2h13a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2v-.5"
					stroke="#1a1a1a"
					stroke-width="2.5"
					stroke-linecap="round"
				/>
			</svg>
		</div>
	</form>
	{#if innerWidth < 768}
		<div id="contact-info-container">
			<div class="contact-info">
				<svg
					stroke-width="2.5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					color="#1a1a1a"
					><path
						d="M7 9l5 3.5L17 9"
						stroke="#1a1a1a"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/><path
						d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"
						stroke="#1a1a1a"
						stroke-width="2.5"
					/>
				</svg>
				<a href="mailto:yoshua.woo@gmail.com">yoshua.woo@gmail.com</a>
			</div>
			<div class="contact-info">
				<svg
					stroke-width="2.5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					color="#1a1a1a"
					><path
						d="M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479z"
						stroke="#1a1a1a"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/></svg
				>
				<a href="tel:+4915754381194">+49 1575 438 1194</a>
			</div>
		</div>
	{/if}
</main>

<style>
	main {
		position: relative;
		z-index: 20;
		padding: 1.3rem 1.5rem 2rem;
		margin: 0 2rem;
		display: flex;
		flex-direction: column;
		background-color: var(--mango-yellow);
		border-radius: calc(var(--border-radius) * 3);
		border: solid #1a1a1a 0.5rem;
		overflow: hidden;
	}
	.tablet {
		flex-direction: row;
		padding: 0;
		max-width: 66rem;
		margin: 0 auto;
		background: none;
	}
	.widescreen {
		box-shadow: var(--box-shadow) !important;
		max-width: 141rem;
		border: none;
	}

	#cta {
		color: #1a1a1a;
	}
	.tablet #cta {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: var(--kaomaru-blue);
		color: var(--text-color-primary);
	}
	.widescreen #cta {
		background-image: var(--background-image);
		background-color: #141347;
		background-blend-mode: multiply;
		background-size: cover;
	}

	h1 {
		font-size: 3.5rem;
		line-height: 100%;
		font-weight: 900;
		margin: 1rem 0 2rem;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.tablet form {
		padding: 1.3rem 1.5rem 2rem 2.5rem;
		width: 50%;
		background-color: var(--mango-yellow);
	}
	.widescreen form {
		padding: 3rem 4rem;
	}

	input[type='text'],
	#submit {
		padding: 1rem;
		margin: 0.5rem 0;
		background-color: whitesmoke;
		border: solid #1a1a1a 0.5rem;
		border-radius: calc(var(--border-radius) * 3);
		color: #1a1a1a;
		font-size: 1.2rem;
		font-weight: 900;
		outline: none;
	}
	.widescreen input[type='text'],
	.widescreen #submit {
		border: none;
		padding-left: 1.5rem;
	}

	#submit {
		margin-top: 1rem;
		align-self: flex-end;
		display: flex;
	}
	#submit svg {
		height: 2rem;
		width: 2rem;
	}

	input[type='submit'] {
		all: unset;
		margin: 0 0.5rem;
	}
	input::placeholder {
		color: #1a1a1a;
	}

	textarea {
		margin-top: 2rem;
		padding: 1.5rem 1rem;
		border: solid #1a1a1a 0.5rem;
		border-radius: calc(var(--border-radius) * 3);
		height: 20rem;
		width: 100%;
		outline: none;
		overflow: hidden;
		resize: none;
	}
	.widescreen textarea {
		border: none;
		padding-left: 1.5rem;
	}

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
	.contact-info svg {
		width: 3rem;
		aspect-ratio: 1/1;
	}
	.contact-info a {
		color: #1a1a1a;
		margin-left: 0.5rem;
	}

	.tablet .contact-info a {
		color: var(--text-color-primary);
	}
</style>
