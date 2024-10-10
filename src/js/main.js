import '../scss/main.scss';

import { Ripple, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

function MainDomManager() {
    const initApp = () => {
        initMDB({ Ripple });
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
