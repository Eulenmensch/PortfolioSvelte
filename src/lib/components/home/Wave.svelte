<!-- Decorative background wave behind the hero. -->
<div class="wave" aria-hidden="true">
	<img src="/media/home/hero-wave.svg" alt="" />
</div>

<style>
	.wave {
		position: absolute;
		z-index: -10;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}
	img {
		position: absolute;
		top: -20vw;
		left: -100%;
		width: 300%;
		min-width: 80rem;
	}
	@media (min-width: 768px) {
		img {
			top: -23vw;
			left: -90%;
			width: 275%;
			transform: scaleY(92%);
		}
	}
	@media (min-width: 1024px) {
		img {
			transform: rotate(180deg);
			top: unset;
			bottom: -20vh;
			width: 310vw;
			left: -70%;
		}
	}
</style>
