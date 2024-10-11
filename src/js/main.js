import '../scss/main.scss';

import { Ripple, Carousel, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

function MainDomManager() {
    const initApp = () => {
        initMDB({ Ripple, Carousel });
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
