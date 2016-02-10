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
                resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl', 'bs-collapse', 'angular-animate', 'localytics.directives', 'datatables', 'htmlSortable', 'sortable-table', 'ngDialog', 'ui.select', 'inputmask', 'highcharts-ng', 'custom')
            })
            .state('app.dashboard', {
                url: '/dashboard',
                title: 'Dashboard',
                templateUrl: helper.basepath('dashboard.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.product-listing', {
                url: '/products',
                title: 'Products',
                templateUrl: helper.basepath('product-listing.html'),
                controller: 'SortableController',
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins', 'morris')
            })
            .state('app.product-detail', {
                url: '/product-detail',
                title: 'Product Details',
                templateUrl: helper.basepath('product-detail.html'),
                controller: 'SortableController',
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins', 'morris')
            })
            .state('app.resource-listing', {
                url: '/resources',
                title: 'Resources',
                templateUrl: helper.basepath('resource-listing.html'),
                controller: 'SortableController',
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins', 'morris')
            })
            .state('app.resource-detail', {
                url: '/resource-detail',
                title: 'Resource Details',
                templateUrl: helper.basepath('resource-detail.html'),
                controller: 'SortableController',
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins', 'morris')
            })
            .state('app.product-detail-activity', {
                url: '/product-detail/activity-feed',
                title: 'Product Details - Activity Feed',
                templateUrl: helper.basepath('product-detail-activity.html'),
                controller: 'SortableController',
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins', 'morris')
            })
            .state('app.buttons', {
                url: '/buttons',
                title: 'Buttons',
                templateUrl: helper.basepath('buttons.html')
            })
            .state('app.infinite-scroll', {
                url: '/infinite-scroll',
                title: 'Infinite Scroll',
                templateUrl: helper.basepath('infinite-scroll.html'),
                resolve: helper.resolveFor('infinite-scroll')
            })
            .state('app.sortable', {
                url: '/sortable',
                title: 'Sortable',
                templateUrl: helper.basepath('sortable.html'),
                resolve: helper.resolveFor('htmlSortable')
            })
            .state('app.notifications', {
                url: '/notifications',
                title: 'Notifications',
                templateUrl: helper.basepath('notifications.html')
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
            .state('app.sweetalert', {
                url: '/sweetalert',
                title: 'SweetAlert',
                templateUrl: helper.basepath('sweetalert.html'),
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.typo', {
                url: '/typo',
                title: 'Typo',
                templateUrl: helper.basepath('typo.html')
            })
            .state('app.icons-font', {
                url: '/icons-font',
                title: 'Icons Font',
                templateUrl: helper.basepath('icons-font.html'),
                resolve: helper.resolveFor('icons')
            })
            .state('app.product-details', {
                url: '/product-details',
                title: 'Product Details',
                templateUrl: helper.basepath('product-details.html'),
                resolve: helper.resolveFor('angular-dc')
            })

            .state('app.search', {
                url: '/search',
                title: 'Search',
                templateUrl: helper.basepath('search.html'),
                resolve: helper.resolveFor('moment', 'localytics.directives', 'ui.bootstrap-slider')
            })
            .state('app.template', {
                url: '/template',
                title: 'Blank Template',
                templateUrl: helper.basepath('template.html')
            })

            // Single Page Routes
            // -----------------------------------
            .state('page', {
                url: '/page',
                templateUrl: 'app/pages/page.html',
                resolve: helper.resolveFor('modernizr', 'icons'),
                controller: ['$rootScope', function ($rootScope) {
                    $rootScope.app.layout.isBoxed = false;
                }]
            })
            .state('page.login', {
                url: '/login',
                title: 'Login',
                templateUrl: 'app/pages/login.html'
            })
            .state('page.register', {
                url: '/register',
                title: 'Register',
                templateUrl: 'app/pages/register.html'
            })
            .state('page.recover', {
                url: '/recover',
                title: 'Recover',
                templateUrl: 'app/pages/recover.html'
            })
            .state('page.lock', {
                url: '/lock',
                title: 'Lock',
                templateUrl: 'app/pages/lock.html'
            })
            .state('page.404', {
                url: '/404',
                title: 'Not Found',
                templateUrl: 'app/pages/404.html'
            })
            //
            // Horizontal layout
            // -----------------------------------
            .state('app-h', {
                url: '/app-h',
                abstract: true,
                templateUrl: helper.basepath('app-h.html'),
                resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
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

