angular.module('slapApp.controllers')
/**
*
*
**/
.controller('InvitesCtrl', function($scope) {
		
	$scope.invites = [
  	 	{'name': 'Event 1',
	  	 'info': 'Party at 12 pm happening...'},
	  	{'name': 'Event 2',
	  	 'info': 'Concert at epic theater in Minnesota...'},
	  	 {'name': 'Event 3',
	  	 'info': 'Party at 12 pm happening...'},
	  	{'name': 'Event 4',
	  	 'info': 'Concert at epic theater in Minnesota...'}
	 ];
	
	$scope.selected = $scope.invites[0];
	$scope.next = function(index) {
		var nextPosition = (index + 1) % $scope.invites.length;
		$scope.selected = $scope.invites[nextPosition];
	}
	
	$scope.prev = function(index) {
		var prevPosition = (index - 1) % $scope.invites.length;
		$scope.selected = $scope.invites[prevPosition];
	}
	
});