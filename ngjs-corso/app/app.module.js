'use strict';

// Declare app level module which depends on views, and core components
var phonecatApp = angular.module('phonecatApp', [
    // angular built-in modules
    'ngRoute',
    // app shared modules
    'core', 
    // components modules
    'phoneList', 
    'phoneDetails'
]);
