angular.module('ParseServices', [])

.factory('ExtendParseSDK', ['ParseAbstractService', function(ParseAbstractService) {

  Parse.Object.extendAngular = function(options) {
    return ParseAbstractService.EnhanceObject(Parse.Object.extend(options));
  };

  Parse.Collection.extendAngular = function(options) {
    return ParseAbstractService.EnhanceCollection(Parse.Collection.extend(options));
  };

}])

.factory('ParseSDK', function() {

  // tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
  Parse.initialize("lAfKPReC9SkWU2WtR7EHfh74OMEy1mA4TniSyvbI", "LHSrC32F75ZaJvDc6NHvthmaSkhXpjzwITHcy7at");

// FACEBOOK init
//   window.fbPromise.then(function() {
// 
//     Parse.FacebookUtils.init({
// 
//       // pro-tip: swap App ID out for PROD App ID automatically on deploy using grunt-replace
//       appId: "", // Facebook App ID
//       channelUrl: 'channel.html', // Channel File
//       cookie: true, // enable cookies to allow Parse to access the session
//       xfbml: true, // parse XFBML
//       frictionlessRequests: true // recommended
// 
//     });
// 
//   });

});