angular.module('slapApp.controllers')
/**
*
*
**/
.controller('InvitesCtrl', function($scope, UserService, PlanService) {
	$scope.myinvites = new PlanService.collection;	
	$scope.invites = [];
	
	$scope.selected = $scope.invites[0];
	
	$scope.next = function(index) {
		var nextPosition = (index + 1) % $scope.invites.length;
		console.log($scope.invites.length);
		console.log(index);
		$scope.selected = $scope.invites[nextPosition];
	};
	
	$scope.prev = function(index) {
		var prevPosition = (index - 1) % $scope.invites.length;
		$scope.selected = $scope.invites[prevPosition];
	};
		
});

