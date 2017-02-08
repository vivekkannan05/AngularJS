var app = angular.module("toDoApp",[]);

app.controller("toDoCtrl",toDoCtrl);

function toDoCtrl(){
    this.todoList = ["Concentrate","Focus","Deliver"];
    this.add = function(){
        this.todoList.push(this.toDoInput);
        this.toDoInput="";
    }
  
   this.editToDoList= function(){
        this.editFlag=true;
    }

    this.doneEdit = function(){
        this.editFlag=false;
    }

    this.deleteToDo = function(toDo){
        this.todoList.splice(this.todoList.indexOf(toDo),1);
    }
}