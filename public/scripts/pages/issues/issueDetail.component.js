'use strict';

(function () {
  angular.module('comicStock.pages')
    .component('issueDetail', {
      templateUrl: 'scripts/pages/issues/issueDetail.template.html',
      bindings: {
        resolve: '=',
        modalInstance: '='
      },
      controller: ['$q', IssueDetailController]
    })

  function IssueDetailController($q) {
    let $ctrl = this;
    $ctrl.ok = ok;
    $ctrl.$onInit = OnInit;
    $ctrl.loading = true;
    
    function OnInit() {
      if ($ctrl.resolve.item) {
        $q.when($ctrl.resolve.item.$promise, function(item){
          $ctrl.item = MapItem(item);
        }).finally(function(){
          $ctrl.loading = false;
        });
      }
    };

    function ok() {
      $ctrl.modalInstance.close();
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
  }
})();