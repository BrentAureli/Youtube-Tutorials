myApp.controller('page1Controller', ['$scope', function($scope){
	$scope.user = {
		firstname: "brent",
		lastname: "aureli",
		run: function(destination){
			return this.firstname + " is running to " + destination;
		}
	}
}]);