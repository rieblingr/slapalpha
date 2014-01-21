angular.module('slapApp.controllers')
/**
*
*
**/
.controller('InviteDetailsCtrl', function($scope, $routeParams, UserService, PlanService) {
	$scope.routeParams = $routeParams;
	
	$scope.owner = '';
	$scope.ready = false;
	$scope.plans = new PlanService.collection;
	$scope.myplan = [];
		
	init();
	
	
	function init() {
		if (UserService.getUser() == null) {
			$location.path('/login');
		} else {
			$scope.owner = UserService.getUser().get('username');
			// Load Plan
			$scope.plans.loadMyInvite($scope.routeParams.inviteId).then(function(result) {						
				result.each(function(plan) {
					console.log(plan);
					$scope.myplan = plan;					
				});			
				console.log($scope.myplan);
			});	
			console.log($scope.routeParams.inviteId);		
		}		
	};	
});