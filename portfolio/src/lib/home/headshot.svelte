<script>
	import { spline } from '@georgedoescode/spline';
	import * as simplex from 'simplex-noise';
	import { onMount } from 'svelte';

	export let image;

	onMount(() => {
		const path = document.querySelector('path');
		function createPoints() {
			const points = [];
			const numPoints = 9;
			const angleStep = (Math.PI * 2) / numPoints;
			const radius = 80;

			for (let i = 1; i <= numPoints; i++) {
				const theta = i * angleStep;
				const x = 100 + Math.cos(theta) * radius;
				const y = 100 + Math.sin(theta) * radius;

				points.push({
					x: x,
					y: y,
					initialX: x,
					initialY: y,
					noiseOffsetX: Math.random() * 100,
					noiseOffsetY: Math.random() * 100
				});
			}

			return points;
		}

		const points = createPoints();

		function map(n, start1, end1, start2, end2) {
			return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
		}

		const simplexNoise = simplex.createNoise2D();

		let noiseStep = 0.0007;
		// noiseStep = 0.005; //faster step for visual debugging
		function noise(x, y) {
			return simplexNoise(x, y);
		}

		let amplitude = 7;
		(function animate() {
			path.setAttribute('d', spline(points, 1, true));
			requestAnimationFrame(animate);

			for (let i = 0; i < points.length; i++) {
				const point = points[i];
				const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
				const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
				const x = map(nX, -1, 1, point.initialX - amplitude, point.initialX + amplitude);
				const y = map(nY, -1, 1, point.initialY - amplitude, point.initialY + amplitude);

				point.x = x;
				point.y = y;

				point.noiseOffsetX += noiseStep;
				point.noiseOffsetY += noiseStep;
			}
		})();
	});
</script>

<main>
	<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<!-- Our gradient fill #gradient -->
			<pattern id="portrait" patternUnits="userSpaceOnUse" width="200" height="200">
				<image href={image} x="0" y="0" width="200" height="200" />
			</pattern>
		</defs>
		<path d="" fill="url(#portrait)" stroke="#FFBB25" stroke-width="6" />
	</svg>
</main>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	main {
		margin-top: 13rem;
		height: 100%;
		width: 100vw;
		display: grid;
		place-items: center;
	}

	svg {
		width: 90vmin;
		height: 90vmin;
	}
</style>
