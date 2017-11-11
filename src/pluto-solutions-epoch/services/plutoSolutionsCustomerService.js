
app.config(['plutoSolutionsCustomerServiceProvider', function (plutoSolutionsCustomerServiceProvider) {
    plutoSolutionsCustomerServiceProvider.config('');
}]);

app.provider('plutoSolutionsCustomerService', function () {
    var baseUrl = '';

    this.config = function (url) {
        baseUrl = url;
    };

    this.$get = ['$http', '$log', '$q', function ($http, $log, $q) {
        var objService = {};

        objService.getCustomers = function () {
            var deferred = $q.defer();
            $http({
                url: baseUrl + '/customers',
                method: 'GET'
            }).then(
                function (resp) { deferred.resolve(resp); },
                function (resp) { $log.log('error of web service!'); }
            );
            return deferred.promise;
        };

        return objService;
    }];
});