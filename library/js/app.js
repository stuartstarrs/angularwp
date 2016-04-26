// Module

angular.module('angularWP', ['ngRoute', 'ngResource']);
// Controllers

angular.module('angularWP')

// Controllers for views
.controller('frontpageController', ['$http', '$resource', '$filter', '$routeParams', function($http, $resource, $filter, $routeParams) {
	
}])

.controller('indexController', ['$http', '$resource', '$filter', '$routeParams', function($http, $resource, $filter, $routeParams) {
	
}])

.controller('pageController', ['$http', '$resource', '$filter', '$routeParams', function($http, $resource, $filter, $routeParams) {
	
}])

.controller('postController', ['$http', '$resource', '$filter', '$routeParams', function($http, $resource, $filter, $routeParams) {
	
}]);
// Routes 

angular.module('angularWP').config(function($routeProvider) {

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
	});
});
// Services (or Factories)

angular.module('angularWP')

// Factory for returning posts for getting posts 
.factory('PostService', ['$http', function($http) {
	function getAllPosts() {
		return {};
	}

	function getPost(id) {
		return {};
	}

	function fetchFromAPI(api_url) {
		return {};
	}

	return {};
}]);