<script lang="ts">
	import Button from './button.svelte';
</script>

<div id="columns">
	<div class="profile-column">
		<h3>I have a knack for:</h3>
		<div class="skill">3Cs Design</div>
		<div class="skill">Game Feel</div>
		<div class="skill">Gameplay/Systems</div>
		<div class="skill">UX Design</div>
	</div>
	<div class="profile-column">
		<h3>I am proficient with:</h3>
		<div class="skill">Unity / Unreal Engine</div>
		<div class="skill">Programming / Scripting</div>
		<div class="skill">Confluence / Wikis / Git</div>
		<div class="skill">Illustrator / Figma</div>
	</div>
	<div class="profile-column buttons">
		<Button link="#header">Back to Top</Button>
		<Button link="/about">About</Button>
		<Button link="/resume">Resume</Button>
	</div>
</div>

<style>
	#columns {
		width: 100%;
		max-width: 90rem;
		display: flex;
		justify-content: space-between;
		font-size: 1.5rem;
		line-height: 200%;
	}
	.profile-column {
		display: flex;
		flex-direction: column;
	}
	h3 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}
	.buttons {
		justify-content: space-between;
	}
</style>
