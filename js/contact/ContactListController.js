angular.module('slapApp.controllers')

/**
* 
*
*/
.controller('ContactCtrl', ['UserService', '$scope', '$location', function(UserService, $scope, $location) {
	if (UserService.getUser() == null) {
		$location.path('/login');
	}

}]);

