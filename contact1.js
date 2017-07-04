var app = angular.module("contactApp1", []);

app.controller("contactCtrl", contactCtrl);
app.controller("headerContactCtrl", headerContactCtrl);
app.controller("footerContactCtrl", footerContactCtrl);
//value Service - it can be data or object
app.value("AppNameSVC", "My Contact Application");
// constant Service
app.constant("AppDataSvc", {
    "name": "My Contact Application",
    "author": "Vivek",
    "company": "Cycleon",
    "version": 1
});

//function Service

//in factory we pass teh function where as value service we executre the function and pass the value
//factory service needs to function to get the object details we create the object manually, but with service it gets created with new operaor ( this)
// Use this when you want to return anything EX: Object , Primitive or function
app.factory("AppDataFactorySvc",prepareAppConfig);

//service we call the constructor of he function 
// This would always return an object. It should be preferred since the introduction of Angular 2. If plans are made to migrate in future

app.service("AppDataServiceSvc",new AppConfigService());

function prepareAppConfig(AppNameSVC){
    var value={};
    value.name=AppNameSVC; // If we use factory service is becuase we can use one service(value) into this and executes
    value.author="Vivek";
    value.builtDate= new Date().toDateString();
return value;

}


function AppConfigService(AppNameSVC){
    
    this.name=AppNameSVC; // If we use factory service is becuase we can use one service(value) into this and executes
    this.author="Vivek";
    this.builtDate= new Date().toDateString();

}
function contactCtrl() {
    this.contactList = [
        {
            "gender": "male",
            "name": { "title": "mr", "first": "orósio", "last": "da luz" },
            "location": { "street": "6509 rua treze de maio ", "city": "campos dos goytacazes", "state": "sergipe", "postcode": 12531 },
            "email": "orósio.daluz@example.com",
            "login": { "username": "brownrabbit829", "password": "duane", "salt": "nn5RUbqL", "md5": "9cbb900037e1c936433e2264c932d12d", "sha1": "e948b69d7de8689b7b69efd6caed3316dd7c1af6", "sha256": "0dfcaa050935ae3a9aa05270f1aaa529fa988343ba90581857ebf01adf98cdd5" },
            "dob": " -03-21 02:26:38", "registered": "2007-06-23 07:26:08", "phone": "(47) 7535-5816", "cell": "(99) 9416-6085",
            "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/men/96.jpg", "medium": "https://randomuser.me/api/portraits/med/men/96.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg" }, "nat": "BR"
        },
        {
            "gender": "female",
            "name": { "title": "miss", "first": "addison", "last": "slawa" },
            "location": { "street": "9536 22nd ave", "city": "chatham", "state": "alberta", "postcode": 16988 },
            "email": "addison.slawa@example.com",
            "login": { "username": "crazyrabbit382", "password": "justice", "salt": "JuWluzcu", "md5": "5aef51076497d19b55ba68b4d4d40fe6", "sha1": "4b55045c02befdc842331dfd27bf026f9d80a7be", "sha256": "6b5a85cc85b84577f4094b79dde39048b725f38ea25d1b3ea2def30c20dd14b0" },
            "dob": "1989-01-08 23:06:16", "registered": "2009-06-13 07:47:25", "phone": "332-376-6853", "cell": "598-950-8543",
            "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/women/0.jpg", "medium": "https://randomuser.me/api/portraits/med/women/0.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/0.jpg" }, "nat": "CA"
        },
        {
            "gender": "male",
            "name": { "title": "mr", "first": "brett", "last": "lane" },
            "location": { "street": "1387 victoria road", "city": "ballina", "state": "offaly", "postcode": 16012 },
            "email": "brett.lane@example.com",
            "login": { "username": "brownlion463", "password": "joseph", "salt": "n9pFX10O", "md5": "1a539fee6fb509a67567a519ee1a310e", "sha1": "0f22a2cd4cb0ed08411bc2f0a01985b321017d3b", "sha256": "9dfbc4107e91494377a64055497092e7b87b9f8b992e6ff3a4ff758830533bf9" },
            "dob": "1954-03-09 10:32:41", "registered": "2009-03-09 07:34:39", "phone": "071-933-2242", "cell": "081-771-0079",
            "id": { "name": "PPS", "value": "6702722T" }, "picture": { "large": "https://randomuser.me/api/portraits/men/15.jpg", "medium": "https://randomuser.me/api/portraits/med/men/15.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg" }, "nat": "IE"
        }
    ];
    this.selectedContact = this.contactList[2];
    this.selectContact = function (indx) {
        this.selectedContact = this.contactList[indx];
    }
}

function headerContactCtrl(AppNameSVC) {
    this.appname = AppNameSVC;
}

//function footerContactCtrl(AppDataSvc) {
  //  this.appname = AppDataSvc;
//}

//function footerContactCtrl(AppDataFactorySvc){
  //  this.appname=AppDataFactorySvc.name;
//}

function footerContactCtrl(AppDataServiceSvc){
this.appname=AppDataServiceSvc;
}