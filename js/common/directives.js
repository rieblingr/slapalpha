'use strict';

/* Directives */


// Returns the version of the App
angular.module('slapApp.directives', [])
.directive('viewLoading', function(){

	  return {
		templateUrl: "js/common/templates/loading.html"
	  }

	})
}]);

