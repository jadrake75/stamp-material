(function(angular) {
    "use strict";

    var services = angular.module('stampweb.services.catalogues', ['core.services', 'restangular']);
    var core = angular.module('core.services');

    services.factory('Catalogues', function ($rootScope, $q, Restangular, $timeout, $location, $http) {
        angular.injector().invoke(core.AbstractService, this, {
            $rootScope: $rootScope,
            ctx: this,
            $q: $q,
            Restangular: Restangular,
            $timeout: $timeout,
            $location: $location,
            $http: $http
        });
        this.getResourceName = function () {
            return 'catalogues';
        };

        return this;
    });

})(angular);