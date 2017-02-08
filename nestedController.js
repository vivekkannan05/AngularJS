var app = angular.module("nestedController",[]);

app.controller("ctrl1",ctrl1);
app.controller("ctrl2",ctrl2);
/*you dont need to add scope expicitly. 
Since teh controller is used as Syntax. 
The angular will send it (this) */
function ctrl1(){
    this.var1= "From Ctrl1";
}

function ctrl2(){
    this.var1= "From Ctrl2";
}