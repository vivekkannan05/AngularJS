    var module = angular.module("clockDemo",[]);
        module.controller("timeDisplay",getCurrentTime);
        function getCurrentTime($scope){
            var currDate = new Date();
            $scope.currTime = currDate.toTimeString();
            $scope.refresh =function(){
            var currDate= new Date();
            $scope.currTime= currDate.toTimeString();
        }   
     }
       