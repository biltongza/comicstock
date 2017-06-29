'use strict';

(function () {

    angular
        .module('comicStock.services')
        .factory('Orders', ['$resource', OrdersFactory]);

    function OrdersFactory($resource) {
        return $resource('http://frontendshowcase.azurewebsites.net/api/Orders/:id', { id: '@id' }, {
            query: { method: 'GET', isArray: true },
            save: { method: 'PUT' },
            delete: { method: 'DELETE' },
        });
    }
})();