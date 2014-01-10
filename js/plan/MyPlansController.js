angular.module('Plan')

/**
*
*
*/
.controller('MyPlansCtrl',['UserService', 'PlanService', '$scope', '$location', function(UserService, PlanService, $scope, $location) {
	$scope.owner = '';
	$scope.myplans = [];
	$scope.ready = false;
	
	init();
	
	function init() {
		if (UserService.getUser() == null) {
			$location.path('/login');
		} else {
			var plans = new PlanService.collection;
			$scope.owner = UserService.getUser().get('username');
			$scope.myplans = plans.loadMyPlans($scope.owner);	
			console.log($scope.owner);
			console.log($scope.myplans);
			$scope.ready = true;
		}
	};
	
}])
