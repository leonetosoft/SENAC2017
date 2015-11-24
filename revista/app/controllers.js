//controla a aplicação
app.controller('homeController', function ($scope,$mdSidenav, ngAudio) {

  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $scope.playSound = function(){
  	$scope.sound = ngAudio.load("sounds/folhosa.mp3"); // returns NgAudioObject
  	$scope.sound.play();
  }

});