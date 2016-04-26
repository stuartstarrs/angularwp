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