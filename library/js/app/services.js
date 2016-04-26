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