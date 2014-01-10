// Reference Plan Module
angular.module('Plan')

/**
*
*
*/
.controller('CreatePlanCtrl', ['$scope', '$location', 'PlanModel', 'UserService', function($scope, $location, PlanModel, UserService) {
	if (UserService.getUser() == null) {
		$location.path('/login');
	}

	

}]);