var app = angular.module("myApp", ["ngRoute"]);
app.controller("myctrl",function($scope){
  $scope.Calculate=function(op){
    switch(op){
      case'+':
        $scope.result=parseInt($scope.n1)+parseInt($scope.n2);
        break;
      case'-':
        $scope.result=parseInt($scope.n1)-parseInt($scope.n2);
        break;
      case'*':
        $scope.result=parseInt($scope.n1)*parseInt($scope.n2);
        break;
      case'/':
        $scope.result=parseInt($scope.n1)/parseInt($scope.n2);
        break;
    }
  }

});
app.config(function ($routeProvider) {
    $routeProvider
      .when("/login", {
        templateUrl: "login-pg.html",
     
      })
      .when("/calculator", {
        templateUrl: "angle.html",
        controller: "myctrl",
      });
  });