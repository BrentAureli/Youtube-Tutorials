myApp.controller('page1Controller', ['$scope', function($scope){
	$scope.users = [
		{ 
			name: "Brent Aureli",
		  	age: 29,
		 	occupation: "Registered Nurse" },
		{
			name: "Nico Aureli",
			age: 26, 
			occupation: "Fire Fighter"
		},
		{
			name: "Nathan Cross",
			age: 28,
			occupation: "Profressional Gamer"
		}
	];

}]);