'use strict';

(function () {
    angular.module('comicStock.components')
        .component('crudList', {
            templateUrl: 'scripts/components/crudList/crudList.template.html',
            bindings: {
                items: '=',
                model: '=',
                onAdd: '=',
                primaryKey: '=',
                itemState: '=',
                onItemClick: '='
            },
            controller: ['$filter', '$uibModal', CrudListController]
        });

    function CrudListController($filter, $uibModal) {
        const $ctrl = this;
        $ctrl.totalItems = 0;
        $ctrl.currentPage = 1;
        $ctrl.itemsPerPage = 10;
        $ctrl.activeItems = [];
        $ctrl.filteredItems = [];
        $ctrl.searchString = '';
        $ctrl.sortType = '';
        $ctrl.reverseOrder = false;
        $ctrl.$onInit = OnInit;
        $ctrl.add = Add;
        $ctrl.setPagingData = SetPagingData;
        $ctrl.applyFilters = ApplyFilters;

        function OnInit() {
            $ctrl.primaryKey = $ctrl.model.filter(function (i) { return i.name === $ctrl.primaryKey; })[0] || $ctrl.model[0].name;
            $ctrl.sortType = $ctrl.primaryKey;
            $ctrl.orderBy = $ctrl.primaryKey;
            $ctrl.applyFilters();
        };

        function ApplyFilters() {
            $ctrl.filteredItems = $filter('filter')($ctrl.items, { $: $ctrl.searchString });
            $ctrl.filteredItems = $filter('orderBy')($ctrl.filteredItems, $ctrl.sortType, $ctrl.reverseOrder);
            $ctrl.totalItems = $ctrl.filteredItems.length;
            $ctrl.setPagingData($ctrl.currentPage);
        };
        function SetPagingData(page) {
            let pagedData = $ctrl.filteredItems.slice(
                (page - 1) * $ctrl.itemsPerPage,
                page * $ctrl.itemsPerPage
            );
            $ctrl.activeItems = pagedData;
        };

        function Add() {
            return $uibModal.open({
                component: 'crudItem',
                resolve: {
                    item: CreateEmptyItemFromModel,
                    showDelete: function () { return false; },
                    saveText: function () { return 'Add'; },
                    onSave: function () { return $ctrl.onAdd },
                    model: function () { return $ctrl.model; }
                }
            }).result.then(HandleSuccess, HandleRejection);
        };

        function CreateEmptyItemFromModel() {
            const item = {};
            for (let i = 0; i < $ctrl.model.length; i++) {
                let prop = $ctrl.model[i].name;
                item[prop] = null;
            }
            return item;
        };
        function HandleSuccess(value) {
            if (value !== 'closed') {
                $ctrl.applyFilters();
            }
        };

        function HandleRejection(reason) {
            if (reason !== 'cancel' && reason !== 'backdrop click') {
                toastr.error('Something went wrong: ' + reason);
            }
        };

    }
})();