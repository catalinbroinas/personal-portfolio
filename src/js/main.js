import '../scss/main.scss';

import { Ripple, Carousel, Modal, initMDB, } from 'mdb-ui-kit/js/mdb.es.min.js';

function MainDomManager() {
    const setupCarousel = () => {
        const introCarousel = document.querySelector('#intro-carousel');
        const carousel = new Carousel(introCarousel, {
            ride: false,
        });

        const next = introCarousel.querySelector('.carousel-control-next');
        const prev = introCarousel.querySelector('.carousel-control-prev');

        carousel.cycle();

        introCarousel.addEventListener('mouseenter', () => {
            carousel.pause();
        });

        introCarousel.addEventListener('mouseleave', () => {
            carousel.cycle();
        });

        next.addEventListener('click', () => {
            carousel.pause();
        });

        prev.addEventListener('click', () => {
            carousel.pause();
        });
    };

    const initApp = () => {
        initMDB({ Ripple, Carousel });
        setupCarousel();
        initMDB({ Modal });
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
