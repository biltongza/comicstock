'use strict';

(function () {

    angular
        .module('comicStock.services')
        .factory('Orders', ['$resource', OrdersFactory]);

    function OrdersFactory($resource) {
        return $resource('http://frontendshowcase.azurewebsites.net/api/Orders', { }, {
            query: { method: 'GET', isArray: true }
        });
    }
})();