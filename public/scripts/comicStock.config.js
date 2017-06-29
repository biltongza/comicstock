'use strict';

(function () {
    angular
        .module('comicStock')
        .config(['$ocLazyLoadProvider', lazyLoadConfig])
        .config(['$stateProvider', stateConfig]);

    function lazyLoadConfig($ocLazyLoadProvider) {
        const IssuesPage = {
            name: 'IssuesPage',
            files: [
                'scripts/pages/issues/issues.component.js',
                'scripts/pages/issues/issueDetail.component.js',
                'scripts/pages/issues/orderIssue.component.js'
            ]
        };
        const SuppliersPage = {
            name: 'SuppliersPage',
            files: [
                'scripts/pages/suppliers/suppliers.component.js'
            ]
        };
        const OrdersPage = {
            name: 'OrdersPage',
            files: [
                'scripts/pages/orders/orders.component.js'
            ]
        };
        const ComponentsLib = {
            name: 'ComponentsLib',
            files: [
                'scripts/components/components.module.js',
                'scripts/components/headerBar/headerBar.component.js',
                'scripts/components/crudList/crudList.component.js',
                'scripts/components/crudItem/crudItem.component.js',
                'scripts/components/confirmDialog/confirmDialog.component.js'
            ]
        };
        const config = {
            modules: [
                IssuesPage,
                SuppliersPage,
                OrdersPage,
                ComponentsLib
            ]
        };
        $ocLazyLoadProvider.config(config);
    }

    function stateConfig($stateProvider) {
        const homeState = {
            name: "Home",
            url: '',
            templateUrl: 'templates/root.html'
        };
        const issuesState = {
            name: 'Issues',
            url: '/issues',
            component: 'issueGrid',
            resolve: {
                loadIssues: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('IssuesPage');
                }]
            }
        };
        const displayIssueState = {
            name: 'Issues.Issue',
            url: '/{issueId}',
            component: 'issueDetail',
            modal: true,
            resolve: {
                item: ['Issues', '$stateParams', function (Issues, $stateParams) {
                    return Issues.get({ id: $stateParams.issueId });
                }]
            }
        }
        const orderIssueState = {
            name: 'Issues.Issue.Order',
            url: '/order',
            component: 'orderIssue',
            modal: true
        }
        const suppliersState = {
            name: 'Suppliers',
            url: '/suppliers',
            component: 'supplierList',
            resolve: {
                loadSuppliers: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('SuppliersPage');
                }]
            },
        };
        const editSupplierState = {
            name: 'Suppliers.Supplier',
            url: '/{supplierId}',
            modal: true,
            component: 'crudItem',
            resolve: {
                item: ['Suppliers', '$stateParams', function (Suppliers, $stateParams) {
                    return Suppliers.get({ id: $stateParams.supplierId });
                }]
            },
            params: {
                model: null,
                onDelete: null,
                onSave: null,
                saveText: null,
                showDelete: true
            }

        };
        const orderState = {
            name: 'Orders',
            url: '/orders',
            component: 'orderList',
            resolve: {
                loadOrders: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('OrdersPage');
                }]
            }
        };
        const otherwiseState = {
            name: "otherwise",
            url: "*path",
            templateUrl: 'templates/404.html'
        };

        $stateProvider.state(homeState);
        $stateProvider.state(issuesState);
        $stateProvider.state(displayIssueState);
        $stateProvider.state(orderIssueState);
        $stateProvider.state(suppliersState);
        $stateProvider.state(editSupplierState);
        $stateProvider.state(orderState);
        $stateProvider.state(otherwiseState);

    };
})();