/*!
 * 
 * GRAYBOX - Snippet Library
 *
 */

// APP START
// ----------------------------------- 

(function() {
    'use strict';

    angular
        .module('graybox', [
            'app.core',
            'app.routes',
            'app.preloader',
            'app.loadingbar',
            'app.translate',
            'app.settings',
            'app.dashboard',
            'app.icons',
            'app.bootstrapui',
            'app.elements',
            'app.forms',
            'app.locale',
            'app.pages',
            'app.tables',
            'app.utils'
        ]);
})();
(function() {
    'use strict';

    angular
        .module('app.bootstrapui', []);
})();
(function() {
    'use strict';

    angular
        .module('app.colors', []);
})();
(function() {
    'use strict';

    angular
        .module('app.dashboard', []);
})();
(function() {
    'use strict';

    angular
        .module('app.core', [
            'ngRoute',
            'ngAnimate',
            'ngStorage',
            'ngCookies',
            'pascalprecht.translate',
            'ui.bootstrap',
            'ui.router',
            'oc.lazyLoad',
            'cfp.loadingBar',
            'ngSanitize',
            'ngResource',
            'tmh.dynamicLocale',
            'ui.utils'
        ]);
})();
(function() {
    'use strict';

    angular
        .module('app.lazyload', []);
})();
(function() {
    'use strict';

    angular
        .module('app.forms', []);
})();
(function() {
    'use strict';

    angular
        .module('app.icons', []);
})();
(function() {
    'use strict';

    angular
        .module('app.elements', []);
})();
(function() {
    'use strict';

    angular
        .module('app.loadingbar', []);
})();
(function() {
    'use strict';

    angular
        .module('app.pages', []);
})();
(function() {
    'use strict';

    angular
        .module('app.locale', []);
})();
(function() {
    'use strict';

    angular
        .module('app.routes', [
            'app.lazyload'
        ]);
})();
(function() {
    'use strict';

    angular
        .module('app.preloader', []);
})();


(function() {
    'use strict';

    angular
        .module('app.tables', []);
})();
(function() {
    'use strict';

    angular
        .module('app.settings', []);
})();
(function() {
    'use strict';

    angular
        .module('app.translate', []);
})();
(function() {
    'use strict';

    angular
        .module('app.utils', [
          'app.colors'
          ]);
})();

(function() {
    'use strict';
    angular
        .module('app.zeroclipboard', []).config(['uiZeroclipConfigProvider', function(uiZeroclipConfigProvider) {

        // config ZeroClipboard
        uiZeroclipConfigProvider.setZcConf({
            swfPath: '../bower_components/zeroclipboard/dist/ZeroClipboard.swf'
        });

    }]);
})();



/**=========================================================
 * Module: demo-alerts.js
 * Provides a simple demo for pagination
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('AlertDemoCtrl', AlertDemoCtrl);

    function AlertDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'warning', msg: 'Well done! You successfully read this important alert message.' }
          ];

          vm.addAlert = function() {
            vm.alerts.push({msg: 'Another alert!'});
          };

          vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
          };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .config(bootstrapuiConfig);

    bootstrapuiConfig.$inject = ['$uibTooltipProvider'];
    function bootstrapuiConfig($uibTooltipProvider){
      $uibTooltipProvider.options({appendToBody: true});
    }
})();
/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ButtonsCtrl', ButtonsCtrl);

    function ButtonsCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.singleModel = 1;

          vm.radioModel = 'Middle';

          vm.checkModel = {
            left: false,
            middle: true,
            right: false
          };
        }
    }
})();

/**=========================================================
 * Module: demo-carousel.js
 * Provides a simple demo for bootstrap ui carousel
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('CarouselDemoCtrl', CarouselDemoCtrl);

    function CarouselDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.myInterval = 5000;

          var slides = vm.slides = [];
          vm.addSlide = function(id) {
            id = id || 8;
            slides.push({
              image: 'app/img/bg' + id + '.jpg',
              text: ['More','Extra','Lots of','Surplus'][slides.length % 2] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 2]
            });
          };

          vm.addSlide(4);
          vm.addSlide(7);
          vm.addSlide(8);

        }
    }
})();

/**=========================================================
 * Module: demo-datepicker.js
 * Provides a simple demo for bootstrap datepicker
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('DatepickerDemoCtrl', DatepickerDemoCtrl);

    function DatepickerDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.today = function() {
            vm.dt = new Date();
          };
          vm.today();

          vm.clear = function () {
            vm.dt = null;
          };

          // Disable weekend selection
          vm.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
          };

          vm.toggleMin = function() {
            vm.minDate = vm.minDate ? null : new Date();
          };
          vm.toggleMin();

          vm.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = true;
          };

          vm.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
          };

          vm.initDate = new Date('2019-10-20');
          vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
          vm.format = vm.formats[0];
        }
    }
})();


/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$uibModal'];
    function ModalController($uibModal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: '/myModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });

            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };

          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance'];
          function ModalInstanceCtrl($scope, $uibModalInstance) {

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          }
        }
    }

})();

/**=========================================================
 * Module: demo-pagination.js
 * Provides a simple demo for pagination
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PaginationDemoCtrl', PaginationDemoCtrl);

    function PaginationDemoCtrl() {
        var vm = this;


        activate();

        ////////////////

        function activate() {
          vm.totalItems = 64;
          vm.currentPage = 4;

          vm.setPage = function (pageNo) {
            vm.currentPage = pageNo;
          };

          vm.pageChanged = function() {
            console.log('Page changed to: ' + vm.currentPage);
          };

          vm.maxSize = 5;
          vm.bigTotalItems = 175;
          vm.bigCurrentPage = 1;
        }
    }
})();

/**=========================================================
 * Module: demo-popover.js
 * Provides a simple demo for popovers
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PopoverDemoCtrl', PopoverDemoCtrl);

    function PopoverDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.dynamicPopover = 'Hello, World!';
          vm.dynamicPopoverTitle = 'Title';
        }
    }
})();

/**=========================================================
 * Module: demo-progress.js
 * Provides a simple demo to animate progress bar
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ProgressDemoCtrl', ProgressDemoCtrl);

    function ProgressDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.max = 200;

          vm.random = function() {
            var value = Math.floor((Math.random() * 100) + 1);
            var type;

            if (value < 25) {
              type = 'success';
            } else if (value < 50) {
              type = 'info';
            } else if (value < 75) {
              type = 'warning';
            } else {
              type = 'danger';
            }

            vm.showWarning = (type === 'danger' || type === 'warning');

            vm.dynamic = value;
            vm.type = type;
          };
          vm.random();

          vm.randomStacked = function() {
            vm.stacked = [];
            var types = ['success', 'info', 'warning', 'danger'];

            for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
                var index = Math.floor((Math.random() * 4));
                vm.stacked.push({
                  value: Math.floor((Math.random() * 30) + 1),
                  type: types[index]
                });
            }
          };
          vm.randomStacked();
        }
    }
})();

/**=========================================================
 * Module: demo-rating.js
 * Provides a demo for ratings UI
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('RatingDemoCtrl', RatingDemoCtrl);

    function RatingDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.rate = 7;
          vm.max = 10;
          vm.isReadonly = false;

          vm.hoveringOver = function(value) {
            vm.overStar = value;
            vm.percent = 100 * (value / vm.max);
          };

          vm.ratingStates = [
            {stateOn: 'fa fa-check', stateOff: 'fa fa-check-circle'},
            {stateOn: 'fa fa-star', stateOff: 'fa fa-star-o'},
            {stateOn: 'fa fa-heart', stateOff: 'fa fa-ban'},
            {stateOn: 'fa fa-heart'},
            {stateOff: 'fa fa-power-off'}
          ];
        }
    }
})();

/**=========================================================
 * Module: demo-timepicker.js
 * Provides a simple demo for bootstrap ui timepicker
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TimepickerDemoCtrl', TimepickerDemoCtrl);

    function TimepickerDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.mytime = new Date();

          vm.hstep = 1;
          vm.mstep = 15;

          vm.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
          };

          vm.ismeridian = true;
          vm.toggleMode = function() {
            vm.ismeridian = ! vm.ismeridian;
          };

          vm.update = function() {
            var d = new Date();
            d.setHours( 14 );
            d.setMinutes( 0 );
            vm.mytime = d;
          };

          vm.changed = function () {
            console.log('Time changed to: ' + vm.mytime);
          };

          vm.clear = function() {
            vm.mytime = null;
          };
        }
    }
})();

/**=========================================================
 * Module: demo-tooltip.js
 * Provides a simple demo for tooltip
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TooltipDemoCtrl', TooltipDemoCtrl);

    function TooltipDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.dynamicTooltip = 'Hello, World!';
          vm.dynamicTooltipText = 'dynamic';
          vm.htmlTooltip = 'I\'ve been made <b>bold</b>!';

          vm.autoplace = function (context, source) {
            //return (predictTooltipTop(source) < 0) ?  "bottom": "top";
            var pos = 'top';
            if(predictTooltipTop(source) < 0)
              pos = 'bottom';
            if(predictTooltipLeft(source) < 0)
              pos = 'right';
            return pos;
          };

            // Predicts tooltip top position 
            // based on the trigger element
            function predictTooltipTop(el) {
              var top = el.offsetTop;
              var height = 40; // asumes ~40px tooltip height

              while(el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
              }
              return (top - height) - (window.pageYOffset);
            }

            // Predicts tooltip top position 
            // based on the trigger element
            function predictTooltipLeft(el) {
              var left = el.offsetLeft;
              var width = el.offsetWidth;

              while(el.offsetParent) {
                el = el.offsetParent;
                left += el.offsetLeft;
              }
              return (left - width) - (window.pageXOffset);
            }
        }
    }
})();

/**=========================================================
 * Module: demo-typeahead.js
 * Provides a simple demo for typeahead
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TypeaheadCtrl', TypeaheadCtrl);

    TypeaheadCtrl.$inject = ['$http'];
    function TypeaheadCtrl($http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.selected = undefined;
          vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

          // Any function returning a promise object can be used to load values asynchronously
          vm.getLocation = function(val) {
            return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
              params: {
                address: val,
                sensor: false
              }
            }).then(function(res){
              var addresses = [];
              angular.forEach(res.data.results, function(item){
                /*jshint -W106*/
                addresses.push(item.formatted_address);
              });
              return addresses;
            });
          };

          vm.statesWithFlags = [{'name':'Alabama','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Alaska','flag':'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},{'name':'Arizona','flag':'9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},{'name':'Arkansas','flag':'9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},{'name':'California','flag':'0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},{'name':'Colorado','flag':'4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},{'name':'Connecticut','flag':'9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},{'name':'Delaware','flag':'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},{'name':'Florida','flag':'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},{'name':'Georgia','flag':'5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'},{'name':'Hawaii','flag':'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},{'name':'Idaho','flag':'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},{'name':'Illinois','flag':'0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},{'name':'Indiana','flag':'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},{'name':'Iowa','flag':'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},{'name':'Kansas','flag':'d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},{'name':'Kentucky','flag':'8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},{'name':'Louisiana','flag':'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},{'name':'Maine','flag':'3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},{'name':'Maryland','flag':'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},{'name':'Massachusetts','flag':'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},{'name':'Michigan','flag':'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},{'name':'Minnesota','flag':'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},{'name':'Mississippi','flag':'4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},{'name':'Missouri','flag':'5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},{'name':'Montana','flag':'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},{'name':'Nebraska','flag':'4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},{'name':'Nevada','flag':'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},{'name':'New Hampshire','flag':'2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},{'name':'New Jersey','flag':'9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},{'name':'New Mexico','flag':'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},{'name':'New York','flag':'1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},{'name':'North Carolina','flag':'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},{'name':'North Dakota','flag':'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},{'name':'Ohio','flag':'4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},{'name':'Oklahoma','flag':'6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},{'name':'Oregon','flag':'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},{'name':'Pennsylvania','flag':'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},{'name':'Rhode Island','flag':'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},{'name':'South Carolina','flag':'6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},{'name':'South Dakota','flag':'1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},{'name':'Tennessee','flag':'9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},{'name':'Texas','flag':'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},{'name':'Utah','flag':'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},{'name':'Vermont','flag':'4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},{'name':'Virginia','flag':'4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},{'name':'Washington','flag':'5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},{'name':'West Virginia','flag':'2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},{'name':'Wisconsin','flag':'2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},{'name':'Wyoming','flag':'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}];

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.colors')
        .constant('APP_COLORS', {
          'primary':                '#5d9cec',
          'success':                '#27c24c',
          'info':                   '#2E5790',
          'warning':                '#ff902b',
          'danger':                 '#f05050',
          'inverse':                '#131e26',
          'green':                  '#37bc9b',
          'pink':                   '#f532e5',
          'purple':                 '#7266ba',
          'dark':                   '#3a3f51',
          'yellow':                 '#fad732',
          'gray-darker':            '#232735',
          'gray-dark':              '#3a3f51',
          'gray':                   '#dde6e9',
          'gray-light':             '#e4eaec',
          'gray-lighter':           '#edf1f2'
        })
        ;
})();
/**=========================================================
 * Module: colors.js
 * Services to retrieve global colors
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.colors')
        .service('Colors', Colors);

    Colors.$inject = ['APP_COLORS'];
    function Colors(APP_COLORS) {
        this.byName = byName;

        ////////////////

        function byName(name) {
          return (APP_COLORS[name] || '#fff');
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'ChartData', '$timeout'];
    function DashboardController($scope, ChartData, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // SPLINE
          // ----------------------------------- 
          vm.splineData = ChartData.load('server/chart/spline.json');
          vm.splineOptions = {
              series: {
                  lines: {
                      show: false
                  },
                  points: {
                      show: true,
                      radius: 4
                  },
                  splines: {
                      show: true,
                      tension: 0.4,
                      lineWidth: 1,
                      fill: 0.5
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 150, // optional: use it for a clear represetation
                  tickColor: '#eee',
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v/* + ' visitors'*/;
                  }
              },
              shadowSize: 0
          };


          // PANEL REFRESH EVENTS
          // ----------------------------------- 

          $scope.$on('panel-refresh', function(event, id) {
            
            console.log('Simulating chart refresh during 3s on #'+id);

            // Instead of timeout you can request a chart data
            $timeout(function(){
              
              // directive listen for to remove the spinner 
              // after we end up to perform own operations
              $scope.$broadcast('removeSpinner', id);
              
              console.log('Refreshed #' + id);

            }, 3000);

          });


          // PANEL DISMISS EVENTS
          // ----------------------------------- 

          // Before remove panel
          $scope.$on('panel-remove', function(event, id, deferred){
            
            console.log('Panel #' + id + ' removing');
            
            // Here is obligatory to call the resolve() if we pretend to remove the panel finally
            // Not calling resolve() will NOT remove the panel
            // It's up to your app to decide if panel should be removed or not
            deferred.resolve();
          
          });

          // Panel removed ( only if above was resolved() )
          $scope.$on('panel-removed', function(event, id){

            console.log('Panel #' + id + ' removed');

          });

        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardV2Controller', DashboardV2Controller);

    DashboardV2Controller.$inject = ['$rootScope', '$scope', '$state'];
    function DashboardV2Controller($rootScope, $scope, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          
          // Change layout mode
          if( $state.includes('app-h') ) {
            // Setup layout horizontal for demo
            $rootScope.app.layout.horizontal = true;
            $scope.$on('$destroy', function(){
                $rootScope.app.layout.horizontal = false;
            });            
          }
          else {
            $rootScope.app.layout.isCollapsed = true;
          }

          // BAR STACKED
          // ----------------------------------- 
          vm.barStackedOptions = {
              series: {
                  stack: true,
                  bars: {
                      align: 'center',
                      lineWidth: 0,
                      show: true,
                      barWidth: 0.6,
                      fill: 0.9
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 200, // optional: use it for a clear represetation
                  position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                  tickColor: '#eee'
              },
              shadowSize: 0
          };

          // SPLINE
          // ----------------------------------- 

          vm.splineOptions = {
              series: {
                  lines: {
                      show: false
                  },
                  points: {
                      show: true,
                      radius: 4
                  },
                  splines: {
                      show: true,
                      tension: 0.4,
                      lineWidth: 1,
                      fill: 0.5
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 150, // optional: use it for a clear represetation
                  tickColor: '#eee',
                  position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v/* + ' visitors'*/;
                  }
              },
              shadowSize: 0
          };
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.core')
        .config(coreConfig);

    coreConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$animateProvider'];
    function coreConfig($controllerProvider, $compileProvider, $filterProvider, $provide, $animateProvider){

      var core = angular.module('app.core');
      // registering components after bootstrap
      core.controller = $controllerProvider.register;
      core.directive  = $compileProvider.directive;
      core.filter     = $filterProvider.register;
      core.factory    = $provide.factory;
      core.service    = $provide.service;
      core.constant   = $provide.constant;
      core.value      = $provide.value;

      // Disables animation on items with class .ng-no-animation
      $animateProvider.classNameFilter(/^((?!(ng-no-animation)).)*$/);

    }

})();
/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('APP_MEDIAQUERY', {
          'desktopLG':             1200,
          'desktop':                992,
          'tablet':                 768,
          'mobile':                 480
        })
      ;

})();
(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    appRun.$inject = ['$rootScope', '$state', '$stateParams',  '$window', '$templateCache', 'Colors'];
    
    function appRun($rootScope, $state, $stateParams, $window, $templateCache, Colors) {
      
      // Set reference to access them from any scope
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.$storage = $window.localStorage;

      // Uncomment this to disable template cache
      /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          if (typeof(toState) !== 'undefined'){
            $templateCache.remove(toState.templateUrl);
          }
      });*/

      // Allows to use branding color with interpolation
      // {{ colorByName('primary') }}
      $rootScope.colorByName = Colors.byName;

      // cancel click event easily
      $rootScope.cancel = function($event) {
        $event.stopPropagation();
      };

      // Hooks Example
      // ----------------------------------- 

      // Hook not found
      $rootScope.$on('$stateNotFound',
        function(event, unfoundState/*, fromState, fromParams*/) {
            console.log(unfoundState.to); // "lazy.state"
            console.log(unfoundState.toParams); // {a:1, b:2}
            console.log(unfoundState.options); // {inherit:false} + default options
        });
      // Hook error
      $rootScope.$on('$stateChangeError',
        function(event, toState, toParams, fromState, fromParams, error){
          console.log(error);
        });
      // Hook success
      $rootScope.$on('$stateChangeSuccess',
        function(/*event, toState, toParams, fromState, fromParams*/) {
          // display new view from top
          $window.scrollTo(0, 0);
          // Save the route title
          $rootScope.currTitle = $state.current.title;
        });

      // Load a title dynamically
      $rootScope.currTitle = $state.current.title;
      $rootScope.pageTitle = function() {
        var title = $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
        document.title = title;
        return title;
      };      

    }

})();


(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .config(lazyloadConfig);

    lazyloadConfig.$inject = ['$ocLazyLoadProvider', 'APP_REQUIRES'];
    function lazyloadConfig($ocLazyLoadProvider, APP_REQUIRES){

      // Lazy Load modules configuration
      $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: APP_REQUIRES.modules
      });

    }
})();
(function () {
    'use strict';

    angular
        .module('app.lazyload')
        .constant('APP_REQUIRES', {
            // jQuery based and standalone scripts
            scripts: {
                'jquery': ['app/js/jquery.min.js'],
                'custom': ['app/js/custom.js'],
                'sortable-table': ['app/js/sortable-table.min.js'],
                'bs-collapse': ['app/js/bs-collapse.js'],
                'whirl': ['vendor/whirl/dist/whirl.css'],
                'classyloader': ['vendor/jquery-classyloader/js/jquery.classyloader.min.js'],
                'animo': ['vendor/animo.js/animo.js'],
                'fastclick': ['vendor/fastclick/lib/fastclick.js'],
                'modernizr': ['vendor/modernizr/modernizr.custom.js'],
                'animate': ['vendor/animate.css/animate.min.css'],
                'skycons': ['vendor/skycons/skycons.js'],
                'icons': ['vendor/fontawesome/css/font-awesome.min.css',
                    'vendor/simple-line-icons/css/simple-line-icons.css'],
                'weather-icons': ['vendor/weather-icons/css/weather-icons.min.css',
                    'vendor/weather-icons/css/weather-icons-wind.min.css'],
                'sparklines': ['vendor/sparkline/index.js'],
                'wysiwyg': ['vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                    'vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
                'slimscroll': ['vendor/slimScroll/jquery.slimscroll.min.js'],
                'screenfull': ['vendor/screenfull/dist/screenfull.js'],
                'vector-map': ['vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js',
                    'vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css'],
                'vector-map-maps': ['vendor/ika.jvectormap/jquery-jvectormap-world-mill-en.js',
                    'vendor/ika.jvectormap/jquery-jvectormap-us-mill-en.js'],
                'loadGoogleMapsJS': ['vendor/load-google-maps/load-google-maps.js'],
                'flot-chart': ['vendor/Flot/jquery.flot.js'],
                'flot-chart-plugins': ['vendor/flot.tooltip/js/jquery.flot.tooltip.min.js',
                    'vendor/Flot/jquery.flot.resize.js',
                    'vendor/Flot/jquery.flot.pie.js',
                    'vendor/Flot/jquery.flot.time.js',
                    'vendor/Flot/jquery.flot.categories.js',
                    'vendor/flot-spline/js/jquery.flot.spline.min.js'],
                // jquery core and widgets
                'jquery-ui': ['vendor/jquery-ui/ui/core.js',
                    'vendor/jquery-ui/ui/widget.js'],
                // loads only jquery required modules and touch support
                'jquery-ui-widgets': ['vendor/jquery-ui/ui/core.js',
                    'vendor/jquery-ui/ui/widget.js',
                    'vendor/jquery-ui/ui/mouse.js',
                    'vendor/jquery-ui/ui/draggable.js',
                    'vendor/jquery-ui/ui/droppable.js',
                    'vendor/jquery-ui/ui/sortable.js',
                    'vendor/jqueryui-touch-punch/jquery.ui.touch-punch.min.js'],
                'moment': ['vendor/moment/min/moment-with-locales.min.js'],
                'dc': ['vendor/dc/dc.js'],
                'inputmask': ['vendor/jquery.inputmask/dist/jquery.inputmask.bundle.js'],
                'flatdoc': ['vendor/flatdoc/flatdoc.js'],
                'codemirror': ['vendor/codemirror/lib/codemirror.js',
                    'vendor/codemirror/lib/codemirror.css'],
                // modes for common web files
                'codemirror-modes-web': ['vendor/codemirror/mode/javascript/javascript.js',
                    'vendor/codemirror/mode/xml/xml.js',
                    'vendor/codemirror/mode/htmlmixed/htmlmixed.js',
                    'vendor/codemirror/mode/css/css.js'],
                'taginput': ['vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
                    'vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js'],
                'filestyle': ['vendor/bootstrap-filestyle/src/bootstrap-filestyle.js'],
                'parsley': ['vendor/parsleyjs/dist/parsley.min.js'],
                'fullcalendar': ['vendor/fullcalendar/dist/fullcalendar.min.js',
                    'vendor/fullcalendar/dist/fullcalendar.css'],
                'gcal': ['vendor/fullcalendar/dist/gcal.js'],
                'chartjs': ['vendor/Chart.js/Chart.js'],
                'morris': ['vendor/raphael/raphael.js',
                    'vendor/morris.js/morris.js',
                    'vendor/morris.js/morris.css'],
                'crossfilter': ['vendor/crossfilter/crossfilter.js'],
                'colorbrewer': ['vendor/colorbrewer/colorbrewer.js'],
                'loaders.css': ['vendor/loaders.css/loaders.css'],
                'spinkit': ['vendor/spinkit/css/spinkit.css'],
                'prismjs': ['vendor/prismjs/prism.js'],
                'clipboard': ['master/node_modules/clipboard/dist/clipboard.min.js']
            },
            // Angular based script (use the right module name)
            modules: [
                {
                    name: 'angular-ui-bootstrap', files: ['vendor/angular-ui-bootstrap/dist/ui-bootstrap.js']
                },
                {
                    name: 'angular-animate', files: ['vendor/angular-animate/angular-animate.js']
                },
                {
                    name: 'angular-bootstrap', files: ['vendor/angular-bootstrap/ui-bootstrap.js',
                    'vendor/angular-bootstrap/ui-bootstrap-csp.css']
                },
                {
                    name: 'highcharts-ng', files: ['vendor/highcharts-ng/dist/highcharts-ng.js']
                },

                {
                    name: 'toaster', files: ['vendor/angularjs-toaster/toaster.js',
                    'vendor/angularjs-toaster/toaster.css']
                },
                {
                    name: 'localytics.directives', files: ['vendor/chosen_v1.2.0/chosen.jquery.min.js',
                    'vendor/chosen_v1.2.0/chosen.min.css',
                    'vendor/angular-chosen-localytics/chosen.js']
                },
                {
                    name: 'ngDialog', files: ['vendor/ngDialog/js/ngDialog.min.js',
                    'vendor/ngDialog/css/ngDialog.min.css',
                    'vendor/ngDialog/css/ngDialog-theme-default.min.css']
                },
                {name: 'ngWig', files: ['vendor/ngWig/dist/ng-wig.min.js']},
                {
                    name: 'ngTable', files: ['vendor/ng-table/dist/ng-table.min.js',
                    'vendor/ng-table/dist/ng-table.min.css']
                },
                {name: 'ngTableExport', files: ['vendor/ng-table-export/ng-table-export.js']},
                {
                    name: 'angularBootstrapNavTree',
                    files: ['vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                        'vendor/angular-bootstrap-nav-tree/dist/abn_tree.css']
                },
                {
                    name: 'htmlSortable', files: ['vendor/html.sortable/dist/html.sortable.js',
                    'vendor/html.sortable/dist/html.sortable.angular.js']
                },
                {
                    name: 'xeditable', files: ['vendor/angular-xeditable/dist/js/xeditable.js',
                    'vendor/angular-xeditable/dist/css/xeditable.css']
                },
                {name: 'angularFileUpload', files: ['vendor/angular-file-upload/dist/angular-file-upload.js']},
                {
                    name: 'ngImgCrop', files: ['vendor/ng-img-crop/compile/unminified/ng-img-crop.js',
                    'vendor/ng-img-crop/compile/unminified/ng-img-crop.css']
                },
                {
                    name: 'ui.select', files: ['vendor/angular-ui-select/dist/select.js',
                    'vendor/angular-ui-select/dist/select.css']
                },
                {name: 'ui.codemirror', files: ['vendor/angular-ui-codemirror/ui-codemirror.js']},
                {
                    name: 'angular-carousel', files: ['vendor/angular-carousel/dist/angular-carousel.css',
                    'vendor/angular-carousel/dist/angular-carousel.js']
                },
                {name: 'infinite-scroll', files: ['vendor/ngInfiniteScroll/build/ng-infinite-scroll.js']},
                {
                    name: 'ui.bootstrap-slider', files: ['vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
                    'vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css',
                    'vendor/angular-bootstrap-slider/slider.js']
                },
                {
                    name: 'ui.bootstrap-slider', files: ['vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
                    'vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css',
                    'vendor/angular-bootstrap-slider/slider.js']
                },
                {
                    name: 'ui.grid', files: ['vendor/angular-ui-grid/ui-grid.min.css',
                    'vendor/angular-ui-grid/ui-grid.min.js']
                },
                {
                    name: 'textAngular', files: ['vendor/textAngular/dist/textAngular.css',
                    'vendor/textAngular/dist/textAngular-rangy.min.js',
                    'vendor/textAngular/dist/textAngular-sanitize.js',
                    'vendor/textAngular/src/globals.js',
                    'vendor/textAngular/src/factories.js',
                    'vendor/textAngular/src/DOM.js',
                    'vendor/textAngular/src/validators.js',
                    'vendor/textAngular/src/taBind.js',
                    'vendor/textAngular/src/main.js',
                    'vendor/textAngular/dist/textAngularSetup.js'
                ], serie: true
                },
                {name: 'ui.map', files: ['vendor/angular-ui-map/ui-map.js']},
                {
                    name: 'datatables', files: ['vendor/datatables/media/css/jquery.dataTables.css',
                    'vendor/datatables/media/js/jquery.dataTables.js',
                    'vendor/angular-datatables/dist/angular-datatables.js'], serie: true
                },
                {
                    name: 'angular-jqcloud', files: ['vendor/jqcloud2/dist/jqcloud.css',
                    'vendor/jqcloud2/dist/jqcloud.js',
                    'vendor/angular-jqcloud/angular-jqcloud.js']
                },
                {
                    name: 'angularGrid', files: ['vendor/ag-grid/dist/ag-grid.css',
                    'vendor/ag-grid/dist/ag-grid.js',
                    'vendor/ag-grid/dist/theme-dark.css',
                    'vendor/ag-grid/dist/theme-fresh.css']
                },
                {
                    name: 'ng-nestable', files: ['vendor/ng-nestable/src/angular-nestable.js',
                    'vendor/nestable/jquery.nestable.js']
                },
                {name: 'akoenig.deckgrid', files: ['vendor/angular-deckgrid/angular-deckgrid.js']},
                {
                    name: 'oitozero.ngSweetAlert', files: ['vendor/sweetalert/dist/sweetalert.css',
                    'vendor/sweetalert/dist/sweetalert.min.js',
                    'vendor/angular-sweetalert/SweetAlert.js']
                },
                {
                    name: 'bm.bsTour', files: ['vendor/bootstrap-tour/build/css/bootstrap-tour.css',
                    'vendor/bootstrap-tour/build/js/bootstrap-tour-standalone.js',
                    'vendor/angular-bootstrap-tour/dist/angular-bootstrap-tour.js'], serie: true
                },
                {
                    name: 'ui.knob', files: ['vendor/angular-knob/src/angular-knob.js',
                    'vendor/jquery-knob/dist/jquery.knob.min.js']
                },
                {
                    name: 'ngclipboard', files: ['master/node_modules/ngclipboard/dist/ngclipboard.min.js']
                },
                {name: 'easypiechart', files: ['vendor/jquery.easy-pie-chart/dist/angular.easypiechart.min.js']},
                {
                    name: 'colorpicker.module', files: ['vendor/angular-bootstrap-colorpicker/css/colorpicker.css',
                    'vendor/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js']
                }
            ]
        })
    ;

})();

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('ColorPickerController', ColorPickerController);

    function ColorPickerController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
           vm.hexPicker = {
              color: ''
            };

            vm.rgbPicker = {
              color: ''
            };

            vm.rgbaPicker = {
              color: ''
            };

            vm.nonInput = {
              color: ''
            };

            vm.resetColor = function() {
              vm.hexPicker = {
                color: '#ff0000'
              };
            };

            vm.resetRBGColor = function() {
              vm.rgbPicker = {
                color: 'rgb(255,255,255)'
              };
            };

            vm.resetRBGAColor = function() {
              vm.rgbaPicker = {
                color: 'rgb(255,255,255, 0.25)'
              };
            };

            vm.resetNonInputColor = function() {
              vm.nonInput = {
                color: '#ffffff'
              };
            };
        }
    }
})();
/**=========================================================
 * Module: filestyle.js
 * Initializes the fielstyle plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('filestyle', filestyle);

    function filestyle () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var options = element.data();
          
          // old usage support
          options.classInput = element.data('classinput') || options.classInput;
          
          element.filestyle(options);
        }
    }

})();

/**=========================================================
 * Module: FormValidationController
 * Input validation with UI Validate
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormValidationController', FormValidationController);

    function FormValidationController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.notBlackListed = function(value) {
            var blacklist = ['some@mail.com','another@email.com'];
            return blacklist.indexOf(value) === -1;
          };

          vm.words = function(value) {
            return value && value.split(' ').length;
          };

          vm.submitted = false;
          vm.validateInput = function(name, type) {
            var input = vm.formValidate[name];
            return (input.$dirty || vm.submitted) && input.$error[type];
          };

          // Submit form
          vm.submitForm = function() {
            vm.submitted = true;
            if (vm.formValidate.$valid) {
              console.log('Submitted!!');
            } else {
              console.log('Not valid!!');
              return false;
            }
          };
        }
    }
})();

/**=========================================================
 * Module: form-wizard.js
 * Handles form wizard plugin and validation
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('formWizard', formWizard);

    formWizard.$inject = ['$parse'];
    function formWizard ($parse) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
          var validate = $parse(attrs.validateSteps)(scope),
              wiz = new Wizard(attrs.steps, !!validate, element);
          scope.wizard = wiz.init();
        }

        function Wizard (quantity, validate, element) {
          
          var self = this;
          self.quantity = parseInt(quantity,10);
          self.validate = validate;
          self.element = element;
          
          self.init = function() {
            self.createsteps(self.quantity);
            self.go(1); // always start at fist step
            return self;
          };

          self.go = function(step) {
            
            if ( angular.isDefined(self.steps[step]) ) {

              if(self.validate && step !== 1) {
                var form = $(self.element),
                    group = form.children().children('div').get(step - 2);

                if (false === form.parsley().validate( group.id )) {
                  return false;
                }
              }

              self.cleanall();
              self.steps[step] = true;
            }
          };

          self.active = function(step) {
            return !!self.steps[step];
          };

          self.cleanall = function() {
            for(var i in self.steps){
              self.steps[i] = false;
            }
          };

          self.createsteps = function(q) {
            self.steps = [];
            for(var i = 1; i <= q; i++) self.steps[i] = false;
          };

        }
    }


})();

/**=========================================================
 * Module: form-xeditable.js
 * Form xEditable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormxEditableController', FormxEditableController);

    FormxEditableController.$inject = ['$scope', 'editableOptions', 'editableThemes', '$filter', '$http'];
    function FormxEditableController($scope, editableOptions, editableThemes, $filter, $http) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {

          editableOptions.theme = 'bs3';

          editableThemes.bs3.inputClass = 'input-sm';
          editableThemes.bs3.buttonsClass = 'btn-sm';
          editableThemes.bs3.submitTpl = '<button type="submit" class="btn btn-success"><span class="fa fa-check"></span></button>';
          editableThemes.bs3.cancelTpl = '<button type="button" class="btn btn-default" ng-click="$form.$cancel()">'+
                                           '<span class="fa fa-times text-muted"></span>'+
                                         '</button>';

          vm.user = {
            email: 'email@example.com',
            tel: '123-45-67',
            number: 29,
            range: 10,
            url: 'http://example.com',
            search: 'blabla',
            color: '#6a4415',
            date: null,
            time: new Date(),
            datetime: null,
            month: null,
            week: null,
            desc: 'Sed pharetra euismod dolor, id feugiat ante volutpat eget. '
          };

          // Local select
          // ----------------------------------- 

          vm.user2 = {
            status: 2
          };

          vm.statuses = [
            {value: 1, text: 'status1'},
            {value: 2, text: 'status2'},
            {value: 3, text: 'status3'},
            {value: 4, text: 'status4'}
          ];

          vm.showStatus = function() {
            var selected = $filter('filter')(vm.statuses, {value: vm.user2.status});
            return (vm.user2.status && selected.length) ? selected[0].text : 'Not set';
          };

          // select remote
          // ----------------------------------- 

          vm.user3 = {
            id: 4,
            text: 'admin' // original value
          };

          vm.groups = [];

          vm.loadGroups = function() {
            return vm.groups.length ? null : $http.get('server/xeditable-groups.json').success(function(data) {
              vm.groups = data;
            });
          };

          $scope.$watch('user3.id', function(newVal, oldVal) {
            if (newVal !== oldVal) {
              var selected = $filter('filter')(vm.groups, {id: vm.user3.id});
              vm.user3.text = selected.length ? selected[0].text : null;
            }
          });

          // Typeahead
          // ----------------------------------- 

          vm.user4 = {
            state: 'Arizona'
          };

          vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormDemoCtrl', FormDemoCtrl);

    FormDemoCtrl.$inject = ['$resource'];
    function FormDemoCtrl($resource) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // the following allow to request array $resource instead of object (default)
          var actions = {'get': {method: 'GET', isArray: true}};
          
          // Tags inputs
          // ----------------------------------- 
          var Cities = $resource('server/cities.json', {}, actions);

          Cities.get(function(data){

              vm.cities = data;

          });
          // for non ajax form just fill the scope variable
          // vm.cities = ['Amsterdam','Washington','Sydney','Beijing','Cairo'];

          // Slider demo values
          vm.slider1 = 5;
          vm.slider2 = 10;
          vm.slider3 = 15;
          vm.slider4 = 20;
          vm.slider5 = 25;
          vm.slider6 = 30;
          vm.slider7 = 10;
          vm.slider8 = [250,750];

          // Chosen data
          // ----------------------------------- 

          var States = $resource('server/chosen-states.json', {},  {'query':    {method:'GET', isArray:true} });

          vm.states = States.query();


          vm.alertSubmit = function(){
            alert('Form submitted!');
            return false;
          };

          // Angular wysiwyg 
          // ----------------------------------- 

          vm.wysiwygContent = '<p> Write something here.. </p>';

          // Text Angular (wysiwyg)
          // ----------------------------------- 
          
          vm.htmlContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style="color: blue;">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><a href="https://github.com/fraywing/textAngular">Source</a> </p>';

        }
    }
})();

/**=========================================================
 * Module: masked,js
 * Initializes the masked inputs
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('masked', masked);

    function masked () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var $elem = $(element);
          if($.fn.inputmask)
            $elem.inputmask();
        }
    }

})();

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs a AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform a OR.
 */

(function() {
    'use strict';

    angular
        .module('app.forms')
        .filter('propsFilter', propsFilter);

    function propsFilter() {
        return filterFilter;

        ////////////////
        function filterFilter(items, props) {
          var out = [];

          if (angular.isArray(items)) {
            items.forEach(function(item) {
              var itemMatches = false;

              var keys = Object.keys(props);
              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                var text = props[prop].toLowerCase();
                if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                  itemMatches = true;
                  break;
                }
              }

              if (itemMatches) {
                out.push(item);
              }
            });
          } else {
            // Let the output be the input untouched
            out = items;
          }

          return out;
        }
    }

})();
/**=========================================================
 * Module: tags-input.js
 * Initializes the tag inputs plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('tagsinput', tagsinput);

    tagsinput.$inject = ['$timeout'];
    function tagsinput ($timeout) {
        var directive = {
            link: link,
            require: 'ngModel',
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
          element.on('itemAdded itemRemoved', function(){
            // check if view value is not empty and is a string
            // and update the view from string to an array of tags
            if(ngModel.$viewValue && ngModel.$viewValue.split) {
              ngModel.$setViewValue( ngModel.$viewValue.split(',') );
              ngModel.$render();
            }
          });

          $timeout(function(){
            element.tagsinput();
          });
        }
    }

})();

/**=========================================================
 * Module: uiselect.js
 * uiSelect controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('uiSelectController', uiSelectController);

    uiSelectController.$inject = ['$scope', '$http'];
    function uiSelectController($scope, $http) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.disabled = undefined;

          vm.enable = function() {
            vm.disabled = false;
          };

          vm.disable = function() {
            vm.disabled = true;
          };

          vm.clear = function() {
            vm.person.selected = undefined;
            vm.address.selected = undefined;
            vm.country.selected = undefined;
          };

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

          vm.address = {};
          vm.refreshAddresses = function(address) {
            var params = {address: address, sensor: false};
            return $http.get(
              '//maps.googleapis.com/maps/api/geocode/json',
              {params: params}
            ).then(function(response) {
              vm.addresses = response.data.results;
            });
          };

          vm.country = {};
          vm.countries = [ // Taken from https://gist.github.com/unceus/6501985
            {name: 'Afghanistan', code: 'AF'},
            {name: 'Åland Islands', code: 'AX'},
            {name: 'Albania', code: 'AL'},
            {name: 'Algeria', code: 'DZ'},
            {name: 'American Samoa', code: 'AS'},
            {name: 'Andorra', code: 'AD'},
            {name: 'Angola', code: 'AO'},
            {name: 'Anguilla', code: 'AI'},
            {name: 'Antarctica', code: 'AQ'},
            {name: 'Antigua and Barbuda', code: 'AG'},
            {name: 'Argentina', code: 'AR'},
            {name: 'Armenia', code: 'AM'},
            {name: 'Aruba', code: 'AW'},
            {name: 'Australia', code: 'AU'},
            {name: 'Austria', code: 'AT'},
            {name: 'Azerbaijan', code: 'AZ'},
            {name: 'Bahamas', code: 'BS'},
            {name: 'Bahrain', code: 'BH'},
            {name: 'Bangladesh', code: 'BD'},
            {name: 'Barbados', code: 'BB'},
            {name: 'Belarus', code: 'BY'},
            {name: 'Belgium', code: 'BE'},
            {name: 'Belize', code: 'BZ'},
            {name: 'Benin', code: 'BJ'},
            {name: 'Bermuda', code: 'BM'},
            {name: 'Bhutan', code: 'BT'},
            {name: 'Bolivia', code: 'BO'},
            {name: 'Bosnia and Herzegovina', code: 'BA'},
            {name: 'Botswana', code: 'BW'},
            {name: 'Bouvet Island', code: 'BV'},
            {name: 'Brazil', code: 'BR'},
            {name: 'British Indian Ocean Territory', code: 'IO'},
            {name: 'Brunei Darussalam', code: 'BN'},
            {name: 'Bulgaria', code: 'BG'},
            {name: 'Burkina Faso', code: 'BF'},
            {name: 'Burundi', code: 'BI'},
            {name: 'Cambodia', code: 'KH'},
            {name: 'Cameroon', code: 'CM'},
            {name: 'Canada', code: 'CA'},
            {name: 'Cape Verde', code: 'CV'},
            {name: 'Cayman Islands', code: 'KY'},
            {name: 'Central African Republic', code: 'CF'},
            {name: 'Chad', code: 'TD'},
            {name: 'Chile', code: 'CL'},
            {name: 'China', code: 'CN'},
            {name: 'Christmas Island', code: 'CX'},
            {name: 'Cocos (Keeling) Islands', code: 'CC'},
            {name: 'Colombia', code: 'CO'},
            {name: 'Comoros', code: 'KM'},
            {name: 'Congo', code: 'CG'},
            {name: 'Congo, The Democratic Republic of the', code: 'CD'},
            {name: 'Cook Islands', code: 'CK'},
            {name: 'Costa Rica', code: 'CR'},
            {name: 'Cote D\'Ivoire', code: 'CI'},
            {name: 'Croatia', code: 'HR'},
            {name: 'Cuba', code: 'CU'},
            {name: 'Cyprus', code: 'CY'},
            {name: 'Czech Republic', code: 'CZ'},
            {name: 'Denmark', code: 'DK'},
            {name: 'Djibouti', code: 'DJ'},
            {name: 'Dominica', code: 'DM'},
            {name: 'Dominican Republic', code: 'DO'},
            {name: 'Ecuador', code: 'EC'},
            {name: 'Egypt', code: 'EG'},
            {name: 'El Salvador', code: 'SV'},
            {name: 'Equatorial Guinea', code: 'GQ'},
            {name: 'Eritrea', code: 'ER'},
            {name: 'Estonia', code: 'EE'},
            {name: 'Ethiopia', code: 'ET'},
            {name: 'Falkland Islands (Malvinas)', code: 'FK'},
            {name: 'Faroe Islands', code: 'FO'},
            {name: 'Fiji', code: 'FJ'},
            {name: 'Finland', code: 'FI'},
            {name: 'France', code: 'FR'},
            {name: 'French Guiana', code: 'GF'},
            {name: 'French Polynesia', code: 'PF'},
            {name: 'French Southern Territories', code: 'TF'},
            {name: 'Gabon', code: 'GA'},
            {name: 'Gambia', code: 'GM'},
            {name: 'Georgia', code: 'GE'},
            {name: 'Germany', code: 'DE'},
            {name: 'Ghana', code: 'GH'},
            {name: 'Gibraltar', code: 'GI'},
            {name: 'Greece', code: 'GR'},
            {name: 'Greenland', code: 'GL'},
            {name: 'Grenada', code: 'GD'},
            {name: 'Guadeloupe', code: 'GP'},
            {name: 'Guam', code: 'GU'},
            {name: 'Guatemala', code: 'GT'},
            {name: 'Guernsey', code: 'GG'},
            {name: 'Guinea', code: 'GN'},
            {name: 'Guinea-Bissau', code: 'GW'},
            {name: 'Guyana', code: 'GY'},
            {name: 'Haiti', code: 'HT'},
            {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
            {name: 'Holy See (Vatican City State)', code: 'VA'},
            {name: 'Honduras', code: 'HN'},
            {name: 'Hong Kong', code: 'HK'},
            {name: 'Hungary', code: 'HU'},
            {name: 'Iceland', code: 'IS'},
            {name: 'India', code: 'IN'},
            {name: 'Indonesia', code: 'ID'},
            {name: 'Iran, Islamic Republic Of', code: 'IR'},
            {name: 'Iraq', code: 'IQ'},
            {name: 'Ireland', code: 'IE'},
            {name: 'Isle of Man', code: 'IM'},
            {name: 'Israel', code: 'IL'},
            {name: 'Italy', code: 'IT'},
            {name: 'Jamaica', code: 'JM'},
            {name: 'Japan', code: 'JP'},
            {name: 'Jersey', code: 'JE'},
            {name: 'Jordan', code: 'JO'},
            {name: 'Kazakhstan', code: 'KZ'},
            {name: 'Kenya', code: 'KE'},
            {name: 'Kiribati', code: 'KI'},
            {name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
            {name: 'Korea, Republic of', code: 'KR'},
            {name: 'Kuwait', code: 'KW'},
            {name: 'Kyrgyzstan', code: 'KG'},
            {name: 'Lao People\'s Democratic Republic', code: 'LA'},
            {name: 'Latvia', code: 'LV'},
            {name: 'Lebanon', code: 'LB'},
            {name: 'Lesotho', code: 'LS'},
            {name: 'Liberia', code: 'LR'},
            {name: 'Libyan Arab Jamahiriya', code: 'LY'},
            {name: 'Liechtenstein', code: 'LI'},
            {name: 'Lithuania', code: 'LT'},
            {name: 'Luxembourg', code: 'LU'},
            {name: 'Macao', code: 'MO'},
            {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
            {name: 'Madagascar', code: 'MG'},
            {name: 'Malawi', code: 'MW'},
            {name: 'Malaysia', code: 'MY'},
            {name: 'Maldives', code: 'MV'},
            {name: 'Mali', code: 'ML'},
            {name: 'Malta', code: 'MT'},
            {name: 'Marshall Islands', code: 'MH'},
            {name: 'Martinique', code: 'MQ'},
            {name: 'Mauritania', code: 'MR'},
            {name: 'Mauritius', code: 'MU'},
            {name: 'Mayotte', code: 'YT'},
            {name: 'Mexico', code: 'MX'},
            {name: 'Micronesia, Federated States of', code: 'FM'},
            {name: 'Moldova, Republic of', code: 'MD'},
            {name: 'Monaco', code: 'MC'},
            {name: 'Mongolia', code: 'MN'},
            {name: 'Montserrat', code: 'MS'},
            {name: 'Morocco', code: 'MA'},
            {name: 'Mozambique', code: 'MZ'},
            {name: 'Myanmar', code: 'MM'},
            {name: 'Namibia', code: 'NA'},
            {name: 'Nauru', code: 'NR'},
            {name: 'Nepal', code: 'NP'},
            {name: 'Netherlands', code: 'NL'},
            {name: 'Netherlands Antilles', code: 'AN'},
            {name: 'New Caledonia', code: 'NC'},
            {name: 'New Zealand', code: 'NZ'},
            {name: 'Nicaragua', code: 'NI'},
            {name: 'Niger', code: 'NE'},
            {name: 'Nigeria', code: 'NG'},
            {name: 'Niue', code: 'NU'},
            {name: 'Norfolk Island', code: 'NF'},
            {name: 'Northern Mariana Islands', code: 'MP'},
            {name: 'Norway', code: 'NO'},
            {name: 'Oman', code: 'OM'},
            {name: 'Pakistan', code: 'PK'},
            {name: 'Palau', code: 'PW'},
            {name: 'Palestinian Territory, Occupied', code: 'PS'},
            {name: 'Panama', code: 'PA'},
            {name: 'Papua New Guinea', code: 'PG'},
            {name: 'Paraguay', code: 'PY'},
            {name: 'Peru', code: 'PE'},
            {name: 'Philippines', code: 'PH'},
            {name: 'Pitcairn', code: 'PN'},
            {name: 'Poland', code: 'PL'},
            {name: 'Portugal', code: 'PT'},
            {name: 'Puerto Rico', code: 'PR'},
            {name: 'Qatar', code: 'QA'},
            {name: 'Reunion', code: 'RE'},
            {name: 'Romania', code: 'RO'},
            {name: 'Russian Federation', code: 'RU'},
            {name: 'Rwanda', code: 'RW'},
            {name: 'Saint Helena', code: 'SH'},
            {name: 'Saint Kitts and Nevis', code: 'KN'},
            {name: 'Saint Lucia', code: 'LC'},
            {name: 'Saint Pierre and Miquelon', code: 'PM'},
            {name: 'Saint Vincent and the Grenadines', code: 'VC'},
            {name: 'Samoa', code: 'WS'},
            {name: 'San Marino', code: 'SM'},
            {name: 'Sao Tome and Principe', code: 'ST'},
            {name: 'Saudi Arabia', code: 'SA'},
            {name: 'Senegal', code: 'SN'},
            {name: 'Serbia and Montenegro', code: 'CS'},
            {name: 'Seychelles', code: 'SC'},
            {name: 'Sierra Leone', code: 'SL'},
            {name: 'Singapore', code: 'SG'},
            {name: 'Slovakia', code: 'SK'},
            {name: 'Slovenia', code: 'SI'},
            {name: 'Solomon Islands', code: 'SB'},
            {name: 'Somalia', code: 'SO'},
            {name: 'South Africa', code: 'ZA'},
            {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
            {name: 'Spain', code: 'ES'},
            {name: 'Sri Lanka', code: 'LK'},
            {name: 'Sudan', code: 'SD'},
            {name: 'Suriname', code: 'SR'},
            {name: 'Svalbard and Jan Mayen', code: 'SJ'},
            {name: 'Swaziland', code: 'SZ'},
            {name: 'Sweden', code: 'SE'},
            {name: 'Switzerland', code: 'CH'},
            {name: 'Syrian Arab Republic', code: 'SY'},
            {name: 'Taiwan, Province of China', code: 'TW'},
            {name: 'Tajikistan', code: 'TJ'},
            {name: 'Tanzania, United Republic of', code: 'TZ'},
            {name: 'Thailand', code: 'TH'},
            {name: 'Timor-Leste', code: 'TL'},
            {name: 'Togo', code: 'TG'},
            {name: 'Tokelau', code: 'TK'},
            {name: 'Tonga', code: 'TO'},
            {name: 'Trinidad and Tobago', code: 'TT'},
            {name: 'Tunisia', code: 'TN'},
            {name: 'Turkey', code: 'TR'},
            {name: 'Turkmenistan', code: 'TM'},
            {name: 'Turks and Caicos Islands', code: 'TC'},
            {name: 'Tuvalu', code: 'TV'},
            {name: 'Uganda', code: 'UG'},
            {name: 'Ukraine', code: 'UA'},
            {name: 'United Arab Emirates', code: 'AE'},
            {name: 'United Kingdom', code: 'GB'},
            {name: 'United States', code: 'US'},
            {name: 'United States Minor Outlying Islands', code: 'UM'},
            {name: 'Uruguay', code: 'UY'},
            {name: 'Uzbekistan', code: 'UZ'},
            {name: 'Vanuatu', code: 'VU'},
            {name: 'Venezuela', code: 'VE'},
            {name: 'Vietnam', code: 'VN'},
            {name: 'Virgin Islands, British', code: 'VG'},
            {name: 'Virgin Islands, U.S.', code: 'VI'},
            {name: 'Wallis and Futuna', code: 'WF'},
            {name: 'Western Sahara', code: 'EH'},
            {name: 'Yemen', code: 'YE'},
            {name: 'Zambia', code: 'ZM'},
            {name: 'Zimbabwe', code: 'ZW'}
          ];


          // Multiple
          vm.someGroupFn = function (item){

            if (item.name[0] >= 'A' && item.name[0] <= 'M')
                return 'From A - M';

            if (item.name[0] >= 'N' && item.name[0] <= 'Z')
                return 'From N - Z';

          };

          vm.counter = 0;
          vm.someFunction = function (item, model){
            vm.counter++;
            vm.eventResult = {item: item, model: model};
          };

          vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

          vm.multipleDemo = {};
          vm.multipleDemo.colors = ['Blue','Red'];
          vm.multipleDemo.selectedPeople = [vm.people[5], vm.people[4]];
          vm.multipleDemo.selectedPeopleWithGroupBy = [vm.people[8], vm.people[6]];
          vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];
        }
    }

})();

/**=========================================================
 * Module: upload.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FileUploadController', FileUploadController);

    FileUploadController.$inject = ['FileUploader'];
    function FileUploadController(FileUploader) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          var uploader = vm.uploader = new FileUploader({
              url: 'server/upload.php'
          });

          // FILTERS

          uploader.filters.push({
              name: 'customFilter',
              fn: function(/*item, options*/) {
                  return this.queue.length < 10;
              }
          });

          // CALLBACKS

          uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
              console.info('onWhenAddingFileFailed', item, filter, options);
          };
          uploader.onAfterAddingFile = function(fileItem) {
              console.info('onAfterAddingFile', fileItem);
          };
          uploader.onAfterAddingAll = function(addedFileItems) {
              console.info('onAfterAddingAll', addedFileItems);
          };
          uploader.onBeforeUploadItem = function(item) {
              console.info('onBeforeUploadItem', item);
          };
          uploader.onProgressItem = function(fileItem, progress) {
              console.info('onProgressItem', fileItem, progress);
          };
          uploader.onProgressAll = function(progress) {
              console.info('onProgressAll', progress);
          };
          uploader.onSuccessItem = function(fileItem, response, status, headers) {
              console.info('onSuccessItem', fileItem, response, status, headers);
          };
          uploader.onErrorItem = function(fileItem, response, status, headers) {
              console.info('onErrorItem', fileItem, response, status, headers);
          };
          uploader.onCancelItem = function(fileItem, response, status, headers) {
              console.info('onCancelItem', fileItem, response, status, headers);
          };
          uploader.onCompleteItem = function(fileItem, response, status, headers) {
              console.info('onCompleteItem', fileItem, response, status, headers);
          };
          uploader.onCompleteAll = function() {
              console.info('onCompleteAll');
          };

          console.info('uploader', uploader);
        }
    }
})();

/**=========================================================
 * Module: validate-form.js
 * Initializes the validation plugin Parsley
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('validateForm', validateForm);

    function validateForm () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var $elem = $(element);
          if($.fn.parsley)
            $elem.parsley();
        }
    }

})();


(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('AngularCarouselController', AngularCarouselController);

    function AngularCarouselController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.colors = ['#fc0003', '#f70008', '#f2000d', '#ed0012', '#e80017', '#e3001c', '#de0021', '#d90026', '#d4002b', '#cf0030', '#c90036', '#c4003b', '#bf0040', '#ba0045', '#b5004a', '#b0004f', '#ab0054', '#a60059', '#a1005e', '#9c0063', '#960069', '#91006e', '#8c0073', '#870078', '#82007d', '#7d0082', '#780087', '#73008c', '#6e0091', '#690096', '#63009c', '#5e00a1', '#5900a6', '#5400ab', '#4f00b0', '#4a00b5', '#4500ba', '#4000bf', '#3b00c4', '#3600c9', '#3000cf', '#2b00d4', '#2600d9', '#2100de', '#1c00e3', '#1700e8', '#1200ed', '#0d00f2', '#0800f7', '#0300fc'];

          function getSlide(target, style) {
              var i = target.length;
              return {
                  id: (i + 1),
                  label: 'slide #' + (i + 1),
                  img: 'http://lorempixel.com/1200/500/' + style + '/' + ((i + 1) % 10) ,
                  color: vm.colors[ (i*10) % vm.colors.length],
                  odd: (i % 2 === 0)
              };
          }

          function addSlide(target, style) {
              target.push(getSlide(target, style));
          }

          vm.carouselIndex = 3;
          vm.carouselIndex2 = 0;
          vm.carouselIndex2 = 1;
          vm.carouselIndex3 = 5;
          vm.carouselIndex4 = 5;

          function addSlides(target, style, qty) {
              for (var i=0; i < qty; i++) {
                  addSlide(target, style);
              }
          }

          // 1st ngRepeat demo
          vm.slides = [];
          addSlides(vm.slides, 'sports', 50);

          // 2nd ngRepeat demo
          vm.slides2 = [];
          addSlides(vm.slides2, 'sports', 10);

          // 3rd ngRepeat demo
          vm.slides3 = [];
          addSlides(vm.slides3, 'people', 50);

          // 4th ngRepeat demo
          vm.slides4 = [];
          addSlides(vm.slides4, 'city', 50);


          // 5th ngRepeat demo
          vm.slides6 = [];
          vm.carouselIndex6 = 0;
          addSlides(vm.slides6, 'sports', 10);
          vm.addSlide = function(at) {
              if(at==='head') {
                  vm.slides6.unshift(getSlide(vm.slides6, 'people'));
              } else {
                  vm.slides6.push(getSlide(vm.slides6, 'people'));
              }
          };
        }
    }
})();

/**=========================================================
 * Module: demo-dialog.js
 * Demo for multiple ngDialog Usage
 * - ngDialogProvider for default values not supported 
 *   using lazy loader. Include plugin in base.js instead.
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('DialogIntroCtrl', DialogIntroCtrl)
        .controller('DialogMainCtrl', DialogMainCtrl)
        .controller('InsideCtrl', InsideCtrl)
        .controller('SecondModalCtrl', SecondModalCtrl);

    DialogIntroCtrl.$inject = ['$scope', 'ngDialog', 'tpl'];
    // Called from the route state. 'tpl' is resolved before
    function DialogIntroCtrl($scope, ngDialog, tpl) {
        
        activate();

        ////////////////

        function activate() {
          // share with other controllers
          $scope.tpl = tpl;
          // open dialog window
          ngDialog.open({
            template: tpl.path,
            // plain: true,
            className: 'ngdialog-theme-default'
          });
        }
    }

    DialogMainCtrl.$inject = ['$scope', '$rootScope', 'ngDialog'];
    // Loads from view
    function DialogMainCtrl($scope, $rootScope, ngDialog) {

        activate();

        ////////////////

        function activate() {
            //$rootScope.jsonData = [
            //    { name: "Peter",   age: 20 },
            //    { name: "Pablo",   age: 55 },
            //    { name: "Linda",   age: 20 },
            //    { name: "Marta",   age: 37 },
            //    { name: "Othello", age: 20 },
            //    { name: "Markus",  age: 32 }
            //];
          //$rootScope.jsonData = '{"foo": "bar"}';
          $rootScope.theme = 'ngdialog-theme-default';

          $scope.directivePreCloseCallback = function (value) {
            if(confirm('Close it? MainCtrl.Directive. (Value = ' + value + ')')) {
              return true;
            }
            return false;
          };

          $scope.preCloseCallbackOnScope = function (value) {
            if(confirm('Close it? MainCtrl.OnScope (Value = ' + value + ')')) {
              return true;
            }
            return false;
          };

          $scope.open = function () {
            ngDialog.open({ template: 'firstDialogId', controller: 'InsideCtrl', data: {foo: 'some data'} });
          };

          $scope.openDefault = function () {
            ngDialog.open({
              template: 'firstDialogId',
              controller: 'InsideCtrl',
              className: 'ngdialog-theme-default'
            });
          };

          $scope.openDefaultWithPreCloseCallbackInlined = function () {
            ngDialog.open({
              template: 'firstDialogId',
              controller: 'InsideCtrl',
              className: 'ngdialog-theme-default',
              preCloseCallback: function(value) {
                if (confirm('Close it?  (Value = ' + value + ')')) {
                  return true;
                }
                return false;
              }
            });
          };

          $scope.openConfirm = function () {
            ngDialog.openConfirm({
              template: 'modalDialogId',
              className: 'ngdialog-theme-default'
            }).then(function (value) {
              console.log('Modal promise resolved. Value: ', value);
            }, function (reason) {
              console.log('Modal promise rejected. Reason: ', reason);
            });
          };

          $scope.openConfirmWithPreCloseCallbackOnScope = function () {
            ngDialog.openConfirm({
              template: 'modalDialogId',
              className: 'ngdialog-theme-default',
              preCloseCallback: 'preCloseCallbackOnScope',
              scope: $scope
            }).then(function (value) {
              console.log('Modal promise resolved. Value: ', value);
            }, function (reason) {
              console.log('Modal promise rejected. Reason: ', reason);
            });
          };

          $scope.openConfirmWithPreCloseCallbackInlinedWithNestedConfirm = function () {
            ngDialog.openConfirm({
              template: 'dialogWithNestedConfirmDialogId',
              className: 'ngdialog-theme-default',
              preCloseCallback: function(/*value*/) {

                var nestedConfirmDialog = ngDialog.openConfirm({
                  template:
                      '<p>Are you sure you want to close the parent dialog?</p>' +
                      '<div>' +
                        '<button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No' +
                        '<button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes' +
                      '</button></div>',
                  plain: true,
                  className: 'ngdialog-theme-default'
                });

                return nestedConfirmDialog;
              },
              scope: $scope
            })
            .then(function(value){
              console.log('resolved:' + value);
              // Perform the save here
            }, function(value){
              console.log('rejected:' + value);

            });
          };

          $scope.openInlineController = function () {
            $rootScope.theme = 'ngdialog-theme-default';

            ngDialog.open({
              template: 'withInlineController',
              controller: ['$scope', '$timeout', function ($scope, $timeout) {
                var counter = 0;
                var timeout;
                function count() {
                  $scope.exampleExternalData = 'Counter ' + (counter++);
                  timeout = $timeout(count, 450);
                }
                count();
                $scope.$on('$destroy', function () {
                  $timeout.cancel(timeout);
                });
              }],
              className: 'ngdialog-theme-default'
            });
          };

          $scope.openTemplate = function () {
            $scope.value = true;

            ngDialog.open({
              template: $scope.tpl.path,
              className: 'ngdialog-theme-default',
              scope: $scope
            });
          };

          $scope.openTemplateNoCache = function () {
            $scope.value = true;

            ngDialog.open({
              template: $scope.tpl.path,
              className: 'ngdialog-theme-default',
              scope: $scope,
              cache: false
            });
          };

          $scope.openTimed = function () {
            var dialog = ngDialog.open({
              template: '<p>Just passing through!</p>',
              plain: true,
              closeByDocument: false,
              closeByEscape: false
            });
            setTimeout(function () {
              dialog.close();
            }, 2000);
          };

          $scope.openNotify = function () {
            var dialog = ngDialog.open({
              template:
                '<p>You can do whatever you want when I close, however that happens.</p>' +
                '<div><button type="button" class="btn btn-primary" ng-click="closeThisDialog(1)">Close Me</button></div>',
              plain: true
            });
            dialog.closePromise.then(function (data) {
              console.log('ngDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
            });
          };

          $scope.openWithoutOverlay = function () {
            ngDialog.open({
              template: '<h2>Notice that there is no overlay!</h2>',
              className: 'ngdialog-theme-default',
              plain: true,
              overlay: false
            });
          };

          $rootScope.$on('ngDialog.opened', function (e, $dialog) {
            console.log('ngDialog opened: ' + $dialog.attr('id'));
          });

          $rootScope.$on('ngDialog.closed', function (e, $dialog) {
            console.log('ngDialog closed: ' + $dialog.attr('id'));
          });

          $rootScope.$on('ngDialog.closing', function (e, $dialog) {
            console.log('ngDialog closing: ' + $dialog.attr('id'));
          });
        $scope.sortType     = 'product'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchName   = '';     // set the default search/filter term

        $scope.products = [
            { product: 'Product Name' },
            { product: 'Product Name Two' },
            { product: 'Product Name Three' },
            { product: 'Product Name Four' },
            { product: 'Product Name Five' },
            { product: 'Product Name Six' },
            { product: 'Product Name Seven' },
            { product: 'Product Name Eight' },
            { product: 'Product Name Nine' },
            { product: 'Product Name Ten' }
        ];
        $scope.addData = function() {
            $scope.names.push({ 'fname': $scope.fname, 'lname': $scope.lname });
        };
        }
    
    } // DialogMainCtrl


    InsideCtrl.$inject = ['$scope', 'ngDialog'];
    function InsideCtrl($scope, ngDialog) {

        activate();

        ////////////////

        function activate() {
            $scope.jsonData = {};
            $scope.jsonData.products = ['product1','product2','product3'];
          $scope.dialogModel = {
            message : 'message from passed scope'
          };
          $scope.openSecond = function () {
            ngDialog.open({
              template: '<p class="lead m0"><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
              plain: true,
              closeByEscape: false,
              controller: 'SecondModalCtrl'
            });
          };
        }
    }

    SecondModalCtrl.$inject = ['$scope', 'ngDialog'];
    function SecondModalCtrl($scope, ngDialog) {

        activate();

        ////////////////

        function activate() {
          $scope.closeSecond = function () {
            ngDialog.close();
          };
        }

    }


})();




/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('AbnTestController', AbnTestController);

    AbnTestController.$inject = ['$timeout', '$resource'];
    function AbnTestController($timeout, $resource) {
        var vm = this;

        activate();

        ////////////////

        /*jshint -W106*/
        function activate() {
          vm.my_tree_handler = function(branch) {

            vm.output = 'You selected: ' + branch.label;

            if (branch.data && branch.data.description) {
              vm.output += '(' + branch.data.description + ')';
              return vm.output;
            }
          };

          // onSelect event handlers
          var apple_selected = function(branch) {
            vm.output = 'APPLE! : ' + branch.label;
            return vm.output;
          };

          var treedata_avm = [
            {
              label: 'Animal',
              children: [
                {
                  label: 'Dog',
                  data: {
                    description: 'man\'s best friend'
                  }
                }, {
                  label: 'Cat',
                  data: {
                    description: 'Felis catus'
                  }
                }, {
                  label: 'Hippopotamus',
                  data: {
                    description: 'hungry, hungry'
                  }
                }, {
                  label: 'Chicken',
                  children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
                }
              ]
            }, {
              label: 'Vegetable',
              data: {
                definition: 'A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.',
                data_can_contain_anything: true
              },
              onSelect: function(branch) {
                vm.output = 'Vegetable: ' + branch.data.definition;
                return vm.output;
              },
              children: [
                {
                  label: 'Oranges'
                }, {
                  label: 'Apples',
                  children: [
                    {
                      label: 'Granny Smith',
                      onSelect: apple_selected
                    }, {
                      label: 'Red Delicous',
                      onSelect: apple_selected
                    }, {
                      label: 'Fuji',
                      onSelect: apple_selected
                    }
                  ]
                }
              ]
            }, {
              label: 'Mineral',
              children: [
                {
                  label: 'Rock',
                  children: ['Igneous', 'Sedimentary', 'Metamorphic']
                }, {
                  label: 'Metal',
                  children: ['Aluminum', 'Steel', 'Copper']
                }, {
                  label: 'Plastic',
                  children: [
                    {
                      label: 'Thermoplastic',
                      children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
                    }, {
                      label: 'Thermosetting Polymer',
                      children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
                    }
                  ]
                }
              ]
            }
          ];
          
          var treedata_geography = [
            {
              label: 'North America',
              children: [
                {
                  label: 'Canada',
                  children: ['Toronto', 'Vancouver']
                }, {
                  label: 'USA',
                  children: ['New York', 'Los Angeles']
                }, {
                  label: 'Mexico',
                  children: ['Mexico City', 'Guadalajara']
                }
              ]
            }, {
              label: 'South America',
              children: [
                {
                  label: 'Venezuela',
                  children: ['Caracas', 'Maracaibo']
                }, {
                  label: 'Brazil',
                  children: ['Sao Paulo', 'Rio de Janeiro']
                }, {
                  label: 'Argentina',
                  children: ['Buenos Aires', 'Cordoba']
                }
              ]
            }
          ];

          vm.my_data = treedata_avm;
          vm.try_changing_the_tree_data = function() {
            if (vm.my_data === treedata_avm) {
              vm.my_data = treedata_geography;
            } else {
              vm.my_data = treedata_avm;
            }
            return vm.my_data;
          };
          
          var tree;
          // This is our API control variable
          vm.my_tree = tree = {};
          vm.try_async_load = function() {
            
            vm.my_data = [];
            vm.doing_async = true;
            
            // Request tree data via $resource
            var remoteTree = $resource('server/treedata.json');
            
            return remoteTree.get(function(res){
              
              vm.my_data = res.data;

              vm.doing_async = false;
            
              return tree.expand_all();
            
            // we must return a promise so the plugin 
            // can watch when it's resolved
            }).$promise;
          };
          
          // Adds a new branch to the tree
          vm.try_adding_a_branch = function() {
            var b;
            b = tree.get_selected_branch();
            return tree.add_branch(b, {
              label: 'New Branch',
              data: {
                something: 42,
                'else': 43
              }
            });
          };

        }
    }
})();


/**=========================================================
 * Module: scroll.js
 * Make a content box scrollable
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .directive('scrollable', scrollable);

    function scrollable () {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
          var defaultHeight = 250;
          element.slimScroll({
              height: (attrs.height || defaultHeight)
          });
        }
    }

})();

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

/**=========================================================
 * Module: demo-toaster.js
 * Demos for toaster notifications
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('ToasterDemoCtrl', ToasterDemoCtrl);

    ToasterDemoCtrl.$inject = ['toaster'];
    function ToasterDemoCtrl(toaster) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.toaster = {
              type:  'success',
              title: 'Title',
              text:  'Message'
          };

          vm.pop = function() {
            toaster.pop(vm.toaster.type, vm.toaster.title, vm.toaster.text);
          };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .config(loadingbarConfig)
        ;
    loadingbarConfig.$inject = ['cfpLoadingBarProvider'];
    function loadingbarConfig(cfpLoadingBarProvider){
      cfpLoadingBarProvider.includeBar = true;
      cfpLoadingBarProvider.includeSpinner = false;
      cfpLoadingBarProvider.latencyThreshold = 500;
      cfpLoadingBarProvider.parentSelector = '.wrapper > section';
    }
})();
(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .run(loadingbarRun)
        ;
    loadingbarRun.$inject = ['$rootScope', '$timeout', 'cfpLoadingBar'];
    function loadingbarRun($rootScope, $timeout, cfpLoadingBar){

      // Loading bar transition
      // ----------------------------------- 
      var thBar;
      $rootScope.$on('$stateChangeStart', function() {
          if($('.wrapper > section').length) // check if bar container exists
            thBar = $timeout(function() {
              cfpLoadingBar.start();
            }, 0); // sets a latency Threshold
      });
      $rootScope.$on('$stateChangeSuccess', function(event) {
          event.targetScope.$watch('$viewContentLoaded', function () {
            $timeout.cancel(thBar);
            cfpLoadingBar.complete();
          });
      });

    }

})();
/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('LoginFormController', LoginFormController);

    LoginFormController.$inject = ['$http', '$state'];
    function LoginFormController($http, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // bind here all data from the form
          vm.account = {};
          // place the message if something goes wrong
          vm.authMsg = '';

          vm.login = function() {
            vm.authMsg = '';

            if(vm.loginForm.$valid) {

              $http
                .post('api/account/login', {email: vm.account.email, password: vm.account.password})
                .then(function(response) {
                  // assumes if ok, response is an object with some data, if not, a string with error
                  // customize according to your api
                  if ( !response.account ) {
                    vm.authMsg = 'Incorrect credentials.';
                  }else{
                    $state.go('app.dashboard');
                  }
                }, function() {
                  vm.authMsg = 'Server Request Error';
                });
            }
            else {
              // set as dirty if the user click directly to login so we show the validation messages
              /*jshint -W106*/
              vm.loginForm.account_email.$dirty = true;
              vm.loginForm.account_password.$dirty = true;
            }
          };
        }
    }
})();

/**=========================================================
 * Module: access-register.js
 * Demo for register account api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('RegisterFormController', RegisterFormController);

    RegisterFormController.$inject = ['$http', '$state'];
    function RegisterFormController($http, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // bind here all data from the form
          vm.account = {};
          // place the message if something goes wrong
          vm.authMsg = '';
            
          vm.register = function() {
            vm.authMsg = '';

            if(vm.registerForm.$valid) {

              $http
                .post('api/account/register', {email: vm.account.email, password: vm.account.password})
                .then(function(response) {
                  // assumes if ok, response is an object with some data, if not, a string with error
                  // customize according to your api
                  if ( !response.account ) {
                    vm.authMsg = response;
                  }else{
                    $state.go('app.dashboard');
                  }
                }, function() {
                  vm.authMsg = 'Server Request Error';
                });
            }
            else {
              // set as dirty if the user click directly to login so we show the validation messages
              /*jshint -W106*/
              vm.registerForm.account_email.$dirty = true;
              vm.registerForm.account_password.$dirty = true;
              vm.registerForm.account_agreed.$dirty = true;
              
            }
          };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.locale')
        .config(localeConfig)
        ;
    localeConfig.$inject = ['tmhDynamicLocaleProvider'];
    function localeConfig(tmhDynamicLocaleProvider){
  
      tmhDynamicLocaleProvider.localeLocationPattern('vendor/angular-i18n/angular-locale_{{locale}}.js');
      // tmhDynamicLocaleProvider.useStorage('$cookieStore');

    }
})();
/**=========================================================
 * Module: locale.js
 * Demo for locale settings
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.locale')
        .controller('LocalizationController', LocalizationController);

    LocalizationController.$inject = ['$rootScope', 'tmhDynamicLocale', '$locale'];
    function LocalizationController($rootScope, tmhDynamicLocale, $locale) {

        activate();

        ////////////////

        function activate() {
          $rootScope.availableLocales = {
            'en': 'English',
            'es': 'Spanish',
            'de': 'German',
            'fr': 'French',
            'ar': 'Arabic',
            'ja': 'Japanese',
            'ko': 'Korean',
            'zh': 'Chinese'};
          
          $rootScope.model = {selectedLocale: 'en'};
          
          $rootScope.$locale = $locale;
          
          $rootScope.changeLocale = tmhDynamicLocale.set;
        }
    }
})();

/**=========================================================
 * Module: helpers.js
 * Provides helper functions for routes definition
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.routes')
        .provider('RouteHelpers', RouteHelpersProvider)
        ;

    RouteHelpersProvider.$inject = ['APP_REQUIRES'];
    function RouteHelpersProvider(APP_REQUIRES) {

      /* jshint validthis:true */
      return {
        // provider access level
        basepath: basepath,
        resolveFor: resolveFor,
        // controller access level
        $get: function() {
          return {
            basepath: basepath,
            resolveFor: resolveFor
          };
        }
      };

      // Set here the base of the relative path
      // for all app views
      function basepath(uri) {
        return 'app/views/' + uri;
      }

      // Generates a resolve object by passing script names
      // previously configured in constant.APP_REQUIRES
      function resolveFor() {
        var _args = arguments;
        return {
          deps: ['$ocLazyLoad','$q', function ($ocLL, $q) {
            // Creates a promise chain for each argument
            var promise = $q.when(1); // empty promise
            for(var i=0, len=_args.length; i < len; i ++){
              promise = andThen(_args[i]);
            }
            return promise;

            // creates promise to chain dynamically
            function andThen(_arg) {
              // also support a function that returns a promise
              if(typeof _arg === 'function')
                  return promise.then(_arg);
              else
                  return promise.then(function() {
                    // if is a module, pass the name. If not, pass the array
                    var whatToLoad = getRequired(_arg);
                    // simple error check
                    if(!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                    // finally, return a promise
                    return $ocLL.load( whatToLoad );
                  });
            }
            // check and returns required data
            // analyze module items with the form [name: '', files: []]
            // and also simple array of script files (for not angular js)
            function getRequired(name) {
              if (APP_REQUIRES.modules)
                  for(var m in APP_REQUIRES.modules)
                      if(APP_REQUIRES.modules[m].name && APP_REQUIRES.modules[m].name === name)
                          return APP_REQUIRES.modules[m];
              return APP_REQUIRES.scripts && APP_REQUIRES.scripts[name];
            }

          }]};
      } // resolveFor

    }


})();


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
                resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'toaster', 'whirl', 'bs-collapse', 'angular-animate', 'ngDialog', 'ui.select', 'inputmask', 'clipboard', 'ngclipboard', 'prismjs', 'custom')
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


(function() {
    'use strict';

    angular
        .module('app.preloader')
        .directive('preloader', preloader);

    preloader.$inject = ['$animate', '$timeout', '$q'];
    function preloader ($animate, $timeout, $q) {

        var directive = {
            restrict: 'EAC',
            template: 
              '<div class="preloader-progress">' +
                  '<div class="preloader-progress-bar" ' +
                       'ng-style="{width: loadCounter + \'%\'}"></div>' +
              '</div>'
            ,
            link: link
        };
        return directive;

        ///////

        function link(scope, el) {

          scope.loadCounter = 0;

          var counter  = 0,
              timeout;

          // disables scrollbar
          angular.element('body').css('overflow', 'hidden');
          // ensure class is present for styling
          el.addClass('preloader');

          appReady().then(endCounter);

          timeout = $timeout(startCounter);

          ///////

          function startCounter() {

            var remaining = 100 - counter;
            counter = counter + (0.015 * Math.pow(1 - Math.sqrt(remaining), 2));

            scope.loadCounter = parseInt(counter, 10);

            timeout = $timeout(startCounter, 20);
          }

          function endCounter() {

            $timeout.cancel(timeout);

            scope.loadCounter = 100;

            $timeout(function(){
              // animate preloader hiding
              $animate.addClass(el, 'preloader-hidden');
              // retore scrollbar
              angular.element('body').css('overflow', '');
            }, 300);
          }

          function appReady() {
            var deferred = $q.defer();
            var viewsLoaded = 0;
            // if this doesn't sync with the real app ready
            // a custom event must be used instead
            var off = scope.$on('$viewContentLoaded', function () {
              viewsLoaded ++;
              // we know there are at least two views to be loaded 
              // before the app is ready (1-index.html 2-app*.html)
              if ( viewsLoaded === 2) {
                // with resolve this fires only once
                $timeout(function(){
                  deferred.resolve();
                }, 3000);

                off();
              }

            });

            return deferred.promise;
          }

        } //link
    }

})();
/**=========================================================
 * Module: angular-grid.js
 * Example for Angular Grid
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('AngularGridController', AngularGridController);

    AngularGridController.$inject = ['$http'];
    function AngularGridController($http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // Basic
            var columnDefs = [
                {headerName: 'Athlete', field: 'athlete', width: 150},
                {headerName: 'Age', field: 'age', width: 90},
                {headerName: 'Country', field: 'country', width: 120},
                {headerName: 'Year', field: 'year', width: 90},
                {headerName: 'Date', field: 'date', width: 110},
                {headerName: 'Sport', field: 'sport', width: 110},
                {headerName: 'Gold', field: 'gold', width: 100},
                {headerName: 'Silver', field: 'silver', width: 100},
                {headerName: 'Bronze', field: 'bronze', width: 100},
                {headerName: 'Total', field: 'total', width: 100}
            ];

            vm.gridOptions = {
                columnDefs: columnDefs,
                rowData: null,
                ready: function(api){
                  api.sizeColumnsToFit();
                }
            };

            // Filter Example
            var irishAthletes = ['John Joe Nevin','Katie Taylor','Paddy Barnes','Kenny Egan','Darren Sutherland', 'Margaret Thatcher', 'Tony Blair', 'Ronald Regan', 'Barack Obama'];

            var columnDefsFilter = [
                {headerName: 'Athlete', field: 'athlete', width: 150, filter: 'set',
                    filterParams: { cellHeight: 20, values: irishAthletes} },
                {headerName: 'Age', field: 'age', width: 90, filter: 'number'},
                {headerName: 'Country', field: 'country', width: 120},
                {headerName: 'Year', field: 'year', width: 90},
                {headerName: 'Date', field: 'date', width: 110},
                {headerName: 'Sport', field: 'sport', width: 110},
                {headerName: 'Gold', field: 'gold', width: 100, filter: 'number'},
                {headerName: 'Silver', field: 'silver', width: 100, filter: 'number'},
                {headerName: 'Bronze', field: 'bronze', width: 100, filter: 'number'},
                {headerName: 'Total', field: 'total', width: 100, filter: 'number'}
            ];

            vm.gridOptions1 = {
                columnDefs: columnDefsFilter,
                rowData: null,
                enableFilter: true,
                ready: function(api){
                  api.sizeColumnsToFit();
                }

            };


            // Pinning Example

            vm.gridOptions2 = {
                columnDefs: columnDefs,
                rowData: null,
                pinnedColumnCount: 2,
                ready: function(api){
                  api.sizeColumnsToFit();
                }
            };

            //-----------------------------
            // Get the data from SERVER
            //-----------------------------

            $http.get('server/ag-owinners.json')
                .then(function(res){
                    // basic
                    vm.gridOptions.api.setRowData(res.data);
                    vm.gridOptions.api.sizeColumnsToFit();
                    // filter
                    vm.gridOptions1.api.setRowData(res.data);
                    vm.gridOptions1.api.sizeColumnsToFit();

                    // pinning
                    vm.gridOptions2.api.setRowData(res.data);
                    vm.gridOptions2.api.sizeColumnsToFit();
                });

        }
    }
})();

/**=========================================================
 * Module: datatable,js
 * Angular Datatable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('DataTableController', DataTableController);

    DataTableController.$inject = ['$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder'];
    function DataTableController($resource, DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // Ajax

          $resource('server/datatable.json').query().$promise.then(function(persons) {
             vm.persons = persons;
          });

          // Changing data

          vm.heroes = [{
              'id': 860,
              'firstName': 'Superman',
              'lastName': 'Yoda'
            }, {
              'id': 870,
              'firstName': 'Ace',
              'lastName': 'Ventura'
            }, {
              'id': 590,
              'firstName': 'Flash',
              'lastName': 'Gordon'
            }, {
              'id': 803,
              'firstName': 'Luke',
              'lastName': 'Skywalker'
            }
          ];

          //vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
          vm.dtColumnDefs = [
              DTColumnDefBuilder.newColumnDef(0),
              DTColumnDefBuilder.newColumnDef(1),
              DTColumnDefBuilder.newColumnDef(2),
              DTColumnDefBuilder.newColumnDef(3),
              DTColumnDefBuilder.newColumnDef(4).notSortable()
          ];
          vm.person2Add = _buildPerson2Add(1);
          vm.addPerson = addPerson;
          vm.modifyPerson = modifyPerson;
          vm.removePerson = removePerson;

          function _buildPerson2Add(id) {
              return {
                  id: id,
                  firstName: 'Foo' + id,
                  lastName: 'Bar' + id
              };
          }
          function addPerson() {
              vm.heroes.push(angular.copy(vm.person2Add));
              vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
          }
          function modifyPerson(index) {
              vm.heroes.splice(index, 1, angular.copy(vm.person2Add));
              vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
          }
          function removePerson(index) {
              vm.heroes.splice(index, 1);
          }

        }
    }
})();

/**=========================================================
 * Module: ng-grid.js
 * ngGrid demo
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('NGGridController', NGGridController);

    NGGridController.$inject = ['$scope', '$http', '$timeout'];
    function NGGridController($scope, $http, $timeout) {

        activate();

        ////////////////

        function activate() {

          $scope.filterOptions = {
              filterText: '',
              useExternalFilter: true
          };
          $scope.totalServerItems = 0;
          $scope.pagingOptions = {
              pageSizes:   [250, 500, 1000],  // page size options
              pageSize:    250,              // default page size
              currentPage: 1                 // initial page
          };

          $scope.gridOptions = {
              data:             'myData',
              enablePaging:     true,
              showFooter:       true,
              rowHeight:        36,
              headerRowHeight:  38,
              totalServerItems: 'totalServerItems',
              pagingOptions:    $scope.pagingOptions,
              filterOptions:    $scope.filterOptions
          };

          $scope.setPagingData = function(data, page, pageSize){
              // calc for pager
              var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
              // Store data from server
              $scope.myData = pagedData;
              // Update server side data length
              $scope.totalServerItems = data.length;

              if (!$scope.$$phase) {
                  $scope.$apply();
              }

          };

          $scope.getPagedDataAsync = function (pageSize, page, searchText) {
            var ngGridResourcePath = 'server/ng-grid-data.json';

            $timeout(function () {

                if (searchText) {
                    var ft = searchText.toLowerCase();
                    $http.get(ngGridResourcePath).success(function (largeLoad) {
                        var data = largeLoad.filter(function(item) {
                            return JSON.stringify(item).toLowerCase().indexOf(ft) !== -1;
                        });
                        $scope.setPagingData(data,page,pageSize);
                    });
                } else {
                    $http.get(ngGridResourcePath).success(function (largeLoad) {
                        $scope.setPagingData(largeLoad,page,pageSize);
                    });
                }
            }, 100);
          };


          $scope.$watch('pagingOptions', function (newVal, oldVal) {
              if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
                $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
              }
          }, true);
          $scope.$watch('filterOptions', function (newVal, oldVal) {
              if (newVal !== oldVal) {
                $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
              }
          }, true);

          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.tables')
        .service('ngTableDataService', ngTableDataService);

    function ngTableDataService() {
        /* jshint validthis:true */
        var self = this;
        this.cache = null;
        this.getData = getData;

        ////////////////

        function getData($defer, params, api) {
          // if no cache, request data and filter
          if ( ! self.cache ) {
            if ( api ) {
              api.get(function(data){
                self.cache = data;
                filterdata($defer, params);
              });
            }
          }
          else {
            filterdata($defer, params);
          }
          
          function filterdata($defer, params) {
            var from = (params.page() - 1) * params.count();
            var to = params.page() * params.count();
            var filteredData = self.cache.result.slice(from, to);

            params.total(self.cache.total);
            $defer.resolve(filteredData);
          }

        }
    }
})();

/**=========================================================
 * Module: NGTableCtrl.js
 * Controller for ngTables
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('NGTableCtrl', NGTableCtrl);
    /*jshint -W055 */
    NGTableCtrl.$inject = ['$filter', 'ngTableParams', '$resource', '$timeout', 'ngTableDataService'];
    function NGTableCtrl($filter, ngTableParams, $resource, $timeout, ngTableDataService) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
          var data = [
              {name: 'Moroni',  age: 50, money: -10   },
              {name: 'Tiancum', age: 43, money: 120   },
              {name: 'Jacob',   age: 27, money: 5.5   },
              {name: 'Nephi',   age: 29, money: -54   },
              {name: 'Enos',    age: 34, money: 110   },
              {name: 'Tiancum', age: 43, money: 1000  },
              {name: 'Jacob',   age: 27, money: -201  },
              {name: 'Nephi',   age: 29, money: 100   },
              {name: 'Enos',    age: 34, money: -52.5 },
              {name: 'Tiancum', age: 43, money: 52.1  },
              {name: 'Jacob',   age: 27, money: 110   },
              {name: 'Nephi',   age: 29, money: -55   },
              {name: 'Enos',    age: 34, money: 551   },
              {name: 'Tiancum', age: 43, money: -1410 },
              {name: 'Jacob',   age: 27, money: 410   },
              {name: 'Nephi',   age: 29, money: 100   },
              {name: 'Enos',    age: 34, money: -100  }
          ];

          // SELECT ROWS
          // ----------------------------------- 

          vm.data = data;

          vm.tableParams3 = new ngTableParams({
              page: 1,            // show first page
              count: 10          // count per page
          }, {
              total: data.length, // length of data
              getData: function ($defer, params) {
                  // use build-in angular filter
                  var filteredData = params.filter() ?
                          $filter('filter')(data, params.filter()) :
                          data;
                  var orderedData = params.sorting() ?
                          $filter('orderBy')(filteredData, params.orderBy()) :
                          data;

                  params.total(orderedData.length); // set total for recalc pagination
                  $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });

          vm.changeSelection = function(user) {
            console.info(user);
          };

          // EXPORT CSV
          // -----------------------------------  

          var data4 = [{name: 'Moroni', age: 50},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34}];

          vm.tableParams4 = new ngTableParams({
              page: 1,            // show first page
              count: 10           // count per page
          }, {
              total: data4.length, // length of data4
              getData: function($defer, params) {
                  $defer.resolve(data4.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });


          // SORTING
          // ----------------------------------- 



          vm.tableParams = new ngTableParams({
              page: 1,            // show first page
              count: 10,          // count per page
              sorting: {
                  name: 'asc'     // initial sorting
              }
          }, {
              total: data.length, // length of data
              getData: function($defer, params) {
                  // use build-in angular filter
                  var orderedData = params.sorting() ?
                          $filter('orderBy')(data, params.orderBy()) :
                          data;
          
                  $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });

          // FILTERS
          // ----------------------------------- 

          vm.tableParams2 = new ngTableParams({
              page: 1,            // show first page
              count: 10,          // count per page
              filter: {
                  name: '',
                  age: ''
                  // name: 'M'       // initial filter
              }
          }, {
              total: data.length, // length of data
              getData: function($defer, params) {
                  // use build-in angular filter
                  var orderedData = params.filter() ?
                         $filter('filter')(data, params.filter()) :
                         data;

                  vm.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                  params.total(orderedData.length); // set total for recalc pagination
                  $defer.resolve(vm.users);
              }
          });

          // AJAX
          
          var Api = $resource('server/table-data.json');

          vm.tableParams5 = new ngTableParams({
              page: 1,            // show first page
              count: 10           // count per page
          }, {
              total: 0,           // length of data
              counts: [],         // hide page counts control
              getData: function($defer, params) {
                  
                  // Service using cache to avoid mutiple requests
                  ngTableDataService.getData( $defer, params, Api);
                  
                  /* direct ajax request to api (perform result pagination on the server)
                  Api.get(params.url(), function(data) {
                      $timeout(function() {
                          // update table params
                          params.total(data.total);
                          // set new data
                          $defer.resolve(data.result);
                      }, 500);
                  });
                  */
              }
          });
        }
    }
})();



/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('TablexEditableController', TablexEditableController);

    TablexEditableController.$inject = ['$filter', '$http', 'editableOptions', 'editableThemes','$q'];
    function TablexEditableController($filter, $http, editableOptions, editableThemes, $q) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // editable row
          // ----------------------------------- 
          vm.users = [
            {id: 1, name: 'awesome user1', status: 2, group: 4, groupName: 'admin'},
            {id: 2, name: 'awesome user2', status: undefined, group: 3, groupName: 'vip'},
            {id: 3, name: 'awesome user3', status: 2, group: null}
          ];

          vm.statuses = [
            {value: 1, text: 'status1'},
            {value: 2, text: 'status2'},
            {value: 3, text: 'status3'},
            {value: 4, text: 'status4'}
          ];

          vm.groups = [];
          vm.loadGroups = function() {
            return vm.groups.length ? null : $http.get('server/xeditable-groups.json').success(function(data) {
              vm.groups = data;
            });
          };

          vm.showGroup = function(user) {
            if(user.group && vm.groups.length) {
              var selected = $filter('filter')(vm.groups, {id: user.group});
              return selected.length ? selected[0].text : 'Not set';
            } else {
              return user.groupName || 'Not set';
            }
          };

          vm.showStatus = function(user) {
            var selected = [];
            if(user.status) {
              selected = $filter('filter')(vm.statuses, {value: user.status});
            }
            return selected.length ? selected[0].text : 'Not set';
          };

          vm.checkName = function(data, id) {
            if (id === 2 && data !== 'awesome') {
              return 'Username 2 should be `awesome`';
            }
          };

          vm.saveUser = function(data, id) {
            //vm.user not updated yet
            angular.extend(data, {id: id});
            console.log('Saving user: ' + id);
            // return $http.post('/saveUser', data);
          };

          // remove user
          vm.removeUser = function(index) {
            vm.users.splice(index, 1);
          };

          // add user
          vm.addUser = function() {
            vm.inserted = {
              id: vm.users.length+1,
              name: '',
              status: null,
              group: null,
              isNew: true
            };
            vm.users.push(vm.inserted);
          };

          // editable column
          // ----------------------------------- 


          vm.saveColumn = function(column) {
            var results = [];
            angular.forEach(vm.users, function(/*user*/) {
              // results.push($http.post('/saveColumn', {column: column, value: user[column], id: user.id}));
              console.log('Saving column: ' + column);
            });
            return $q.all(results);
          };

          // editable table
          // ----------------------------------- 

          // filter users to show
          vm.filterUser = function(user) {
            return user.isDeleted !== true;
          };

          // mark user as deleted
          vm.deleteUser = function(id) {
            var filtered = $filter('filter')(vm.users, {id: id});
            if (filtered.length) {
              filtered[0].isDeleted = true;
            }
          };

          // cancel all changes
          vm.cancel = function() {
            for (var i = vm.users.length; i--;) {
              var user = vm.users[i];
              // undelete
              if (user.isDeleted) {
                delete user.isDeleted;
              }
              // remove new 
              if (user.isNew) {
                vm.users.splice(i, 1);
              }
            }
          };

          // save edits
          vm.saveTable = function() {
            var results = [];
            for (var i = vm.users.length; i--;) {
              var user = vm.users[i];
              // actually delete user
              if (user.isDeleted) {
                vm.users.splice(i, 1);
              }
              // mark as not new 
              if (user.isNew) {
                user.isNew = false;
              }

              // send on server
              // results.push($http.post('/saveUser', user));
              console.log('Saving Table...');
            }

            return $q.all(results);
          };

        }
    }
})();

/**=========================================================
 * Module: UIGridController
  =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('UIGridController', UIGridController);

    UIGridController.$inject = ['uiGridConstants', '$http'];
    function UIGridController(uiGridConstants, $http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // Basic example
          // ----------------------------------- 

          vm.gridOptions = {
            rowHeight: 34,
            data: [
              {
                  'name': 'Wilder Gonzales',
                  'gender': 'male',
                  'company': 'Geekko'
              },
              {
                  'name': 'Georgina Schultz',
                  'gender': 'female',
                  'company': 'Suretech'
              },
              {
                  'name': 'Carroll Buchanan',
                  'gender': 'male',
                  'company': 'Ecosys'
              },
              {
                  'name': 'Valarie Atkinson',
                  'gender': 'female',
                  'company': 'Hopeli'
              },
              {
                  'name': 'Schroeder Mathews',
                  'gender': 'male',
                  'company': 'Polarium'
              },
              {
                  'name': 'Ethel Price',
                  'gender': 'female',
                  'company': 'Enersol'
              },
              {
                  'name': 'Claudine Neal',
                  'gender': 'female',
                  'company': 'Sealoud'
              },
              {
                  'name': 'Beryl Rice',
                  'gender': 'female',
                  'company': 'Velity'
              },
              {
                  'name': 'Lynda Mendoza',
                  'gender': 'female',
                  'company': 'Dogspa'
              },
              {
                  'name': 'Sarah Massey',
                  'gender': 'female',
                  'company': 'Bisba'
              },
              {
                  'name': 'Robles Boyle',
                  'gender': 'male',
                  'company': 'Comtract'
              },
              {
                  'name': 'Evans Hickman',
                  'gender': 'male',
                  'company': 'Parleynet'
              },
              {
                  'name': 'Dawson Barber',
                  'gender': 'male',
                  'company': 'Dymi'
              },
              {
                  'name': 'Bruce Strong',
                  'gender': 'male',
                  'company': 'Xyqag'
              },
              {
                  'name': 'Nellie Whitfield',
                  'gender': 'female',
                  'company': 'Exospace'
              },
              {
                  'name': 'Jackson Macias',
                  'gender': 'male',
                  'company': 'Aquamate'
              },
              {
                  'name': 'Pena Pena',
                  'gender': 'male',
                  'company': 'Quarx'
              },
              {
                  'name': 'Lelia Gates',
                  'gender': 'female',
                  'company': 'Proxsoft'
              },
              {
                  'name': 'Letitia Vasquez',
                  'gender': 'female',
                  'company': 'Slumberia'
              },
              {
                  'name': 'Trevino Moreno',
                  'gender': 'male',
                  'company': 'Conjurica'
              }
            ]
          };
          
          // Complex example
          // ----------------------------------- 

          var data = [];
           
          vm.gridOptionsComplex = {
              showGridFooter: true,
              showColumnFooter: true,
              enableFiltering: true,
              columnDefs: [
                  { field: 'name', width: '13%' },
                  { field: 'address.street',aggregationType: uiGridConstants.aggregationTypes.sum, width: '13%' },
                  { field: 'age', aggregationType: uiGridConstants.aggregationTypes.avg, aggregationHideLabel: true, width: '13%' },
                  { name: 'ageMin', field: 'age', aggregationType: uiGridConstants.aggregationTypes.min, width: '13%', displayName: 'Age for min' },
                  { name: 'ageMax', field: 'age', aggregationType: uiGridConstants.aggregationTypes.max, width: '13%', displayName: 'Age for max' },
                  { name: 'customCellTemplate', 
                    field: 'age', 
                    width: '14%', 
                    footerCellTemplate: '<div class="ui-grid-cell-contents bg-info text-center">Custom HTML</div>' 
                  },
                  { name: 'registered', field: 'registered', width: '20%', cellFilter: 'date', footerCellFilter: 'date', aggregationType: uiGridConstants.aggregationTypes.max }
              ],
              data: data,
              onRegisterApi: function(gridApi) {
                vm.gridApi = gridApi;
              }
          };
           
          $http.get('server/uigrid-complex.json')
            .success(function(data) {
              data.forEach( function(row) {
                row.registered = Date.parse(row.registered);
              });
              vm.gridOptionsComplex.data = data;
            });


           vm.gridOptions1 = {
              paginationPageSizes: [25, 50, 75],
              paginationPageSize: 25,
              columnDefs: [
                { name: 'name' },
                { name: 'gender' },
                { name: 'company' }
              ]
            };
           
            $http.get('server/uigrid-100.json')
            .success(function (data) {
              vm.gridOptions1.data = data;
            });

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.settings')
        .run(settingsRun);

    settingsRun.$inject = ['$rootScope', '$localStorage'];

    function settingsRun($rootScope, $localStorage){

      // Global Settings
      // -----------------------------------
      $rootScope.app = {
        name: 'GRAYBOX Snippet Library',
        description: 'GRAYBOX - Snippet Library',
        year: ((new Date()).getFullYear()),
        layout: {
          isFixed: false,
          isCollapsed: false,
          isBoxed: false,
          isRTL: false,
          horizontal: true,
          isFloat: false,
          asideHover: false,
          theme: null,
          asideScrollbar: false
        },
        useFullLayout: true,
        hiddenFooter: false,
        offsidebarOpen: false,
        asideToggled: false,
        viewAnimation: 'ng-fadeInUp'
      };

      // Setup the layout mode
      $rootScope.app.layout.horizontal = ( $rootScope.$stateParams.layout === 'app-h') ;

      // Restore layout settings
      if( angular.isDefined($localStorage.layout) )
        $rootScope.app.layout = $localStorage.layout;
      else
        $localStorage.layout = $rootScope.app.layout;

      $rootScope.$watch('app.layout', function () {
        $localStorage.layout = $rootScope.app.layout;
      }, true);

      // Close submenu when sidebar change from collapsed to normal
      $rootScope.$watch('app.layout.isCollapsed', function(newValue) {
        if( newValue === false )
          $rootScope.$broadcast('closeSidebarMenu');
      });

    }

})();

(function() {
    'use strict';

    angular
        .module('app.translate')
        .config(translateConfig)
        ;
    translateConfig.$inject = ['$translateProvider'];
    function translateConfig($translateProvider){

      $translateProvider.useStaticFilesLoader({
          prefix : 'app/i18n/',
          suffix : '.json'
      });

      $translateProvider.preferredLanguage('en');
      $translateProvider.useLocalStorage();
      $translateProvider.usePostCompiling(true);
      $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    }
})();
(function() {
    'use strict';

    angular
        .module('app.translate')
        .run(translateRun)
        ;
    translateRun.$inject = ['$rootScope', '$translate'];
    
    function translateRun($rootScope, $translate){

      // Internationalization
      // ----------------------

      $rootScope.language = {
        // Handles language dropdown
        listIsOpen: false,
        // list of available languages
        available: {
          'en':       'English',
          'es_AR':    'Español'
        },
        // display always the current ui language
        init: function () {
          var proposedLanguage = $translate.proposedLanguage() || $translate.use();
          var preferredLanguage = $translate.preferredLanguage(); // we know we have set a preferred one in app.config
          $rootScope.language.selected = $rootScope.language.available[ (proposedLanguage || preferredLanguage) ];
        },
        set: function (localeId) {
          // Set the new idiom
          $translate.use(localeId);
          // save a reference for the current language
          $rootScope.language.selected = $rootScope.language.available[localeId];
          // finally toggle dropdown
          $rootScope.language.listIsOpen = ! $rootScope.language.listIsOpen;
        }
      };

      $rootScope.language.init();

    }
})();
/**=========================================================
 * Module: animate-enabled.js
 * Enable or disables ngAnimate for element with directive
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('animateEnabled', animateEnabled);

    animateEnabled.$inject = ['$animate'];
    function animateEnabled ($animate) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          scope.$watch(function () {
            return scope.$eval(attrs.animateEnabled, scope);
          }, function (newValue) {
            $animate.enabled(!!newValue, element);
          });
        }
    }

})();

/**=========================================================
 * Module: browser.js
 * Browser detection
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .service('Browser', Browser);

    Browser.$inject = ['$window'];
    function Browser($window) {
      return $window.jQBrowser;
    }

})();

/**=========================================================
 * Module: clear-storage.js
 * Removes a key from the browser storage via element click
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('resetKey', resetKey);

    resetKey.$inject = ['$state', '$localStorage'];
    function resetKey ($state, $localStorage) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
              resetKey: '@'
            }
        };
        return directive;

        function link(scope, element) {
          element.on('click', function (e) {
              e.preventDefault();

              if(scope.resetKey) {
                delete $localStorage[scope.resetKey];
                $state.go($state.current, {}, {reload: true});
              }
              else {
                $.error('No storage key specified for reset.');
              }
          });
        }
    }

})();

/**=========================================================
 * Module: fullscreen.js
 * Toggle the fullscreen mode on/off
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('toggleFullscreen', toggleFullscreen);

    toggleFullscreen.$inject = ['Browser'];
    function toggleFullscreen (Browser) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          // Not supported under IE
          if( Browser.msie ) {
            element.addClass('hide');
          }
          else {
            element.on('click', function (e) {
                e.preventDefault();

                if (screenfull.enabled) {
                  
                  screenfull.toggle();
                  
                  // Switch icon indicator
                  if(screenfull.isFullscreen)
                    $(this).children('em').removeClass('fa-expand').addClass('fa-compress');
                  else
                    $(this).children('em').removeClass('fa-compress').addClass('fa-expand');

                } else {
                  $.error('Fullscreen not enabled');
                }

            });
          }
        }
    }


})();

/**=========================================================
 * Module: load-css.js
 * Request and load into the current page a css file
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('loadCss', loadCss);

    function loadCss () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          element.on('click', function (e) {
              if(element.is('a')) e.preventDefault();
              var uri = attrs.loadCss,
                  link;

              if(uri) {
                link = createLink(uri);
                if ( !link ) {
                  $.error('Error creating stylesheet link element.');
                }
              }
              else {
                $.error('No stylesheet location defined.');
              }

          });
        }
        
        function createLink(uri) {
          var linkId = 'autoloaded-stylesheet',
              oldLink = $('#'+linkId).attr('id', linkId + '-old');

          $('head').append($('<link/>').attr({
            'id':   linkId,
            'rel':  'stylesheet',
            'href': uri
          }));

          if( oldLink.length ) {
            oldLink.remove();
          }

          return $('#'+linkId);
        }
    }

})();

/**=========================================================
 * Module: now.js
 * Provides a simple way to display the current time formatted
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('now', now);

    now.$inject = ['dateFilter', '$interval'];
    function now (dateFilter, $interval) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
          var format = attrs.format;

          function updateTime() {
            var dt = dateFilter(new Date(), format);
            element.text(dt);
          }

          updateTime();
          var intervalPromise = $interval(updateTime, 1000);

          scope.$on('$destroy', function(){
            $interval.cancel(intervalPromise);
          });

        }
    }

})();

/**=========================================================
 * Module: table-checkall.js
 * Tables check all checkbox
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('checkAll', checkAll);

    function checkAll () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          element.on('change', function() {
            var $this = $(this),
                index= $this.index() + 1,
                checkbox = $this.find('input[type="checkbox"]'),
                table = $this.parents('table');
            // Make sure to affect only the correct checkbox column
            table.find('tbody > tr > td:nth-child('+index+') input[type="checkbox"]')
              .prop('checked', checkbox[0].checked);

          });
        }
    }

})();

/**=========================================================
 * Module: trigger-resize.js
 * Triggers a window resize event from any element
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('triggerResize', triggerResize);

    triggerResize.$inject = ['$window', '$timeout'];
    function triggerResize ($window, $timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          element.on('click', function(){
            $timeout(function(){
              // all IE friendly dispatchEvent
              var evt = document.createEvent('UIEvents');
              evt.initUIEvent('resize', true, false, $window, 0);
              $window.dispatchEvent(evt);
              // modern dispatchEvent way
              // $window.dispatchEvent(new Event('resize'));
            });
          });
        }
    }

})();

/**=========================================================
 * Module: utils.js
 * Utility library to use across the theme
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .service('Utils', Utils);

    Utils.$inject = ['$window', 'APP_MEDIAQUERY'];
    function Utils($window, APP_MEDIAQUERY) {

        var $html = angular.element('html'),
            $win  = angular.element($window),
            $body = angular.element('body');

        return {
          // DETECTION
          support: {
            transition: (function() {
                    var transitionEnd = (function() {

                        var element = document.body || document.documentElement,
                            transEndEventNames = {
                                WebkitTransition: 'webkitTransitionEnd',
                                MozTransition: 'transitionend',
                                OTransition: 'oTransitionEnd otransitionend',
                                transition: 'transitionend'
                            }, name;

                        for (name in transEndEventNames) {
                            if (element.style[name] !== undefined) return transEndEventNames[name];
                        }
                    }());

                    return transitionEnd && { end: transitionEnd };
                })(),
            animation: (function() {

                var animationEnd = (function() {

                    var element = document.body || document.documentElement,
                        animEndEventNames = {
                            WebkitAnimation: 'webkitAnimationEnd',
                            MozAnimation: 'animationend',
                            OAnimation: 'oAnimationEnd oanimationend',
                            animation: 'animationend'
                        }, name;

                    for (name in animEndEventNames) {
                        if (element.style[name] !== undefined) return animEndEventNames[name];
                    }
                }());

                return animationEnd && { end: animationEnd };
            })(),
            requestAnimationFrame: window.requestAnimationFrame ||
                                   window.webkitRequestAnimationFrame ||
                                   window.mozRequestAnimationFrame ||
                                   window.msRequestAnimationFrame ||
                                   window.oRequestAnimationFrame ||
                                   function(callback){ window.setTimeout(callback, 1000/60); },
            /*jshint -W069*/
            touch: (
                ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
                (window.DocumentTouch && document instanceof window.DocumentTouch)  ||
                (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
                (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
                false
            ),
            mutationobserver: (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null)
          },
          // UTILITIES
          isInView: function(element, options) {
              /*jshint -W106*/
              var $element = $(element);

              if (!$element.is(':visible')) {
                  return false;
              }

              var window_left = $win.scrollLeft(),
                  window_top  = $win.scrollTop(),
                  offset      = $element.offset(),
                  left        = offset.left,
                  top         = offset.top;

              options = $.extend({topoffset:0, leftoffset:0}, options);

              if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() &&
                  left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
                return true;
              } else {
                return false;
              }
          },
          
          langdirection: $html.attr('dir') === 'rtl' ? 'right' : 'left',

          isTouch: function () {
            return $html.hasClass('touch');
          },

          isSidebarCollapsed: function () {
            return $body.hasClass('aside-collapsed');
          },

          isSidebarToggled: function () {
            return $body.hasClass('aside-toggled');
          },

          isMobile: function () {
            return $win.width() < APP_MEDIAQUERY.tablet;
          }

        };
    }
})();

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
(function() {
    'use strict';

    angular
        .module('custom')
        .controller('Controller', Controller);

    Controller.$inject = ['$log'];
    function Controller($log) {
        // for controllerAs syntax
        // var vm = this;

        activate();

        ////////////////

        function activate() {
          $log.log('I\'m a line from custom.js');
        }
    }
})();
