'use strict';

(function () {
  angular.module('comicStock.services')
    .factory('OrdersForSupplier', ['$resource', OrdersForSupplierFactory]);

  function OrdersForSupplierFactory($resource) {
    return $resource('http://frontendshowcase.azurewebsites.net/api/Suppliers/:supplierId/issues/:issueId/order', { supplierId: '@supplierId', issueId: '@issueId' }, {
      order: { method: 'POST' }
    });
  };
})();