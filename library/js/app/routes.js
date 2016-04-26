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