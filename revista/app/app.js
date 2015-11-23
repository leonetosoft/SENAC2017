
//criando app
var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngMaterial']);

app.config(['$routeProvider',
    function ($routeProvider) {
    $routeProvider.
    when('/home', {
        title: 'home',
        templateUrl: 'partials/layout.html',
        controller: 'homeController'
    })
    .otherwise({
        redirectTo: '/home'
    });
}])
.run(function ($rootScope) {
    $rootScope.$on("$routeChangeStart", function () {
    });
});
