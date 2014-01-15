
angular.module('slapApp.controllers')

/**
*
*/
.controller('DrawerCtrl', function($scope, $location, UserService) {
 	$scope.logout = function() {
 		UserService.logout();	
 	}
 	
 	$scope.opts = {
  		disable: 'left'
	};
});

