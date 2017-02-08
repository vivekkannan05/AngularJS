var app=angular.module("loopingApp",[]);

app.controller("loopCtrl",loopCtrl);
function loopCtrl(){
       this.myList=[
        {"name":"Vivek","age":25},
        {"name":"Suja","age":20},
        {"name":"Kannan","age":50},
        {"name":"Revathi","age":45},
        {"name":"Mithran","age":1}];
}
