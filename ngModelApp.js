var app= angular.module("ngModelExamples",[]);

app.controller("ExampleCtrl",ExampleCtrl);

function ExampleCtrl($scope){
$scope.texboxChange = function(){
    console.log("The change is made");
}
}