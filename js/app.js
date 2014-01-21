'use strict';

/**
* Declare app level module, organize dependencies, define routes and extra configuration settings
* 
* Module Dependencies: 
*	Angular: ngRoute, ngTouch, ngAnimate, snap
*	Slap: ParseServices/Dataservices, User, Contact, Group, Invite, Plan, PhoneGap 
*	
**/
var slapApp = angular.module('slapApp', [
  'ngRoute',
  'ngTouch',
  'ngAnimate',
  'snap',
  'DataServices',
  'ParseServices',
  'User',
  'Plan',
  'slapApp.controllers'
]).run(['ParseSDK', 'ExtendParseSDK', function(ParseServices, ExtendParseSDK) {
	// Parse Services are Initialized by injecting and running the modules - ParseServices.js
	
	
}]);

/**
*	Map routes for partials views and set desired controller
*
**/
slapApp.config(['$routeProvider', function($routeProvider) {
 $routeProvider.when('/login',
	{templateUrl: 'partials/login.html',
     controller: 'LoginCtrl',
     controllerAs: 'login'});

  $routeProvider.when('/main',
	{templateUrl: 'partials/main.html',
     controller: 'IndexCtrl',
      controllerAs: 'indexctrl'});
    
  $routeProvider.when('/invites',
	{templateUrl: 'partials/myinvites.html',
     controller: 'InvitesCtrl',
	 controllerAs: 'invitectrl'});
	 
  $routeProvider.when('/invites/:inviteId',
  	{templateUrl: 'partials/invite-details.html',
  	 controller: 'InviteDetailsCtrl',
  	 controllerAs: 'invitedetailsctrl'});		 
    
  $routeProvider.when('/myplans', 
  	{templateUrl: 'partials/myplans.html', 
  	 controller: 'MyPlansCtrl',
  	  controllerAs: 'myplanctrl'});
        
  $routeProvider.when('/myplans/:planId', 
  	{templateUrl: 'partials/plan-details.html', 
  	 controller: 'PlanDetailsCtrl',
  	  controllerAs: 'planctrl'});
  	 	 
  $routeProvider.when('/createplan', 
  	{templateUrl: 'partials/createplan.html', 
  	 controller: 'CreatePlanCtrl',
  	  controllerAs: 'createctrl'});
  	 
  $routeProvider.when('/groups', 
	{templateUrl: '/partials/groups.html', 
	 controller: 'GroupsCtrl',
	  controllerAs: 'groupctrl'});
	  
  $routeProvider.when('/groups/create', 
	{templateUrl: '/partials/creategroup.html', 
	 controller: 'CreateGroupCtrl',
	  controllerAs: 'creategroupctrl'});
  
  $routeProvider.when('/contacts', 
	{templateUrl: '/partials/contacts.html', 
	 controller: 'ContactsCtrl',
	  controllerAs: 'contactctrl'});		 
	 
  $routeProvider.when('/settings',
	{templateUrl: '/partials/settings.html',
	 controller: 'SettingsCtrl',
	  controllerAs: 'settingsctrl'});
  
  $routeProvider.when('/drawer', 
  	{templateUrl: 'partials/drawer-menu.html',
  	 controller: 'DrawerCtrl',
  	  controllerAs: 'drawerctrl'});
  	 
  $routeProvider.otherwise({redirectTo: '/login'});
}]);

/**
*	Additional Configurations: 
*		- Disable right side drawer
**/
slapApp.config(function(snapRemoteProvider) {
    snapRemoteProvider.globalOptions.disable = 'right';
});


function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}
