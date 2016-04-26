
// Module

angular.module('angularWP', ['ngRoute', 'ngResource'])



// Routes 

.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'wp-content/themes/angularwp/templates/ngwp-front-page.php',
		controller: 'frontpageController'
	})
	.when('/index', {
		templateUrl: 'wp-content/themes/angularwp/templates/ngwp-index.php',
		controller: 'indexController'
	})
	.when('/post/:id/:title', {
		templateUrl: 'wp-content/themes/angularwp/templates/ngwp-single.php',
		controller: 'postController'
	})
	.when('/page/:id/:title', {
		templateUrl: 'wp-content/themes/angularwp/templates/ngwp-page.php',
		controller: 'pageController'
	})
})


// Services 



// Controllers

.controller('frontpageController', ['$scope', function($scope){
	
}])

.controller('indexController', ['$http', '$resource', '$filter', '$routeParams', function($http, $resource, $filter, $routeParams){
	
}]);

