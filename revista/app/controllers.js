//controla a aplicação
app.controller('homeController', function ($scope,$mdSidenav, ngAudio, $http, $routeParams, $route, $location) {
	$scope.materias = [];
	$scope.pagina = $routeParams.pag == undefined ? 0 : $routeParams.pag;

	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	};

	$scope.playSound = function(nome){
  	$scope.sound = ngAudio.load("sounds/" + nome); // returns NgAudioObject
  	$scope.sound.play();
  }

  $scope.setPage = function(pag){
  	//$route.updateParams({pag:pag});
  	$location.path('/home/' + pag, false);
  }	

  $scope.carregarMaterias = function(){
  	$http.get('data/banco.json')
  	.then(function(res){
  		$scope.materias = res.data.materias;

  	});
  }

  $scope.carregarMaterias();
});