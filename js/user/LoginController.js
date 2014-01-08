/**
*
*
*
*
*/ 

var LoginCtrl = function($scope, $location, ParseSerice) {
	// Perform user login using back-end service
        $scope.login = function() {
		  ParseService.login($scope.login.username, $scope.login.password, function(user) {
		  // When service call is finished, navigate to items page
		  $location.path('/main');
		});
			}

	  // Perform user signup using back-end service
			$scope.signUp = function() {
		    ParseService.signUp($scope.signup.username, $scope.signup.password, function(user) {
		  // When service call is finished, navigate to items page
		  $location.path('/main');
		});
			}

	  // Perform user login using Facebook API
	  $scope.FB_login = function() {
	      ParseService.FB_login(function(user) {
		  // When service call is finished, navigate to items page
		  $location.path('/main');
		});
	  }
};

LoginCtrl.$inject = ['$scope', 'ParseService', '$location'];