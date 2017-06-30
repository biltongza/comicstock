'use strict';

(function () {
    angular
        .module('comicStock.services')
        .factory('Suppliers', ['$resource', SuppliersFactory]);

    function SuppliersFactory($resource) {
        return $resource('http://frontendshowcase.azurewebsites.net/api/Suppliers/:id', { id: '@id' }, {
            query: { method: 'GET', isArray: true, params: { id: null } },
            get: { method: 'GET' },
            update: { method: 'PUT', params: { id: null } },
            save: { method: 'POST', params: { id: null } }
        });
    }
})();