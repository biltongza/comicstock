'use strict';

(function () {
  angular.module('comicStock.services')
    .factory('SuppliersForIssue', ['$resource', SuppliersForIssueService])

  function SuppliersForIssueService($resource) {
    return $resource('http://frontendshowcase.azurewebsites.net/api/Suppliers/:issueId/stock/0/Get', { issueId: '@issueId' });
  }
})();