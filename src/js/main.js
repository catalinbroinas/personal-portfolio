import '../scss/main.scss';

import { Ripple, Carousel, Modal, initMDB, } from 'mdb-ui-kit/js/mdb.es.min.js';

function MainDomManager() {
    const getCarouselElements = () => {
        const introCarousel = document.querySelector('#intro-carousel');
        if (!introCarousel) {
            console.error('Carousel is missing.');
            return null;
        }

        const next = introCarousel.querySelector('.carousel-control-next');
        const prev = introCarousel.querySelector('.carousel-control-prev');
        if (!next || !prev) {
            console.error('Carousel controls are missing.');
            return null;
        }

        return { introCarousel, next, prev };
    };

    // Stop the carousel when the user hovers over it
    const setupCarousel = () => {
        const elements = getCarouselElements();
        if (!elements) return;

        const { introCarousel, next, prev } = elements;
        const carousel = new Carousel(introCarousel, {
            ride: false,
        });

        carousel.cycle();

        introCarousel.addEventListener('mouseenter', () => carousel.pause());
        introCarousel.addEventListener('mouseleave', () => carousel.cycle());
        next.addEventListener('click', () => carousel.pause());
        prev.addEventListener('click', () => carousel.pause());
    };

    const scrollToMyProjects = () => {
        const seeMyProjects = document.querySelector('#see-projects-btn');
        const sectionTarget = document.querySelector('#projects');

        seeMyProjects.addEventListener('click', () => {
            setTimeout(() => {
                sectionTarget.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        });
    };

    const initApp = () => {
        initMDB({ Ripple, Carousel, Modal });
        setupCarousel();
        scrollToMyProjects();
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
