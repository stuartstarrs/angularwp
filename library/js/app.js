
// Module

angular.module('angularWP', ['ngRoute', 'ngResource'])



// Routes 

.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'wp-content/themes/angularwp/templates/ngwp-front-page.php',
		controller: 'frontpageController'
	})	
	.when('/posts', {
		templateUrl: 'wp-content/themes/angularwp/templates/ngwp-index.php',
		controller: 'indexController'
	})
})


// Services 



// Controllers

.controller('frontpageController', ['$scope', function($scope){
	


}])

.controller('indexController', ['$http', '$resource', '$filter', '$routeParams', function($http, $resource, $filter, $routeParams){
	var vm = this;
	var apiCallFunction;

	vm.posts = [];
	vm.loaded = false;
	vm.subtitle = '';


    this.setMetadata = function(metadata) {
        title = metadata.title ? metadata.title : defaultTitle;
        description = metadata.description ? metadata.description : defaultDescription;
    };

    this.getMetadata = function() {
        return {
            title: title,
            description: description
        };
    };

	apiCallFunction.then(function(posts) {
		vm.posts = posts;
		vm.loaded = true;
	});

	vm.scrollToTop = function() {
		$anchorScroll();
	};

	vm.search = function(term) {
		$state.go('postsBySearch', { searchTerm: term });
	};


	function getAllPosts() {
		return getData('posts?filter[category_name]=post');
	}

}]);



