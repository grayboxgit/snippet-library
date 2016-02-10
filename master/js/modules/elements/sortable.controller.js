/**=========================================================
 * Module: sortable.js
 * Sortable controller
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('SortableController', SortableController);
    SortableController.$inject = ['$scope', '$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder', '$http', 'filterFilter'];
    function SortableController($scope, $resource, DTOptionsBuilder, DTColumnDefBuilder, filterFilter) {
        var vm = this;

        activate();

        function activate() {


            $resource('server/datatable.json').query().$promise.then(function(resources) {
                vm.resources = resources;
            });
            $resource('server/datatable2.json').query().$promise.then(function(activities) {
                vm.activities = activities;
            });

            //vm.dtOptions = DTOptionsBuilder.newOptions().withDOM('C<"clear">lfrtip');
            vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
            vm.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0).notSortable(),
                DTColumnDefBuilder.newColumnDef(1).notSortable(),
                DTColumnDefBuilder.newColumnDef(2).notSortable()
            ];
            vm.person = {};
            vm.people = [
                { name: 'Adam',      email: 'adam@email.com',      age: 10 },
                { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
                { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
                { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
                { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
                { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
                { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
                { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
            ];
          
          $scope.sortableOptions = {
              sort: true,
              ghostClass: "sortable-ghost",  // Class name for the drop placeholder
              chosenClass: "sortable-chosen",  // Class name for the chosen item
              dataIdAttr: 'data-id',
              animation: 150,
              placeholder: '<div class="box-placeholder p0 m0"><div></div></div>',
              forcePlaceholderSize: true
          };
            // Auto TypeAhead Main Search

            $scope.selectedUser = '';

            var users = [{
                name: 'Test user1',
                group: 1
            }, {
                name: 'Test user2',
                group: 1
            }, {
                name: 'Test user3',
                group: 1
            }, {
                name: 'Test user1',
                group: 2
            }, {
                name: 'Test user3',
                group: 2
            }
            ];

            //High Charts
            $scope.chartTypes = [
                {"id": "line", "title": "Line"},
                {"id": "spline", "title": "Smooth line"},
                {"id": "area", "title": "Area"},
                {"id": "areaspline", "title": "Smooth area"},
                {"id": "column", "title": "Column"},
                {"id": "bar", "title": "Bar"},
                {"id": "pie", "title": "Pie"},
                {"id": "scatter", "title": "Scatter"}
            ];

            $scope.dashStyles = [
                {"id": "Solid", "title": "Solid"},
                {"id": "ShortDash", "title": "ShortDash"},
                {"id": "ShortDot", "title": "ShortDot"},
                {"id": "ShortDashDot", "title": "ShortDashDot"},
                {"id": "ShortDashDotDot", "title": "ShortDashDotDot"},
                {"id": "Dot", "title": "Dot"},
                {"id": "Dash", "title": "Dash"},
                {"id": "LongDash", "title": "LongDash"},
                {"id": "DashDot", "title": "DashDot"},
                {"id": "LongDashDot", "title": "LongDashDot"},
                {"id": "LongDashDotDot", "title": "LongDashDotDot"}
            ];

            $scope.chartSeries = [
                {"name": "Some data", "data": [1, 2, 4, 7, 3]},
                {"name": "Some data 3", "data": [3, 1, null, 5, 2], connectNulls: true},
                {"name": "Some data 2", "data": [5, 2, 2, 3, 5], type: "column"},
                {"name": "My Super Column", "data": [1, 1, 2, 3, 2], type: "column"}
            ];

            $scope.chartStack = [
                {"id": '', "title": "No"},
                {"id": "normal", "title": "Normal"},
                {"id": "percent", "title": "Percent"}
            ];

            $scope.chartConfig = {
                options: {
                    chart: {
                        type: 'areaspline'
                    },
                    plotOptions: {
                        series: {
                            stacking: ''
                        }
                    }
                },
                series: $scope.chartSeries,
                title: {
                    text: 'Hello'
                },
                credits: {
                    enabled: true
                },
                loading: false,
                size: {}
            }


            $scope.getUsers = function (search) {
                var filtered = filterFilter(users, search);

                var results = _(filtered)
                    .groupBy('group')
                    .map(function (g) {
                        g[0].firstInGroup = true;  // the first item in each group
                        return g;
                    })
                    .flatten()
                    .value();

                console.log(results);

                return results;
            }

            // Multiple
            vm.someGroupFn = function (item){

                if (item.name[0] >= 'A' && item.name[0] <= 'M')
                    return 'From A - M';

                if (item.name[0] >= 'N' && item.name[0] <= 'Z')
                    return 'From N - Z';

            };



            $scope.addPoints = function () {
                var seriesArray = $scope.chartConfig.series;
                var rndIdx = Math.floor(Math.random() * seriesArray.length);
                seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
            };

            $scope.addSeries = function () {
                var rnd = []
                for (var i = 0; i < 10; i++) {
                    rnd.push(Math.floor(Math.random() * 20) + 1)
                }
                $scope.chartConfig.series.push({
                    data: rnd
                })
            }

            $scope.removeRandomSeries = function () {
                var seriesArray = $scope.chartConfig.series;
                var rndIdx = Math.floor(Math.random() * seriesArray.length);
                seriesArray.splice(rndIdx, 1)
            }

            $scope.removeSeries = function (id) {
                var seriesArray = $scope.chartConfig.series;
                seriesArray.splice(id, 1)
            }

            $scope.toggleHighCharts = function () {
                this.chartConfig.useHighStocks = !this.chartConfig.useHighStocks
            }

            $scope.replaceAllSeries = function () {
                var data = [
                    { name: "first", data: [10] },
                    { name: "second", data: [3] },
                    { name: "third", data: [13] }
                ];
                $scope.chartConfig.series = data;
            };


            $scope.reflow = function () {
                $scope.$broadcast('highchartsng.reflow');
            };

        }
    }

})();
