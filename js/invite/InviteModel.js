'use strict';
// reference the module we declared for Modulated Parse Services
angular.module('DataServices')

// add a factory
.factory('InviteModel', ['ParseQueryAngular', function(ParseQueryAngular) {
	
	var Plan = Parse.Object.extend("Plan");
	
	var Invite = Parse.Object.extendAngular({
		className: "Invite", 
		
		
		destroyParse: function() {
			return ParseQueryAngular(this,{functionToCall:"destroy"});
		}
	});
	
    var Invites = Parse.Collection.extendAngular({
    	model: Invite,
    	comparator: function(model) {
    		return -model.createdAt.getTime();
    	},
    	loadMyInvites: function(owner) {
    		this.query = (
    	}
    });
    
    // The factory function returns PlanModel, which is injected into controllers.
    return {
    	model: Invite,
    	collection: Invites
    };
    
}]);
    
    
    