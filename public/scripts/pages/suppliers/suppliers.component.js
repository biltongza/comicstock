'use strict';

(function () {
    angular.module('comicStock.pages')
        .component('supplierList', {
            templateUrl: 'scripts/pages/suppliers/suppliers.template.html',
            controller: ['Suppliers', '$stateParams', '$state', '$q', SupplierListController]
        });

    function SupplierListController(Suppliers, $stateParams, $state, $q) {
        let $ctrl = this;
        $ctrl.add = Add;
        $ctrl.save = Save;
        $ctrl.delete = Delete;
        $ctrl.onItemClick = OnItemClick;
        $ctrl.loading = true;
        $q.resolve(Suppliers.query().$promise).then(function(suppliers) {
            $ctrl.items = suppliers;
        }).finally(function() {
            $ctrl.loading = false;
        });

        $ctrl.model = [
            { name: 'id', isImage: false, displayName: 'ID' },
            { name: 'name', isImage: false, displayName: 'Name' },
            { name: 'city', isImage: false, displayName: 'City' },
            { name: 'reference', isImage: false, displayName: 'Reference' }
        ];


        function Save(supplier) {
            return Suppliers.update(null, supplier, HandleSuccess, HandleRejection).$promise; 
        };
        function Delete(supplier) { 
            return Suppliers.delete(null, supplier, HandleSuccess, HandleRejection).$promise; 
        };
        function Add(supplier) { 
            return Suppliers.save(null, supplier, HandleSuccess, HandleRejection).$promise; 
        };

        function OnItemClick(supplier) {
            return $state.go('.Supplier', { 
                supplierId: supplier.id, 
                model: $ctrl.model, 
                onSave: $ctrl.save, 
                onDelete: $ctrl.delete 
            });
        };

        function HandleSuccess() {
            toastr.success('Success');
            return RefreshSuppliers();
        }

        function HandleRejection(reason) {
            toastr.error(reason, 'Something went wrong');
            return RefreshSuppliers();
        }

        function RefreshSuppliers() {
            $ctrl.loading = true;
            $ctrl.items = [];
            return $q.resolve(Suppliers.query().$promise).then(function(suppliers) {
                $ctrl.items = suppliers;
                $ctrl.loading = false;
            });
        };

    }
})();