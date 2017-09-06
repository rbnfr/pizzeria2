var app = angular.module('Pizzeria', ['ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages'])
    .controller('CtrlRegister', function ($scope) {
        $scope.formData = {};
        $scope.passwordStrength = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;
    });