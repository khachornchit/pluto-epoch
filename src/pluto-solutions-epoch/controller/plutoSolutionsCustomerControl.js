app.controller("plutoSolutionsCustomerControl", ['$scope', 'plutoSolutionsCustomerService', function ($scope, plutoSolutionsCustomerService) {
    var refresh = function () {
        plutoSolutionsCustomerService.getCustomers().then(function (response) {
            $scope.customers = response.data;
        });
    };

    plutoSolutionsCustomerService.getCustomers().then(function (response) {
        $scope.customers = response.data;
    });

    $scope.addCustomer = function () {
        plutoSolutionsCustomerService.addCustomer($scope.newCustomer).then(function (response) {
            refresh();
        });
    };

}]);