'use strict';

/**
* Declare app level module which depends on filters, and services
* 
*
**/
var slapApp = angular.module('slapApp', [
  'ngRoute',
  'ngTouch',
  'ngAnimate',
  'snap',
  'slapApp.filters',
  'slapApp.services',
  'slapApp.parseService',
  'slapApp.directives',
  'slapApp.controllers'
])
.config(['$routeProvider', function($routeProvider) {
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
    
  $routeProvider.when('/myplans', 
  	{templateUrl: 'partials/myplans.html', 
  	 controller: 'MyPlansCtrl',
  	  controllerAs: 'myplanctrl'});
  	 
  $routeProvider.when('/createplan', 
  	{templateUrl: 'partials/createplan.html', 
  	 controller: 'CreatePlanCtrl',
  	  controllerAs: 'createctrl'});
  	 
  $routeProvider.when('/groups', 
	{templateUrl: '/partials/groups.html', 
	 controller: 'GroupsCtrl',
	  controllerAs: 'groupctrl'});
	 
  $routeProvider.when('/settings',
	{templateUrl: '/partials/settings.html',
	 controller: 'SettingsCtrl',
	  controllerAs: 'settingsctrl'});
  
  $routeProvider.when('/drawer', 
  	{templateUrl: 'partials/drawer-menu.html',
  	 controller: 'DrawerCtrl',
  	  controllerAs: 'drawerctrl'});
  	 
  $routeProvider.otherwise({redirectTo: '/login'});
}]) 
.config(function(snapRemoteProvider) {
    snapRemoteProvider.globalOptions.disable = 'right';
});

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}
