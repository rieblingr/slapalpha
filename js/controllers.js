'use strict';

/* Controllers 
*	
*	
*/
angular.module('slapApp.controllers', [])
 
 /**
 * 
 *
 */
  .controller('IndexCtrl', function($scope, ParseService) {
	   // Login Control
	  if (ParseService.getUser() == null) {
			
	  }
  })
  /**
  *
  *
  */ 
  .controller('DrawerCtrl', function($scope, $rootScope, snapRemote) {
  	
  	
  })
/**
 *
 *
 */
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
	
  })
 /**
 *
 *
 */
  .controller('LoginCtrl', function($scope, $location, ParseService) {
	 $scope.forms = ['login', 'signup'];
	 $scope.selected = $scope.forms[0];
	 $scope.toggleForm = function(index) {
	 	 $scope.selected = $scope.forms[index];
	 }; 
	 
	 $scope.User = {
	 	username:'',
	 	password:'',
	 	email: '' 
	 };
	 
		// Perform user login using back-end service
        $scope.login = function() {
		  ParseService.login($scope.User.username, $scope.User.password, function(user) {
		  // When service call is finished, navigate to items page
		  $location.path('/main');
		});
			}

	  // Perform user signup using back-end service
		$scope.signUp = function() {
		    ParseService.signUp($scope.User.username, $scope.User.password, function(user) {
		  // When service call is finished, navigate to items page
		  $location.path('/main');
		});
			}

	  // Perform user login using Facebook API
	  $scope.FB_login = function() {
	      ParseService.FB_login(function(user) {
		  // When service call is finished, navigate to items page
		  $location.path('/main');
		});
	  }
	
  })
 /**
 *
 *
 */
  .controller('MyPlansCtrl', function() {
		
	
  })
  
  /**
 *
 *
 */
  .controller('CreatePlanCtrl', function($scope) {
		
	
  })

  
   /**
  *
  *
  */ 
  .controller('ContactsCtrl', function($scope) {
  		
  	
  })
  
   /**
  *
  *
  */ 
  .controller('GroupsCtrl', function($scope) {
  		
  	
  })
  
   
   /**
  *
  *
  */ 
  .controller('SettingsCtrl', function($scope) {
  		
  	
  });
  

