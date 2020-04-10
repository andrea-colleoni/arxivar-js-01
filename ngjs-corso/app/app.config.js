angular.module('phonecatApp')
.config(['$routeProvider', function config($routeProvider) {
    $routeProvider
        .when('/phones', {
            template: '<phone-list></phone-list>'
        })
        .when('/phones/:phoneId', {
            template: '<phone-details></phone-details>'
        })
        .otherwise('/phones');
} 
]);