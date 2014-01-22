// Reference Plan Module
angular.module('Plan')

/**
*
*
*/
.controller('CreatePlanCtrl', ['$scope', '$location', 'UserService', 'PlanService', 'filterFilter', function($scope, $location, UserService, PlanService, filterFilter) {
	$scope.location = $location;
	$scope.planToSave = new PlanService.model;
	$scope.newPlan = {
		owner: '',
		title: '',
		info: '',
		rsvpList: []
	};

	$scope.contacts = [
		{ name: 'apple',    selected: true },
		{ name: 'orange',   selected: false },
		{ name: 'pear',     selected: true },
		{ name: 'naartjie', selected: false },
		{ name: 'aa',    selected: true },
		{ name: 'ss',   selected: false },
		{ name: 'xx',     selected: true },
		{ name: 'cc', selected: false }
	  ];
	  
	$scope.segmentSelection = 1;  
	$scope.selection = [];
		// helper method
	$scope.selectedContacts = function selectedContacts() {
 		return filterFilter($scope.contacts, { selected: true });
	};

	$scope.rsvp = false;
	
	$scope.addRsvpList = function() {
		$scope.rsvp = true;
	};
	
	$scope.finishRsvpList = function() {
		$scope.rsvp = false;
		$scope.newPlan.rsvpList = $scope.selection;
	};
	
	$scope.showGroupsList = function() {
		$scope.segmentSelection = 0;
	};
	
	$scope.showContactsList = function() {
		$scope.segmentSelection = 1;	
	};
	
	$scope.createPlan = function() {
		$scope.setValues();		
		$scope.planToSave.saveParse().then(function() {
			alert('Your plan has been created and sent!');
		});
		reset();
	};
	
	// watch contacts for changes
	  $scope.$watch('contacts|filter:{selected:true}', function (nv) {
		$scope.selection = nv.map(function (contact) {
		  return contact.name;
		});
	  }, true);
	
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
		$scope.selection = [];
		init();
	}
}]);