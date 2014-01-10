'use strict';

angular.module('slapApp.controllers', ['DataServices']);


/* Controllers 
*	
*	
*/
angular.module('slapApp.controllers')

/**
* 
*
*/
.controller('IndexCtrl', ['UserService', '$scope', '$location', function(UserService, $scope, $location) {
	if (UserService.getUser() == null) {
		$location.path('/login');
	}

}])

/**
*
*
*/
.controller('MyPlansCtrl',['UserService', '$scope', '$location', function(UserService, $scope, $location) {
	if (UserService.getUser() == null) {
		$location.path('/login');
	}


}])


/**
*
*
*/ 
.controller('ContactsCtrl', function($scope) {
	

})

/**
*
*
*/ 
.controller('GroupsCtrl', function($scope) {
	

});


/**
*
*
*/ 
angular.module('slapApp.controllers')

.controller('SettingsCtrl', function($scope) {
	

});
// .controller('LoginCtrl', ['$scope', '$location', function($scope, $location) {
// 	$scope.User =  {
// 			username:'',
// 			password:'',
// 			email: '' 
// 		};
// 		
// 	$scope.forms = ['login', 'signup'];
// 	$scope.selected = $scope.forms[0];
// 	$scope.toggleForm = function(index) {
// 			$scope.selected = $scope.forms[index];
// 	}; 
// 	
// 	//Perform user login using back-end service
// 	$scope.login = function() {
// 		UserService.login($scope.login.username, $scope.login.password, function(user) {
// 			// When service call is finished, navigate to items page
// 			_location.path('/main');
// 		});
// 	};
// 	
// 	// Perform user signup using back-end service
// 	$scope.signUp = function() {
// 		UserService.signUp($scope.signup.username, $scope.signup.password, function(user) {
// 			// When service call is finished, navigate to items page
// 			$location.path('/main');
// 		});
// 	};
// 	
// }]);


