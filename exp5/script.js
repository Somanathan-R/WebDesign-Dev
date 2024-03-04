var app=angular.module("myapp",[]);
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