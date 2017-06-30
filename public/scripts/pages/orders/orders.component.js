'use strict';

(function () {
  angular
    .module('comicStock.pages')
    .component('orderList', {
      templateUrl: 'scripts/pages/orders/orders.template.html',
      controller: ['Orders', '$q', OrdersController]
    });

  function OrdersController(Orders, $q) {
    let $ctrl = this;
    $ctrl.loading = true;
    $ctrl.items = [];

    $ctrl.model = [
      { name: 'id', isImage: false, displayName: 'ID' },
      { name: 'total', isImage: false, displayName: 'Total' },
      { name: 'orderDate', isImage: false, displayName: 'Order Date' },
      { name: "deliveryStatus", isImage: false, displayName: 'Delivery Status' },
      { name: "shipmentReference", isImage: false, displayName: 'Shipment Reference' },
      { name: "shipmentDate", isImage: false, displayName: "Shipment Date" }
    ];
    $q.when(Orders.query().$promise, function (orders) {
      $ctrl.items = orders.map(MapItem);

    }).finally(function () {
      $ctrl.loading = false;
    });

    function MapItem(item) {
      return {
        id: item.id,
        total: item.total,
        orderDate: new Date(item.orderDate).toDateString(),
        deliveryStatus: item.deliveryStatus,
        shipmentReference: item.shipmentReference,
        shipmentDate: new Date(item.shipmentDate).toDateString()

      };
    }
  }
})();