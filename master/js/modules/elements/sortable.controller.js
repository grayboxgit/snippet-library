/**=========================================================
 * Module: sortable.js
 * Sortable controller
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.elements')
        .directive('prism', [function() {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                element.ready(function() {
                    Prism.highlightElement(element[0]);
                });
            }
        }
    }])
        .controller('SortableController', SortableController);
    SortableController.$inject = ['$scope'];
    function SortableController($scope) {
        var vm = this;

        activate();

        function activate() {

            angular.element(document).ready(function () {

                //Base Functionality for off-canvas sidebar
                $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
                    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
                    e.preventDefault();
                });

            });

        }
    }

})();
