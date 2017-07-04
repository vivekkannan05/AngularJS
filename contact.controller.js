
(function () {
    var app = angular.module("contactApp");
    app.controller("contactCtrl", contactCtrl);

    function contactCtrl(ContactDataSvc) {
        var self = this;
        // self.editMode=false;
        self.addMode = false;
        ContactDataSvc.getContactList().then(function (data) {
            self.contactList = data;
        })

        this.selectContact = function (indx) {
            this.selectedContact = this.contactList[indx];
            self.successMsg = undefined;
            self.errorMsg = undefined;
        }
        this.editDetails = function () {
            this.editMode = true;
        }

        this.saveDetails = function () {
            var userData = this.selectedContact;
            if (self.addMode) {
                ContactDataSvc.addContact(userData)
                    .then(function () {
                        self.successMsg = "Contact Saved Successfully";
                    },
                    function () {
                        self.errorMsg = "There was an error while saving";
                    })
            } else {
                ContactDataSvc.saveContact(userData)
                    .then(function () {
                        self.successMsg = "Contact Saved Successfully";
                    },
                    function () {
                        self.errorMsg = "There was an error while saving";
                    })
            }
            self.addMode = false;
            this.editMode = false;

        }
        this.addContacDetails = function () {
            this.selectedContact = {
                "id": new Date().toTimeString()
            };
            this.editMode = true;
            self.addMode = true;
        }

    }

})();