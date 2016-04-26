// Routes 

angular.module('angularWP').config(function($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'wp-content/themes/angularwp/templates/ngwp-front-page.php',
		controller: 'frontpageController',
		controllerAs: 'vm'
	})
	.when('/index', {
		templateUrl: 'wp-content/themes/angularwp/templates/ngwp-index.php',
		controller: 'indexController',
		controllerAs: 'vm'
	})
	.when('/post/:id/:title', {
		templateUrl: 'wp-content/themes/angularwp/templates/ngwp-single.php',
		controller: 'postController',
		controllerAs: 'vm'
	})
	.when('/page/:id/:title', {
		templateUrl: 'wp-content/themes/angularwp/templates/ngwp-page.php',
		controller: 'pageController',
		controllerAs: 'vm'
	});
});