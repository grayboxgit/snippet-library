(function() {
    'use strict';

    angular
        .module('custom', [
            // request the the entire framework
            'graybox',
            // or just modules
            'app.core',
            'app.sidebar'
            /*...*/
        ]);
})();