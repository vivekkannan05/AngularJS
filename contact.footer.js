(function(){
var app = angular.module("contactApp");
app.controller("footerContactCtrl", footerContactCtrl);
function footerContactCtrl(AppNameSVC) {
    this.appname = AppNameSVC;
}
})();