'use strict';

(function () {
    angular.module('comicStock.components')
        .component('headerBar', {
            templateUrl: 'scripts/components/headerBar/headerBar.template.html',
            controller: ['$state', HeaderController]
        });

    function HeaderController($state) {
        this.states = $state.get()
            .filter(function (state) {
                return state.name.indexOf('.') === -1 && state.name !== 'otherwise';
            });
    }
})();