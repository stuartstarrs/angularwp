// Module

angular.module('angularWP', ['ngRoute', 'ngResource']);
// Controllers

angular.module('angularWP')

// Controllers for views
.controller('frontpageController', ['$http', '$resource', '$filter', '$routeParams', '$log', 'PostService', function($http, $resource, $filter, $routeParams, $log, PostService) {
	
}])

.controller('indexController', ['$http', '$resource', '$filter', '$routeParams', '$log', 'PostService', function($http, $resource, $filter, $routeParams, $log, PostService) {
	var vm = this;
	vm.posts = [];

	var fetchFunction = PostService.getAllPosts();
	// $log.log(fetchFunction);
	fetchFunction.then(function(posts) {
		vm.posts = posts;
		$log.log(posts);
	});
}])

.controller('pageController', ['$http', '$resource', '$filter', '$routeParams', 'PostService', function($http, $resource, $filter, $routeParams, PostService) {
	
}])

.controller('postController', ['$http', '$resource', '$filter', '$routeParams', 'PostService', function($http, $resource, $filter, $routeParams, PostService) {
	
}]);
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
// Services (or Factories)

angular.module('angularWP')

// Factory for returning posts for getting posts 
.factory('PostService', ['$http', '$log', function($http, $log) {
	function getAllPosts() {
		return fetchFromAPI('posts');
	}

	function getSinglePost(id) {
		return fetchFromAPI('posts/' + id);
	}

	function fetchFromAPI(url) {
		return $http.get('wp-json/wp/v2/' + url, { cache: true }).then(function(data){
			// $log.log(data);
			// many items
			if (data.list instanceof Array) {
				var items = data.list.map(function(item) { return item; });
				$log.log(items);
			} else { // one item
				$log.log(data);
				return data;
			}
			
		});
	}

	return {
		getAllPosts: getAllPosts,
		getSinglePost: getSinglePost
	};
}]);