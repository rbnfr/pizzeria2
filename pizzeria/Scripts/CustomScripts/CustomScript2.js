angular.module('Pizzeria', ['ngMaterial'])

    .controller('card', function ($scope) {
        $scope.imagePath = '~/Views/Pizzas/img/Campina.jpg';
    })
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
        $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
        $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    });