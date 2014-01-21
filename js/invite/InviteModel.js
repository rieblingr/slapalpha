'use strict';
// reference the module we declared for Modulated Parse Services
angular.module('DataServices')

// add a factory
.factory('InviteModel', ['ParseQueryAngular', function(ParseQueryAngular) {
	
	var Invite = Parse.Object.extendAngular({
		className: "Invite", 	
		
		setRsvpList: function(rsvpList) {
			this.set('rsvpList', rsvpList);
			return this;
		},
		
		setPlan: function(plan) {
			this.set('plan', plan);
			return this;
		},
		
		destroyParse: function() {
			return ParseQueryAngular(this,{functionToCall:"destroy"});
		}
	});
	
    var Invites = Parse.Collection.extendAngular({
    	model: Invite,
    	comparator: function(model) {
    		return -model.createdAt.getTime();
    	}
    });
    
    // The factory function returns PlanModel, which is injected into controllers.
    return {
    	model: Invite,
    	collection: Invites
    };
    
}]);
    
    
    