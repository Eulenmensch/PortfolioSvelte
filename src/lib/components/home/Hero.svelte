<script lang="ts">
	import { onMount } from 'svelte';
	import { createNoise2D } from 'simplex-noise';
	import { md } from '$lib/markdown';
	import type { Home } from '$lib/content/types';

	let { hero }: { hero: Home['hero'] } = $props();

	let pathEl: SVGPathElement;

	/** Closed Catmull-Rom spline -> SVG path (replaces @georgedoescode/spline). */
	function spline(points: { x: number; y: number }[], tension = 1): string {
		const pts = [points[points.length - 1], ...points, points[0], points[1]];
		let d = '';
		for (let i = 1; i < pts.length - 2; i++) {
			const p0 = pts[i - 1],
				p1 = pts[i],
				p2 = pts[i + 1],
				p3 = pts[i + 2];
			const c1x = p1.x + ((p2.x - p0.x) / 6) * tension;
			const c1y = p1.y + ((p2.y - p0.y) / 6) * tension;
			const c2x = p2.x - ((p3.x - p1.x) / 6) * tension;
			const c2y = p2.y - ((p3.y - p1.y) / 6) * tension;
			if (i === 1) d += `M ${p1.x},${p1.y} `;
			d += `C ${c1x},${c1y} ${c2x},${c2y} ${p2.x},${p2.y} `;
		}
		return d + 'Z';
	}

	onMount(() => {
		const noise2D = createNoise2D();
		const numPoints = 9;
		const radius = 80;
		const amplitude = 7;
		const noiseStep = 0.0007;

		const points = Array.from({ length: numPoints }, (_, i) => {
			const theta = ((i + 1) / numPoints) * Math.PI * 2;
			const x = 100 + Math.cos(theta) * radius;
			const y = 100 + Math.sin(theta) * radius;
			return { x, y, initialX: x, initialY: y, nx: Math.random() * 100, ny: Math.random() * 100 };
		});

		const map = (n: number, a: number, b: number, c: number, d: number) =>
			((n - a) / (b - a)) * (d - c) + c;

		let raf = 0;
		const animate = () => {
			pathEl.setAttribute('d', spline(points));
			for (const p of points) {
				p.x = map(noise2D(p.nx, p.nx), -1, 1, p.initialX - amplitude, p.initialX + amplitude);
				p.y = map(noise2D(p.ny, p.ny), -1, 1, p.initialY - amplitude, p.initialY + amplitude);
				p.nx += noiseStep;
				p.ny += noiseStep;
			}
			raf = requestAnimationFrame(animate);
		};
		animate();
		return () => cancelAnimationFrame(raf);
	});
</script>

<section id="hero">
	<!-- the intro text only appears on widescreen, as in the original -->
	<div class="text">
		{@html md(hero.text)}
	</div>

	<div class="blob">
		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="portrait" patternUnits="userSpaceOnUse" width="200" height="200">
					{#if hero.image}
						<image href={hero.image.src} x="10" y="10" width="180" height="180" />
					{/if}
				</pattern>
			</defs>
			<path bind:this={pathEl} d="" fill="url(#portrait)" stroke="var(--mango-yellow)" stroke-width="6" />
		</svg>
	</div>
</section>

<style>
	#hero {
		display: grid;
		place-items: center;
		padding: 0 2rem;
	}

	/* hidden on mobile + tablet (only the headshot shows), like the original */
	.text {
		display: none;
	}

	.blob {
		display: grid;
		place-items: center;
		width: 100%;
		margin-top: 30vw;
	}
	svg {
		max-width: 35rem;
		width: 100%;
		aspect-ratio: 1 / 1;
	}

	@media (min-width: 768px) {
		.blob {
			margin-top: 4vw;
		}
		svg {
			width: 60vw;
			max-width: 80rem;
		}
	}

	@media (min-width: 1024px) {
		#hero {
			display: flex;
			align-items: center;
			width: 80rem;
			max-width: 100%;
			margin: 20rem auto 0;
		}
		.text {
			display: block;
			width: 80%;
			margin-right: 6rem;
			padding-top: 4rem;
		}
		.text :global(p) {
			margin-bottom: 1rem;
			font-size: 1.9rem;
			line-height: 1.5;
			font-weight: 300;
		}
		.text :global(strong) {
			font-weight: 800;
		}
		.blob {
			margin-top: 0;
		}
		svg {
			width: 38rem;
		}
	}
</style>
