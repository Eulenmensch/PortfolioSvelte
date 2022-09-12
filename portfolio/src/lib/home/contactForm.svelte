<script lang="ts">
	import Button from '$lib/button.svelte';
	import * as prismicH from '@prismicio/helpers';
	import jQuery from 'jquery';
	import { onMount } from 'svelte';
	import ContactInfo from './contactInfo.svelte';
	import { slide } from 'svelte/transition';

	export let contactSlice: { [key: string]: any };

	var shadow = '';
	let factor = 5;
	onMount(() => {
		for (var i = 0; i < 300 / factor; i++) {
			shadow += (shadow ? ',' : '') + i * -1.5 * factor + 'px ' + i * 1 * factor + 'px 0 #1a1a1a';
		}
	});

	let innerWidth: number;

	let successfulSubmission: boolean = false;

	function submitForm() {
		jQuery.ajax({
			url: 'https://api.staticforms.xyz/submit',
			type: 'post',
			data: jQuery('#contact-form').serialize(),
			success: function () {
				successfulSubmission = true;
			}
		});
	}
</script>

<svelte:window bind:innerWidth />

<main
	class:tablet={innerWidth > 767}
	class:widescreen={innerWidth > 1023}
	class:successfulSubmission
	style:box-shadow={shadow}
	style:--background-image={'url(' +
		prismicH.asImageSrc(contactSlice.primary.background_image) +
		')'}
>
	<div id="cta">
		<h1>{prismicH.asText(contactSlice.primary.call_to_action)}</h1>
		{#if innerWidth > 767}
			<ContactInfo bind:contactSlice />
		{/if}
	</div>
	<form id="contact-form" class:successfulSubmission>
		<input type="text" name="name" placeholder="Your Name" required />
		<input type="text" name="email" placeholder="Your Email" required />
		<textarea name="message" placeholder="Your Message..." required />
		<input type="text" name="honeypot" style="display:none" />
		<input type="hidden" name="accessKey" value="c184eab0-febe-4343-9048-5366fadada04" />
		<input type="hidden" name="subject" value="Portfolio Inquiry" />
		<input type="hidden" name="replyTo" value="@" />
		<!-- <input type="hidden" name="redirectTo" value="https://example.com/contact/success" /> -->
		<div id="submit" on:click={submitForm}>
			<!-- <input type="submit" value="Submit" />
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
			</svg> -->
			<Button color="white">
				Submit
				<svg
					viewBox="0 0 24 24"
					stroke-width="2.5"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					color="currentColor"
					><path
						d="M9 9l4.5 3L18 9M3 13.5h2M1 10.5h4"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/><path
						d="M5 7.5V7a2 2 0 012-2h13a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2v-.5"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
					/>
				</svg>
			</Button>
		</div>
		{#if successfulSubmission}
			<div transition:slide={{ duration: 300 }} id="submission-success"><div>Thank you!</div></div>
		{/if}
	</form>
	{#if innerWidth < 768}
		<ContactInfo bind:contactSlice />
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

	.successfulSubmission {
		background-color: var(--kaomaru-blue);
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
		padding: 0;
		margin-top: 1rem;
		align-self: flex-end;
		display: flex;
		border: none;
	}
	.widescreen #submit {
		color: var(--text-color-primary);
		padding: 0;
	}
	#submit svg {
		margin-left: 0.5rem;
		height: 2rem;
		width: 2rem;
	}
	/* #submit :global(*) {
		border: unset;
	}
	.widescreen #submit :global(*) {
		border: initial;
	} */

	/* input[type='submit'] {
		all: unset;
		margin: 0 0.5rem;
	} */
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

	#submission-success {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--kaomaru-blue);
	}
	.tablet #submission-success {
		left: 50%;
		width: 50%;
	}

	#submission-success div {
		font-size: 4rem;
		font-weight: 900;
		margin-bottom: 2rem;
	}
</style>
