angular.module('phoneDetails')
.component('phoneDetails', { // phoneDetails component in JS diventa <phone-details> tag nei template
    templateUrl: 'components/phone-details/phone-details.template.html',
    controller: ['$routeParams', 'Phone', function PhoneDetailsController($routeParams, Phone) {
        this.phoneId = $routeParams.phoneId;

        /*
        var self = this;
        $http.get(`data/${this.phoneId}.json`).then((resp) => {
            self.phone = resp.data;
            self.selectedImage = self.phone.images[0]; 
        });
        */
        this.phone = Phone.get({phoneId: this.phoneId}, (phone) => {
            this.selectedImage = phone.images[0]; 
        });

        this.setImage = function(imgUrl) {
            this.selectedImage = imgUrl;
        }
    }]
});