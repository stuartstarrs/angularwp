
// Module

var angularWP = angular.module('angularWP', ['ngRoute', 'ngResource']);



// Routes 

angularWP.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'wp-content/themes/angularwp/templates/ngwp-front-page.php',
		controller: 'frontpageController'
	})
});


// Services 



// Controllers

angularWP.controller('frontpageController', ['$scope', function($scope){
	


}]);

angularWP.controller('indexController', ['$scope', '$resource', '$filter', '$routeParams', function($scope, $resource, $filter, $routeParams){



}]);



