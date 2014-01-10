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

