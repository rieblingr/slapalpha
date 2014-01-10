/** 
* Invite Directive
*
*
**/ 

slapApp.directives.directive('sa-invite', function(){
	return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'sa-invite.html'
    };
});