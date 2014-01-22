/* Controllers 
*	
*	
*/
angular.module('slapApp.controllers')

/**
* 
*
*/
.controller('RsvpCtrl', function(UserService, $scope, $location, $routeParams) {
	$scope.routeParams = $routeParams;
	
	$scope.rsvpList = [
		{ user: 'Ryan',    response: 'rsvpyes', answered: true },
		{ user: 'Brett',  	response: '',  answered: false },
		{ user: 'Travis',     response: 'rsvpyes', answered: true }
	];
	
	
});