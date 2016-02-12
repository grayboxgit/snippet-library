(function () {
    'use strict';

    angular
        .module('app.lazyload')
        .constant('APP_REQUIRES', {
            // jQuery based and standalone scripts
            scripts: {
                'sortable-table': ['app/js/sortable-table.min.js'],
                'sortable': ['app/js/sortable.js'],
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
                'custom': ['app/js/custom.js'],
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
