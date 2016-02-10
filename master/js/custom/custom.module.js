(function() {
    'use strict';

    angular
        .module('custom', [
            // request the the entire framework
            'mentor',
            // or just modules
            'app.core',
            'app.sidebar'
            /*...*/
        ]);
})();