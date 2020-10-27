import anime from 'animejs/lib/anime.es.js';


const Animate = {
    fadeInHeader(){
        anime({
            targets: '.App-header',
            opacity: 1,
            duration: 300,
            easing: 'easeInOutSine'
        });
    },

    fadeOutHeader(){
        anime({
            targets: '.App-header',
            opacity: 0,
            duration: 300,
            easing: 'easeInOutQuad'
        });
    },

    slideInDurak(){
        anime({
            targets: '.durakCard',
            translateX: {value: 800, direction: 'reverse'},
            opacity: 1,
            duration: 300,
            easing: 'easeInOutSine'
        });

        anime({
            targets: '.durakCard',
            translateX:  800, 
            direction: 'reverse',
            duration: 300,
            easing: 'easeInOutSine'
        });
    },

    slideOutDurak(){
        anime({
            targets: '.durakCard',
            opacity: 0,
            duration: 300,
            easing: 'easeInOutSine'
        });
    },

    slideInIgf(){
        anime({
            targets: '.igfCard',
            opacity: 1,
            duration: 300,
            easing: 'easeInOutSine'
        });

        anime({
            targets: '.igfCard',
            translateX:  800, 
            direction: 'reverse',
            duration: 300,
            easing: 'easeInOutSine'
        });
    },

    slideOutIgf(){
        anime({
            targets: '.igfCard',
            opacity: 0,
            duration: 300,
            easing: 'easeInOutSine'
        });
    },

    fadeInTitle(){
        anime({
            targets: '.name_tag_proLinks, #arrow1, #arrow2',
            opacity: 1,
            duration: 800,
            easing: 'easeInOutSine'
        });
    },

    fadeOutTitle(){
        anime({
            targets: '.name_tag_proLinks, #arrow1, #arrow2',
            opacity: 0,
            duration: 300,
            easing: 'easeInOutSine'
        });
    }

}


export default Animate