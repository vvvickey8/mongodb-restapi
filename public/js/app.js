(function () {
    'use strict';

    angular.module('app', [
        // Angular modules 
        'ngRoute','ngResource'

        // Custom modules 
        
        // 3rd Party Modules
        
    ]).config(['$routeProvider', function ($routeProvider) {
  $routeProvider
   
    .when("/", { templateUrl: "partial/details.html", controller: "ContactController" })
    .when("/create", { templateUrl: "partial/create.html", controller: "ContactController" })
    .when("/update", { templateUrl: "partial/Update.html", controller: "ContactController" })
    .when("/delete", { templateUrl: "partial/delete.html", controller: "ContactController" })
    .when("/getcontact", { templateUrl: "partial/getbyid.html", controller: "ContactController" })
    .otherwise("/404", {templateUrl: "partials/404.html"});
}]);
})();