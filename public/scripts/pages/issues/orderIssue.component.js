'use strict';

(function () {
  angular
    .module('comicStock.pages')
    .component('orderIssue', {
      templateUrl: 'scripts/pages/issues/orderIssue.template.html',
      bindings: {
        modalInstance: '='
      },
      controller: ['Issues', '$stateParams', 'Suppliers', 'OrdersForSupplier', '$q', '$state', OrderIssueController]
    });

  function OrderIssueController(Issues, $stateParams, Suppliers, OrdersForSupplier, $q, $state) {
    let $ctrl = this;
    $ctrl.close = close;
    $ctrl.item = null;
    $ctrl.selectedSupplier = null;
    $ctrl.conditions = [
      'veryFine',
      'fine',
      'good',
      'poor'
    ];
    $ctrl.orderQuantities = {};
    for(let i = 0; i < $ctrl.conditions.length; i++) {
      let condition = $ctrl.conditions[i];
      $ctrl.orderQuantities[condition] = 0;
    }
    $ctrl.suppliers = [];
    $ctrl.$onInit = onInit;
    $ctrl.loading = true;
    $ctrl.suppliersLoading = true;
    $ctrl.AddOrderQuantity = addOrderQuantity;
    $ctrl.SubtractOrderQuantity = subtractOrderQuantity;
    $ctrl.order = order;

    function onInit() {
      $q.resolve(Issues.get({ id: $stateParams.issueId }).$promise).then(function (issue) {
        $ctrl.loading = false;
        $ctrl.item = MapItem(issue);
        $q.resolve(Suppliers.query().$promise).then(function (issueSuppliers) {
          $ctrl.suppliersLoading = false;
          $ctrl.suppliers = issueSuppliers;
        });
      });

    }
    function close() {
      return $ctrl.modalInstance.close();
    }
    function MapItem(item) {
      return {
        id: item.id,
        image: item.thumbnail.pathIncludingExtension,
        title: item.title,
        publisher: item.publisher,
        description: item.description,
        seriesNumber: item.seriesNumber,
        publicationDate: new Date(item.publicationDate).toDateString()
      };
    };
    function addOrderQuantity(condition) {
      $ctrl.orderQuantities[condition]++;
    }
    function subtractOrderQuantity(condition) {
      $ctrl.orderQuantities[condition]--;
    }
    function order() {
      $ctrl.loading = true;
      $q.when(OrdersForSupplier.order({
        issueId: $stateParams.issueId,
        supplierId: $ctrl.selectedSupplier.id
      }, $ctrl.orderQuantities).$promise).then(SuccessHandler, RejectionHandler)
      .finally(function() {
        $ctrl.loading = false;
      })
    }
    function SuccessHandler(value) {
      toastr.success('Success');
      console.log(value);
      $state.go('Issues');
    }
    function RejectionHandler(reason) {
      toastr.error('Something went wrong');
      console.log(reason);
    }
  }
})();