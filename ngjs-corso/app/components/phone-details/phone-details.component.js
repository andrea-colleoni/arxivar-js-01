angular.module('phoneDetails')
.component('phoneDetails', { // phoneDetails component in JS diventa <phone-details> tag nei template
    templateUrl: 'components/phone-details/phone-details.template.html',
    controller: ['$routeParams', function PhoneDetailsController($routeParams) {
        this.phoneId = $routeParams.phoneId;
    }]
});