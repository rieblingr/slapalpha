// Reference User module 
angular.module('User')

/**
*  Controller to handle logging in and signing up  
*
**/
.controller('LoginCtrl', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
	$scope.location = $location;
	$scope.User =  {
			username:'',
			password:'',
			email: '' 
	};
		
	$scope.forms = ['login', 'signup'];
	$scope.selected = $scope.forms[0];
	$scope.toggleForm = function(index) {
			$scope.selected = $scope.forms[index];
	}; 
	
	//Perform user login using back-end service
	$scope.login = function() {
		UserService.login($scope.User.username, $scope.User.password, function(user) {
			// When service call is finished, navigate to items page
			$scope.location.path('/main');
		});
	};
	
	// Perform user signup using back-end service
	$scope.signUp = function() {
		UserService.signUp($scope.User.username, $scope.User.password, function(user) {
			// When service call is finished, navigate to items page
			$scope.location.path('/main');
		});
	};
	
	// Add function to check if user is cached and bypass login
	if (UserService.getUser() != null) {
		$scope.location.path('/main');
	}
}]);

