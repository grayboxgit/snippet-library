/*!
 * 
 * Angle - Bootstrap Admin App + AngularJS
 * 
 * Version: 3.2.0
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 * 
 */

// APP START
// ----------------------------------- 

(function() {
    'use strict';

    angular
        .module('mentor', [
            'app.core',
            'app.routes',
            'app.navsearch',
            'app.preloader',
            'app.loadingbar',
            'app.translate',
            'app.settings',
            'app.dashboard',
            'app.icons',
            'app.notify',
            'app.bootstrapui',
            'app.elements',
            'app.charts',
            'app.forms',
            'app.locale',
            'app.pages',
            'app.tables',
            'app.utils'
        ]);
})();

