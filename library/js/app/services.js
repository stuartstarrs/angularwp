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