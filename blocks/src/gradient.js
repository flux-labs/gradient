'use strict';

import gradient from '../../src/gradient.js';

function run(colors, values) {
    return {
        colors: gradient(colors, values)
    };
}

export default {
    run: run
}