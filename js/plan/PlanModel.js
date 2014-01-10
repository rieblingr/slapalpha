'use strict';

// reference the module we declared for Modulated data services
angular.module('DataServices')

// add a factory
.factory('PlanService', ['ParseQueryAngular', function(ParseQueryAngular) {
	
	//Model Definition for Plans
	var Plan = Parse.Object.extendAngular({
		className: "Plan",
		
		setOwner: function(owner) {
			this.set('owner', owner);
			return this;
		},		
		setTitle: function(title) {
			this.set('title', title);
			return this;
		},		
		setInfo: function(info) {
			this.set('info', info); 
			return this;
		},	
		setRsvpList: function(rsvpList) {
			this.set('rsvpList', rsvpList);
			return this;
		},
		destroyParse: function() {
			return ParseQueryAngular(this,{functionToCall:"destroy"});
		}
	});
	
	//Collection Definition for Plans
    var Plans = Parse.Collection.extendAngular({
    	model: Plan,
    	comparator: function(model) {
    		return -model.createdAt.getTime();
    	},
    	loadMyPlans: function(owner) {
    		this.query = (new Parse.Query(Plan));
    		// use enhanced load() function to fetch collection
    		this.query.equalTo('owner', owner);
    		this.query.descending('createdAt');
    		return this.load();
    	},
    	addPlan: function(owner, title, info, rsvpList) {
    		// save request_id to Parse
    		var _this = this;
    		
    		var plan = new Plan;
    		plan.setOwner(owner);
    		plan.setTitle(title);
    		plan.setInfo(info);
    		plan.setRsvpList(rsvpList);
    		// use the extended Parse SDK to perform a save and return the promised object back into the Angular world
    		return plan.saveParse().then(function(data) {
    			_this.add(data);
    		})
    	},
    	removePlan: function(plan) {
    		if (!this.get(plan)) { 
    			return false;
    		}
    		var _this = this;
    		return plan.destroyParse().then(function() {
    			_this.remove(plan);
    		});	
    	} 	
    });
    
    // The factory function returns PlanModel, which is injected into controllers.
    return {
    	model: Plan,
    	collection: Plans
    };
    
}]);
