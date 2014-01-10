'use strict';
// reference the module we declared for Modulated Parse Services
angular.module('DataServices', [])

// add a factory
.factory('InviteModel', ['ParseQueryAngular', function(ParseQueryAngular) {
	
	var Invite = Parse.Object.extendAngular({
	
	});
	
    var Invites = Parse.Collection.extendAngular({
    
    });
    
    // The factory function returns PlanModel, which is injected into controllers.
    return {
    	model: Invite,
    	collection: Invites
    };
    
}]);
    
    
    