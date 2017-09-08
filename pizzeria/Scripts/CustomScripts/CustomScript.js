var pizzaApp = angular
    .module('Pizzeria', ['ngMaterial', 'ngRoute'])
    .controller('AppCtrl', function ($scope, $timeout, $mdSidenav) {
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function () {
                $mdSidenav(componentId).toggle();
            };
        }
    });

pizzaApp.config(function ($routeProvider){
    $routeProvider
        .when('/', {
            template:'<h1>Index</h1>'
        })
        .when('/pizzas',{
            templateUrl:'Content/pizzas/listPizzas.html'
        })
        .when('/addPizzas', {
            templateUrl: 'Content/pizzas/addPizzas.html'
        })
        .otherwise({
            template:'<h1>Pagina no existente</h1>'
        })
});

pizzaApp.controller('CardCtrl', function ($scope) {
    $scope.imagePath = 'img/washedout.png';
});

pizzaApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});