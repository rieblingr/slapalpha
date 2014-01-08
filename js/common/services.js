/** Initialize Parse Service */

'use strict';

angular.module('slapApp.initParse', [])

.factory('InitParse', function(){
     // Initialize Parse
     Parse.initialize("lAfKPReC9SkWU2WtR7EHfh74OMEy1mA4TniSyvbI", "LHSrC32F75ZaJvDc6NHvthmaSkhXpjzwITHcy7at");

};