'use strict';

/* Directives */

var slapApp.directives = angular.module('slapApp.directives', []);

slapApp.directives.directive('viewLoading', function(){

	  return {
		templateUrl: "js/common/templates/loading.html"
	  }

	})
}]);

