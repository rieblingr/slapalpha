'use strict';

/* Filters */

angular.module('slapApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).
  filter('fruitSelection', ['filterFilter', function (filterFilter) {
    return function contactSelection(input, prop) {
      return filterFilter(input, { selected: true }).map(function (contact) {
        return contact[prop];
      });
    };
  }]);
