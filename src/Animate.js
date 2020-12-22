import anime from 'animejs/lib/anime.es.js';

const Animate = {
	fadeInHeader() {
		anime({
			targets: '.App-header',
			opacity: 1,
			duration: 300,
			easing: 'easeInOutSine',
		});
	},

	fadeOutHeader() {
		anime({
			targets: '.App-header',
			opacity: 0,
			duration: 300,
			easing: 'easeInOutQuad',
		});
	},

	slideInProjects() {
		anime({
			// targets: '.durakCard, .igfCard',
			targets: '.projectCard',
			opacity: 1,
			duration: 300,
			easing: 'easeInOutSine',
		});

		anime({
			// targets: '.durakCard, .igfCard',
			targets: '.projectCard',
			translateX: 800,
			direction: 'reverse',
			duration: 300,
			easing: 'easeInOutSine',
		});
	},

	slideOutProjects() {
		anime({
			// targets: '.durakCard, .igfCard',
			targets: '.projectCard',
			opacity: 0,
			duration: 300,
			easing: 'easeInOutSine',
		});
	},

	fadeInTitle() {
		anime({
			targets: '.name_tag_proLinks, #arrow1, #arrow2',
			opacity: 1,
			duration: 1000,
			easing: 'easeInOutSine',
		});
	},

	fadeOutTitle() {
		anime({
			targets: '.name_tag_proLinks, #arrow1, #arrow2',
			opacity: 0,
			duration: 300,
			easing: 'easeInOutSine',
		});
	},
};

export default Animate;
