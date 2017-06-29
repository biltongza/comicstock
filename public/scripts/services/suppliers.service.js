'use strict';

(function () {
    angular
        .module('comicStock.services')
        .factory('Suppliers', ['$resource', SuppliersFactory]);

    function SuppliersFactory($resource) {
        return $resource('http://frontendshowcase.azurewebsites.net/api/Suppliers/:id', { id: '@id' }, {
            update: { method: 'PUT' }
        });
    }
})();