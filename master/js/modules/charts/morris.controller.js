/**=========================================================
 * Module: morris.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartMorrisController', ChartMorrisController);

    ChartMorrisController.$inject = ['$scope', '$timeout', 'Colors'];
    function ChartMorrisController($scope, $timeout, Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            vm.chartdata = [
                { y: '91215', a: 503, b: 237, c: 45 },
                { y: '91315', a: 600, b: 300, c: 30 },
                { y: '91415', a: 708, b: 250, c: 25 },
                { y: '91515', a: 335, b: 350, c: 20 }
            ];

            function data(a,b,c) {
                var ret = [
                    { y: '91215', a: 503, b: 237, c: 45 },
                    { y: '91315', a: 600, b: 300, c: 30 },
                    { y: '91415', a: 708, b: 250, c: 25 },
                    { y: '91515', a: 335, b: 350, c: 20 }
                ];

                if(a==false)
                {

                    for(var i = 0; i < ret.length; i++)
                        delete ret[i].a;
                }
                if(b==false)
                {

                    for(var i = 0; i < ret.length; i++)
                        delete ret[i].b;
                }
                if(c==false)
                {

                    for(var i = 0; i < ret.length; i++)
                        delete ret[i].c;
                }
                return ret;
            };


             //$timeout(function(){
             //vm.chartdata[0].a = 50;
             //vm.chartdata[0].b = 50;
             //vm.chartdata[0].c = 50;
             //}, 3000);

            vm.donutdata = [
                {label: 'Download Sales', value: 12},
                {label: 'In-Store Sales',value: 30},
                {label: 'Mail-Order Sales', value: 20}
            ];

            vm.donutOptions = {
                Colors: [ Colors.byName('danger'), Colors.byName('yellow'), Colors.byName('warning') ],
                resize: true
            };

            vm.barOptions = {
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Series A', 'Series B'],
                xLabelMargin: 2,
                barColors: [ Colors.byName('info'), Colors.byName('danger') ],
                resize: true
            };

            vm.lineOptions = {
                data: data(),
                xkey: 'y',
                ykeys: ['a', 'b', 'c'],
                labels: ['Impressions', 'Clicks', 'CTR'],
                lineColors: ['#0600FF', '#76B322', '#FF5700'],
                resize: true
            };

            vm.areaOptions = {
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Serie A', 'Serie B'],
                lineColors: [ Colors.byName('purple'), Colors.byName('info') ],
                resize: true
            };
            $scope.updateToggle = function() {
                console.log("made it");
                var isChecked1 = $('#impressions').is(':checked');
                var isChecked2 = $('#clicks').is(':checked');
                var isChecked3 = $('#ctr').is(':checked');
                vm.chartdata = (data(isChecked1,isChecked2,isChecked3));
            }
        }
    }
})();
