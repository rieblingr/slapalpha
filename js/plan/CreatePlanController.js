// Reference Plan Module
angular.module('Plan')

/**
*
*
*/
.controller('CreatePlanCtrl', ['$scope', '$location', 'UserService', 'PlanService', function($scope, $location, UserService, PlanService) {
	$scope.location = $location;
	$scope.planToSave = new PlanService.model;
	$scope.newPlan = {
		owner: '',
		title: '',
		info: '',
		rsvpList: []
	};
	
	$scope.addRsvpList = function() {
		
	};
	
	$scope.createPlan = function() {
		$scope.setValues();		
		$scope.planToSave.saveParse().then(function() {
			alert('Your plan has been created and sent!');
		});
		reset();
	};
	
	init();
	
	function init() {
		if (UserService.getUser() == null) {
			$location.path('/login');
		} else {
			$scope.newPlan.owner = UserService.getUser().attributes.username;
		    console.log(UserService.getUser().attributes.username);		    
		    console.log($scope.planToSave);
		}		
	}
	
	$scope.setValues = function() {
		$scope.planToSave.setOwner($scope.newPlan.owner);
		$scope.planToSave.setTitle($scope.newPlan.title);
		$scope.planToSave.setInfo($scope.newPlan.info);
		$scope.planToSave.setRsvpList($scope.newPlan.rsvpList);
	}
	
	function reset() {
		$scope.planToSave = new PlanService.model;
		$scope.newPlan = {
			owner: '',
			title: '',
			info: '',
			rsvpList: []
		};
		init();
	}
}]);