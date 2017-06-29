'use strict';

(function () {
  angular.module('comicStock.components')
    .component('crudItem', {
      templateUrl: 'scripts/components/crudItem/crudItem.template.html',
      bindings: {
        resolve: '=',
        modalInstance: '<'
      },
      controller: ['$uibModal', '$stateParams', '$q', CrudItemController]
    });

  function CrudItemController($uibModal, $stateParams, $q) {
    let $ctrl = this;
    $ctrl.delete = Delete;
    $ctrl.close = Close;
    $ctrl.save = Save;
    $ctrl.$onInit = OnInit;
    $ctrl.loading = true;

    function OnInit() {
      $ctrl.item = $ctrl.resolve.item;
      $ctrl.onSave = $ctrl.resolve.onSave || $stateParams.onSave;
      $ctrl.onDelete = $ctrl.resolve.onDelete || $stateParams.onDelete;
      $ctrl.properties = Object.keys($ctrl.item);
      $ctrl.showDelete = $ctrl.resolve.showDelete || $stateParams.showDelete;
      $ctrl.saveText = $ctrl.resolve.saveText || $stateParams.saveText;
      $ctrl.model = $ctrl.resolve.model || $stateParams.model;
      if(!$ctrl.model) {
        $ctrl.modalInstance.dismiss('no model');
      }
      $ctrl.loading = false;
    };

    function Save() {
      $ctrl.loading = true;
      let promise = $ctrl.onSave($ctrl.item);
      return $q.resolve(promise).then(function () {
        return $ctrl.modalInstance.close('saved');
      }, function (reason) {
        return $ctrl.modalInstance.dismiss(reason);
      }).finally(function() {
        $ctrl.loading = false;
      });
    };

    function Close() {
      return $ctrl.modalInstance.close('closed');
    };


    function Delete() {
      
      return $uibModal.open({
        component: 'confirmDialog',
        resolve: {
          header: function () { return 'Confirm Delete'; },
          message: function () { return 'Are you sure you want to delete this item?' }
        }
      }).result.then(function () {
        $ctrl.loading = true;
        return $q.resolve($ctrl.onDelete($ctrl.item))
          .then(function () {
            $ctrl.modalInstance.close('deleted');
          }, function (reason) {
            $ctrl.modalInstance.dismiss(reason);
          });
      }, function () {
        //do nothing
      }).finally(function() {
        $ctrl.loading = false;
      });
    };

  }
})();