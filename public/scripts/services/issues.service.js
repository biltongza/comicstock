'use strict';

(function () {
    angular
        .module('comicStock.services')
        .factory('Issues', ['$resource', IssuesFactory]);

    function IssuesFactory($resource) {
        return $resource('http://frontendshowcase.azurewebsites.net/api/Issues/:id', { id: '@id' }, {
            update: { method: 'PUT' }
        });
    };
})();