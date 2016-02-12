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


