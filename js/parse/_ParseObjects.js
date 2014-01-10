/**
* DESC: DataServices is an overall module that each additional definition can be added as a  
* 				factory off. This allows Parse Services to be wrapped into a single module
*
* Factories:   ParseAbstractService, ParseServices
*
**/

angular.module('DataServices',[]) 

/**
* DESC: This Abstract service provides an enhanced Parse.Object and Parse.Collection
*	    So we can call load and saveParse from any extending Class and have that wrapped
*	    within ParseQueryAngular
**/
.factory('ParseAbstractService', ['ParseQueryAngular', function(ParseQueryAngular) {

        var object = function(originalClass) {
                originalClass.prototype = _.extend(originalClass.prototype,{
                        load:function() {
                                return ParseQueryAngular(this,{functionToCall:"fetch"});
                        },
                        saveParse:function(data) {
                                if (data && typeof data == "object") this.set(data);
                                return ParseQueryAngular(this,{functionToCall:"save", params:[null]});
                        }
                });
                return originalClass;
        };

        var collection = function(originalClass){
                originalClass.prototype = _.extend(originalClass.prototype,{
                        load:function() {
                                return ParseQueryAngular(this,{functionToCall:"fetch"});
                        }
                });
                return originalClass;
        };


        return {
                EnhanceObject:object,
                EnhanceCollection:collection
        };

}]);