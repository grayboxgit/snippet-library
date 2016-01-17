'use strict';

/* Directives */


//angular.module('myApp.directives', []).
//  directive('appVersion', ['version', function(version) {
//    return function(scope, elm, attrs) {
//      elm.text(version);
//    };
//  }]);
angular.module('myApp.directives', [])
    .directive('ngPrism',['$interpolate', function ($interpolate) {
        "use strict";
        return {
            restrict: 'E',
            template: '<pre><code ng-transclude></code></pre>',
            replace:true,
            transclude:true
        };
    }]);