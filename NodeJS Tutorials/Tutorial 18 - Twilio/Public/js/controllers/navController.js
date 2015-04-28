myApp.controller('navController', ['$scope', '$location', function($scope, $location){
	$scope.isCollapsed = false;

	$scope.isActive = function(destination){
		return destination === $location.path();
	}
}]);