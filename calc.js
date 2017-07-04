var app = angular.module("calculatorApp",[]);

app.controller("ctrl",calculate); 

function calculate($scope){
    $scope.calculate = function() {
        $scope.resultVal = eval($scope.num1 + $scope.operator + $scope.num2);
    }
}