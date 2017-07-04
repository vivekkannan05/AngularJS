
(function(){
var app = angular.module("contactApp")
app.service("AppDataServiceSvc",function AppConfigService(AppNameSVC){    
    this.name=AppNameSVC; // If we use factory service is becuase we can use one service(value) into this and executes
    this.author="Vivek";
    this.builtDate= new Date().toDateString();
});
})();