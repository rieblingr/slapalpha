'use strict';

// reference the module we declared for Modulated Parse Services
angular.module('DataServices')

/**
*	DESC: Define a service for dealing with Users. 
*
**/
.factory('UserService', ['ParseQueryAngular', function(ParseQueryAngular) {
	
	// cache logged in user
	var loggedInUser;
	
    var UserService = {
    	name: "UserService",
    
		// Login a user
		login : function login(username, password, callback) {
			  Parse.User.logIn(username, password, {
				success: function(user) {
					loggedInUser = user;
					callback(user);
				},
				error: function(user, error) {
					  alert("Error: " + error.message);
				}
				});
		},
		
		// Register a user
		  signUp : function signUp(username, password, callback) {
				Parse.User.signUp(username, password, { ACL: new Parse.ACL() }, {
					success: function(user) {
						loggedInUser = user;
						callback(user);
					},

				error: function(user, error) {
				  		alert("Error: " + error.message);
					}
				});
		  },
		  
		// Logout current user
		logout : function logout(callback) {
			Parse.User.logOut();
		},
		
		  // Get current logged in user
      getUser : function getUser() {
		loggedInUser = Parse.User.current();
			if(loggedInUser) {
			  return loggedInUser;
			} else {
			  return null;
			}
		}
    };
	  
    // The factory function returns UserService, which is injected into controllers.
    return UserService;
}]);
    
    
    
    