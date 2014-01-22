angular.module('slapApp.controllers')

/**
* 
*
*/
.controller('ContactsCtrl', function(UserService, $scope, $location) {
	if (UserService.getUser() == null) {
		$location.path('/login');
	}

});

