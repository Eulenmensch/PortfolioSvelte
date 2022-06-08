<main>
	<div id="text-container">
		<h1>About Me</h1>
		<p>Hi, my name is Yoshua.</p>
		<p>
			I recently finished my studies in Game Design at HTW Berlin and am now looking to start my
			career as a game designer.
		</p>
		<p>
			In my four years of making games, I found that I have a particular love for making player
			controls feel great to interact with, no matter if it's 1st person, 3rd person, or a top down
			click-to-move setup.
		</p>
		<p>
			I'm fascinated with gameplay and combat systems and have spent a lot of time creating, testing
			and iterating them.
		</p>
		<p>
			I thrive in multi-disciplinary teams as I enjoy highly collaborative work and being surrounded
			by like-minded people. I love learning and keeping up with new developments in games and tech
			and generally have a project on the side where I can test and try out new things.
		</p>
		<p>
			When I'm not working on games, I'm an avid tabletop game master, home cook and go rock
			climbing.
		</p>
	</div>
	<div id="background-image" />
	<div id="background-gradient" />
</main>

<style>
	:root {
		color: whitesmoke;
	}
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#text-container {
		max-width: 62rem;
	}
	h1 {
		font-size: 4rem;
		line-height: 100%;
		padding-top: 12rem;
		padding-bottom: 3rem;
	}
	p {
		font-size: 1.6rem;
		line-height: 150%;
		padding-bottom: 1.5rem;
	}
	#background-image {
		position: absolute;
		top: 0;
		z-index: -10;
		height: 100vh;
		width: 100%;
		background-image: linear-gradient(180deg, rgba(0, 255, 191, 0.25), hsla(0, 0%, 100%, 0)),
			linear-gradient(180deg, transparent, #09275a),
			linear-gradient(180deg, rgba(9, 63, 90, 0.78), rgba(9, 63, 90, 0.78)),
			url('images/about/aboutBackground.jpeg');
		background-size: cover;
	}
</style>
