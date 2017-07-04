
(function(){
    var app = angular.module("contactApp");
    app.controller("headerContactCtrl",headerContactCtrl);
    function headerContactCtrl(AppNameSVC) {
    this.appname = AppNameSVC;
}
})();