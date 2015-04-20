var myApp = angular.module('myApp', [
	'ngRoute']).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'profileController'});
		$routeProvider.when('/submit', {templateUrl: 'partials/submit.html', controller: 'submitController'});
		$routeProvider.when('/dailydose', {templateUrl: 'partials/dailydose.html', controller: 'dailydoseController'});
		$routeProvider.otherwise({redirectTo: '/dailydose'});

		$locationProvider.html5Mode({enabled: true, requireBase: false});

	}]);

	