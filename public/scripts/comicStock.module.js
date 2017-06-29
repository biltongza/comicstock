'use strict';
(function() {
    angular.module('comicStock', [
        'ng',
        'ngResource',
        'ngRoute',
        'oc.lazyLoad',
        'comicStock.pages',
        'comicStock.components',
        'comicStock.services',
        'ui.router',
        'angular-spinkit',
        'camelCaseToHuman'
    ])
})();