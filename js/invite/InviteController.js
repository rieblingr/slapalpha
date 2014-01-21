angular.module('slapApp.controllers')
/**
*
*
**/
.controller('InvitesCtrl', function($scope, UserService, PlanService) {
	$scope.owner = '';
	$scope.ready = false;
	$scope.invites = new PlanService.collection;	
	$scope.myinvites = [];
	$scope.selected;
	
	init();
	
	
	$scope.next = function(index) {
		var nextPosition = (index + 1) % $scope.myinvites.length;
		console.log($scope.myinvites.length);
		console.log(index);
		$scope.selected = $scope.myinvites[nextPosition];
	};
	
	$scope.prev = function(index) {		
		if(index == 0) {
			index = $scope.myinvites.length;
		}
		var prevPosition = (index - 1) % $scope.myinvites.length;
		console.log($scope.myinvites.length);
		console.log(index);
		$scope.selected = $scope.myinvites[prevPosition];
	};
	
	function init() {
		if (UserService.getUser() == null) {
			$location.path('/login');
		} else {
			$scope.owner = UserService.getUser().get('username');
			$scope.invites.loadMyInvites($scope.owner).then(function(results) {
				console.log(results);
				var i = 0;
				results.each(function(invite) {
					console.log(invite);
					$scope.myinvites[i] = invite;
					i = i + 1;
				});						
				$scope.ready = true;
				console.log($scope.myinvites);		
				$scope.selected = $scope.myinvites[0];
			});			
		}		
	};
		
});

