angular.module('core')
.filter('checkmark', function checkmark() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    }
});