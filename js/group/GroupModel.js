'use strict';
// reference the module we declared for Modulated Parse Services
angular.module('DataServices', [])

// add a factory
.factory('GroupModel', ['ParseQueryAngular', function(ParseQueryAngular) {
	
	var Group = Parse.Object.extendAngular({
	
	});
	
    var Groups = Parse.Collection.extendAngular({
    
    });
    
    // The factory function returns PlanModel, which is injected into controllers.
    return {
    	model: Group,
    	collection: Groups
    };
    
}]);