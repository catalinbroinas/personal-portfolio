import '../scss/main.scss';

import { Ripple, Dropdown, Collapse, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

function MainDomManager() {
    const initApp = () => {
        initMDB({ Ripple, Dropdown, Collapse });
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
