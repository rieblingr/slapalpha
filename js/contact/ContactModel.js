'use strict';
// reference the module we declared for Modulated Parse Services
angular.module('DataServices')

// add a factory
.factory('ContactModel', ['ParseQueryAngular', function(ParseQueryAngular) {
	
	var Contact = Parse.Object.extendAngular({
	
	});
	
    var Contacts = Parse.Collection.extendAngular({
    
    });
    
    // The factory function returns PlanModel, which is injected into controllers.
    return {
    	model: Contact,
    	collection: Contacts
    };
    
}]);