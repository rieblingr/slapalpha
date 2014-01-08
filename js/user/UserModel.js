'use strict';

/* Services */

angular.module('slapApp.parseService', ['ngResource'])

.factory('ParseService', function($resource){
     // Initialize Parse
     Parse.initialize("lAfKPReC9SkWU2WtR7EHfh74OMEy1mA4TniSyvbI", "LHSrC32F75ZaJvDc6NHvthmaSkhXpjzwITHcy7at");

     // Cache current logged in user
    var loggedInUser;

    // Cache list of user's plans and invites
    var myPlans = [];
    var myInvites = [];

    // Define parse model and collection for Plan records
    var Plan = Parse.Object.extend("Plan");
    var PlanCollection = Parse.Collection.extend({ model:Plan });

    // Define parse model and collection for Invites records
    var Invite = Parse.Object.extend("Invite");
	var InviteCollection = Parse.Collection.extend({ model:Invite });
    
    /**
     * ParseService Object
     * This is what is used by the controllers to save and retrieve data from Parse.com.
     * Moving all the Parse.com specific stuff into a service allows me to later swap it out 
     * with another back-end service provider without modifying my controller much, if at all.
     */
      var ParseService = {
      name: "Parse",

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

      // Login a user using Facebook
      FB_login : function FB_login(callback) {
        Parse.FacebookUtils.logIn(null, {
          success: function(user) {
            if (!user.existed()) {
              alert("User signed up and logged in through Facebook!");
            } else {
              alert("User logged in through Facebook!");
            }
            loggedInUser = user;
            callback(user);
          },
          error: function(user, error) {
            alert("User cancelled the Facebook login or did not fully authorize.");
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
      
      // Get all users plans
      getMyPlans : function getMyPlans(callback) {
      // Create a new Parse Query to search plan records by ownerid
        var query = new Parse.Query(Plan);
      	query.equalTo("owner", loggedInUser.get('username'));
      	 // use the find method to retrieve all books
        query.find({
          success : function(results) {
            for (var i=0; i<results.length; i++)
            { 
              myPlans[i]  = results[i].get('name');
            }
            callback(results);
          },
          error: function(error) {
            alert("Error: " + error.message);
          }
        });
      },
      
       // Get all invites for current user
      getInvites : function getInvites(callback) {
      
      },
      
       // Create a new plan 
      addPlan : function addPlan(_name, _info, callback) {
        var object = new Plan();
        object.save({name:_name, owner:loggedInUser.get('username'), info:_info}, {
          success: function(object) {
            callback();
          },
          error: function(error) {
            alert("Error: " + error.message);
          }
        });
      },

      // Get current logged in user
      getUser : function getUser() {
      	loggedInUser = Parse.User.current();
        if(loggedInUser) {
          return loggedInUser;
        } else {
          return null;
        }
      },
      
      
    	
    };
    
    // The factory function returns ParseService, which is injected into controllers.
    return ParseService;
});
    
    
    
    