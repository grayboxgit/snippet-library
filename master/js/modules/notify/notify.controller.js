/**=========================================================
 * Module: demo-notify.js
 * Provides a simple demo for notify
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.notify')
        .controller('NotifyDemoCtrl', NotifyDemoCtrl);

    NotifyDemoCtrl.$inject = ['Notify', '$timeout'];
    function NotifyDemoCtrl(Notify, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.msgHtml = '<em class="fa fa-check"></em> Message with icon..';

          vm.notifyMsg = 'Some messages here..';
          vm.notifyOpts = {
            status: 'danger',
            pos: 'bottom-center'
          };

          //// Service usage example
          //  Notify.alert(
          //      'You are currently replacing [resource name] <a class="btn btn-primary btn-inverse" href="#">Cancel Replacement</a>',
          //      {status: 'warning', timeout: 0, pos: 'top-center'}
          //
          //  );
        }
    }
})();
