
//criando app
var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngMaterial', 'ngAudio']);

app.config(['$routeProvider',
    function ($routeProvider) {
    $routeProvider.
    when('/home', {
        title: 'home',
        templateUrl: 'partials/layout.html',
        controller: 'homeController'
    }).
    when('/home/:pag?', {
        title: 'home',
        templateUrl: 'partials/layout.html',
        controller: 'homeController'
    })
    .otherwise({
        redirectTo: '/home'
    });
}])
.run(function ($rootScope, $location, $route) {
    $rootScope.$on("$routeChangeStart", function () {
    });

    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
            });
        }
        return original.apply($location, [path]);
    };
});
