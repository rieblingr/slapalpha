angular.module('Plan')

/**
*
*
*/
.controller('PlanDetailsCtrl',['UserService', 'PlanService', '$scope', '$location', '$routeParams', function(UserService, PlanService, $scope, $location, $routeParams) {
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
			$scope.plans.loadMyPlan($scope.routeParams.planId).then(function(result) {
				console.log($scope.routeParams);				
				result.each(function(plan) {
					console.log(plan);
					$scope.myplan = plan;					
				});			
				console.log($scope.myplan);
			});	
			console.log($scope.routeParams.planId);		
				
		}		
	};
}]);
