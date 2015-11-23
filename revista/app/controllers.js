//controla a aplicação
app.controller('homeController', function ($scope,$mdSidenav) {

  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

});