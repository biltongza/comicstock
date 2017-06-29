'use strict';

(function () {
    angular.module('comicStock.components')
        .component('confirmDialog', {
            templateUrl: 'scripts/components/confirmDialog/confirmDialog.template.html',
            bindings: { resolve: '<', modalInstance: '=' },
            controller: ConfirmDialogController
        });

    function ConfirmDialogController() {
        const $ctrl = this;
        $ctrl.close = function () { return $ctrl.modalInstance.dismiss('cancel'); }
        $ctrl.confirm = function () { return $ctrl.modalInstance.close(); }
        $ctrl.$onInit = function () {
            $ctrl.header = $ctrl.resolve.header;
            $ctrl.message = $ctrl.resolve.message;
        };
    }
})();