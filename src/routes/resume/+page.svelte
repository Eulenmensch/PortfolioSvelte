<script lang="ts">
	import Cv from '$lib/components/Cv.svelte';

	$effect(() => {
		const prev = document.body.style.backgroundColor;
		document.body.style.backgroundColor = 'hsl(218, 91%, 10%)';
		// Flag the route so the global print stylesheet hides site chrome
		// and prints only the CV sheet.
		document.body.classList.add('cv-route');
		return () => {
			document.body.style.backgroundColor = prev;
			document.body.classList.remove('cv-route');
		};
	});

	function downloadPdf() {
		window.print();
	}
</script>

<svelte:head>
	<title>Resumé — Yoshua Woo</title>
	<meta name="description" content="Resumé / CV of Yoshua Woo, game designer." />
</svelte:head>

<main class="resume">
	<h1>Resumé</h1>

	<div class="cv-frame">
		<Cv />
	</div>

	<button class="download" onclick={downloadPdf}>Download PDF ↓</button>
</main>

<style>
	.resume {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 var(--x-padding) 4rem;
		background-color: hsl(218, 91%, 10%);
	}
	h1 {
		margin: 8rem 0 4rem;
		font-size: 5rem;
		line-height: 1;
		text-shadow: 0.2rem 0.2rem var(--queen-blue);
	}

	/* The CV renders in the site theme on screen, so it blends into the
	   page — no white-card framing. (Print flips it to a B/W A4 sheet.) */
	.cv-frame {
		width: 100%;
		max-width: 80rem;
	}

	.download {
		margin-top: 2rem;
		padding: 0.8rem 2rem;
		border: 0.3rem solid var(--mango-yellow);
		border-radius: 100rem;
		color: var(--mango-yellow);
		font-weight: 900;
		font-size: 1.4rem;
		cursor: pointer;
		transition:
			background-color 250ms,
			color 250ms;
	}
	.download:hover {
		background-color: var(--mango-yellow);
		color: black;
	}

	@media (min-width: 1024px) {
		h1 {
			margin: 5rem 0;
		}
	}

	/* Hide the dark-page chrome around the CV when printing. */
	@media print {
		.resume {
			min-height: 0;
			padding: 0;
			background: none;
		}
		.resume h1,
		.download {
			display: none;
		}
		.cv-frame {
			max-width: none;
			border-radius: 0;
			overflow: visible;
			box-shadow: none;
		}
	}
</style>
