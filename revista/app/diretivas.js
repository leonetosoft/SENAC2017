//novas diretivas
app.directive('menuDeslizante', function () {
  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'partials/menu_deslizante.html',
    scope : false,
    controller : function($scope){

    }
  };
});
 
app.directive('conteudo', function () {
  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'partials/conteudo.html',
    scope : false,
    controller : function($scope){

    }
  };
});

app.directive('menuHeader', function () {
  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'partials/menu_header.html',
    scope : false,
    controller : function($scope){

    }
  };
});

app.directive('menuHeaderOpcoes', function () {
  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'partials/menu_header_opcoes.html',
    scope : false,
    controller : function($scope){

    }
  };
});
 