/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function () {
    'use strict';

    angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper) {

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/app/dashboard');

        //
        // Application Routes
        // -----------------------------------
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: helper.basepath('app.html'),
                resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl', 'bs-collapse', 'angular-animate', 'ngDialog', 'ui.select', 'inputmask', 'clipboard', 'ngclipboard', 'prismjs', 'custom')
            })
            .state('app.dashboard', {
                url: '/dashboard',
                title: 'Dashboard',
                templateUrl: helper.basepath('dashboard.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.accordions-tabs', {
                url: '/accordions-tabs',
                title: 'Accordions / Tabs',
                templateUrl: helper.basepath('accordions-tabs.html')
            })
            .state('app.device', {
                url: '/device',
                title: 'Device',
                templateUrl: helper.basepath('device.html')
            })
            .state('app.flex-boxes', {
                url: '/flex-boxes',
                title: 'Flex Boxes',
                templateUrl: helper.basepath('flex-boxes.html')
            })
            .state('app.grid-items', {
                url: '/grid-items',
                title: 'Grid Items',
                templateUrl: helper.basepath('grid-items.html')
            })
            .state('app.maps', {
                url: '/maps',
                title: 'Maps',
                templateUrl: helper.basepath('maps.html')
            })
            .state('app.navigation', {
                url: '/navigation',
                title: 'Navigation',
                templateUrl: helper.basepath('navigation.html')
            })
            .state('app.search', {
                url: '/search',
                title: 'Search',
                templateUrl: helper.basepath('search.html')
            })
            .state('app.tables', {
                url: '/tables',
                title: 'Tables',
                templateUrl: helper.basepath('tables.html')
            })
            .state('app.forms', {
                url: '/forms',
                title: 'Form',
                templateUrl: helper.basepath('forms.html')
            })

            .state('app.sortable', {
                url: '/sortable',
                title: 'Sortable',
                templateUrl: helper.basepath('sortable.html'),
                resolve: helper.resolveFor('htmlSortable')
            })
            .state('app.ngdialog', {
                url: '/ngdialog',
                title: 'ngDialog',
                templateUrl: helper.basepath('ngdialog.html'),
                resolve: angular.extend(helper.resolveFor('ngDialog'), {
                    tpl: function () {
                        return {path: helper.basepath('ngdialog-template.html')};
                    }
                }),
                controller: 'DialogIntroCtrl'
            })
            .state('page', {
                url: '/page',
                templateUrl: helper.basepath('page.html')
            })
            //
            // CUSTOM RESOLVES
            //   Add your own resolves properties
            //   following this object extend
            //   method
            // -----------------------------------
            // .state('app.someroute', {
            //   url: '/some_url',
            //   templateUrl: 'path_to_template.html',
            //   controller: 'someController',
            //   resolve: angular.extend(
            //     helper.resolveFor(), {
            //     // YOUR RESOLVES GO HERE
            //     }
            //   )
            // })
        ;

    } // routesConfig

})();

