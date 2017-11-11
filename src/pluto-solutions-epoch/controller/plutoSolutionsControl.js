
var app = angular.module("plutoSolutions", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            //templateUrl: 'contactList.html',
            //controller: 'contactControl'
        })
        .otherwise({
            template: 'No Content Available!'
        });
}]);

app.controller("plutoSolutionsControl", ['$scope', '$location', '$routeParams', '$route', function ($scope, dataService, $location, $routeParams, $route) {
    $scope.a = 0;
    $scope.b = 0;

    console.log('in control...');

    if ($routeParams.a) {
        $scope.a = $routeParams.a;
    }

    if ($routeParams.b) {
        $scope.b = $routeParams.b;
    }

    if ($routeParams.option && $routeParams.a && $routeParams.b) {
        switch ($routeParams.option) {
            case 'add':
                $scope.isLoading = true;
                dataService.add($scope.a, $scope.b, function (result) {
                    $scope.result = result;
                    $scope.isLoading = false;
                });
                break;

            case 'multiply':
                $scope.isLoading = true;
                dataService.multiply($scope.a, $scope.b, function (result) {
                    $scope.result = result;
                    $scope.isLoading = false;
                });
                break;

            default:
                break;
        }
    }

    $scope.doAdd = function () {
        var path = '/calculate/add/' + $scope.a + '/' + $scope.b;
        if ($location.path() == path) {
            $route.reload();
        } else {
            $location.url(path);
        }
    }

    $scope.doMultiply = function () {
        var path = '/calculate/multiply/' + $scope.a + '/' + $scope.b;
        if ($location.path() == path) {
            $route.reload();
        } else {
            $location.url(path);
        }
    }

    $scope.updateResult = function () {
        // updateParams will update the value of route parameters before reloading
        $route.updateParams({
            a: $scope.a,
            b: $scope.b
        })
    }
}]);

app.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function (e, curr, prev) {
        console.log('in $routeChangeStart');
    });

    $rootScope.$on('$routeChangeSuccess', function (e, curr, prev) {
        console.log('in $routeChangeSuccess');
    });

    $rootScope.$on('$locationChangeStart', function (e, currUrl, prevUrl, currState, prevState) {
        //console.log('in $locationChangeStart url : ' + currUrl + ', state: ' + currState);
    });

    $rootScope.$on('$locationChangeSuccess', function (e, currUrl, prevUrl, currState, prevState) {
        //console.log('in $locationChangeSuccess url : ' + currUrl + ', state: ' + currState);
    });
}]);