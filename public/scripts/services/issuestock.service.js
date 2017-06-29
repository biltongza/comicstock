'use strict';

(function () {
  angular
    .module('comicStock.services')
    .factory('IssueStock', ['$resource', IssueStockFactory]);
    
  function IssueStockFactory($resource) {
    return $resource('http://frontendshowcase.azurewebsites.net/api/Issues/:issueId/stock/:stockId', { issueId: '@issueId', stockId: '@stockId' });
  }
})();