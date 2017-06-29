'use strict';

(function () {
    angular
        .module('comicStock.pages')
        .component('issueGrid', {
            templateUrl: 'scripts/pages/issues/issues.template.html',
            controller: ['Issues', '$uibModal', '$state', IssueGridController]
        });

    function IssueGridController(Issues, $uibModal, $state) {
        let $ctrl = this;

        $ctrl.save = Save;
        $ctrl.delete = Delete;
        $ctrl.add = Add;
        $ctrl.onItemClick = OnItemClick;
        $ctrl.loading = true;

        $ctrl.model = [
            { name: 'id', displayName: 'ID', isImage: false },
            { name: 'image', displayName: 'Image', isImage: true },
            { name: 'title', displayName: 'Title', isImage: false },
            { name: 'publisher', displayName: 'Publisher', isImage: false }
        ];
        $ctrl.items = Issues.query();
        $ctrl.items.$promise.then(PromiseSuccessHandler, PromiseErrorHandler).finally(function() {
            $ctrl.loading = false;
        });

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

        function PromiseSuccessHandler(value) {
            $ctrl.items = $ctrl.items.map(MapItem);
        };

        function PromiseErrorHandler(reason) {
            toastr.error('Server returned ' + reason.status + ': ' + reason.data.exceptionMessage, 'Error loading data!');
        };

        function Save(issue) { return Issues.update(issue, RefreshIssues); };
        function Delete(issue) { return Issues.delete(issue, RefreshIssues); };
        function Add(issue) { return Issues.save(issue, RefreshIssues); };
        function OnItemClick(issue) {
            $state.go('.Issue', {issueId: issue.id});
        };

        function RefreshIssues() {
            $ctrl.items = Issues.query();
        };
    }
})();