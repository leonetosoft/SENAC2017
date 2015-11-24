//controla a aplicação
app.controller('homeController', function ($scope,$mdSidenav, ngAudio) {

  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $scope.playSound = function(nome){
  	$scope.sound = ngAudio.load("sounds/" + nome); // returns NgAudioObject
  	$scope.sound.play();
  }

});