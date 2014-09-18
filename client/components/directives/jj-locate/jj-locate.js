/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('jjLocateModule',[])
  .factory('LocationService',['$q', function($q){

    function locate(){
      var deferred = $q.defer(),
          options = {enableHighAccuracy: true, timeout: 10000, maximumAge: 0};

      navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject, options);

      return deferred.promise;
    }

    return {locate:locate};
  }])

  .directive('jjLocate', [function(){
    var o = {};

    o.restrict = 'A';
    o.templateUrl = '/components/directives/jj-locate/jj-locate.html';
    o.scope       = {};
    o.link        =   function(scope, element, attrs){
                      };

    o.controller  =  ['$scope', 'LocationService', function($scope, LocationService){
                       $scope.findMe = function(){
                         LocationService.locate().then(success, error);
                        };

                       function success(pos){
                         console.log(pos);
                       }

                       function error(err){
                         console.log(err);
                       }
                      }];
    return o;
  }]);
})();
