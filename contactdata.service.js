(function () {
    var app = angular.module("contactApp");
    app.service("ContactDataSvc", function ($http) {
    var self=this;
        self.getContactList=function(){
       var promise1 = $http.get('http://localhost:3000/contacts');
        var promise2 = promise1.then(function(response){
            return response.data;
        });
        return promise2;
    }
    self.saveContact=function(userData){
       return $http.put('http://localhost:3000/contacts/'+userData.id,userData)
        .then(function(response){
            console.log(response);
        })
    }

      self.addContact=function(userData){
       return $http.post('http://localhost:3000/contacts/',userData)
        .then(function(response){
            console.log(response);
        })
    }

    });
})();