(function(){
  'use strict';

  angular.module('jjStockModule',[])
  .factory('StockApi',['$http', function($http){
    function quote(symbol){
    return $http.jsonp('http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=JSON_CALLBACK');
    }

    return {quote:quote};
  }])
  .directive('jjStock', ['$interval',function($interval){
    var o = {};

    o.restrict = 'A';                                                                                 // herre is to tell how it can be use A = atribute,C = class,D,M = comment
    o.templateUrl = '/components/directives/jj-stock/jj-stock.html';
    o.scope       = {symbol:'@'};                                                                                      // true create his how schope and hereda from his parent - false the used there own + there one from his parents. {} = Is asolated and only work with his own scope
    o.link        =   function(scope, element, attrs){                         // Link is a function that take 3 parameters ( $scope, element= is th div, atributte ) Is like havin a controller in the div
                        element.on('$destroy', function(){
                          $interval.cancel(scope.id);
                        });
                      };
    o.controller  =  ['$scope', 'StockApi', function($scope, StockApi){
                       function getQuote(){
                         StockApi.quote($scope.symbol).then(function(response){
                           $scope.quote = response.data.Timestamp;
                         });
                       }
                       $scope.id = $interval(getQuote, 30000);

                       getQuote();
                     }];
    return o;
  }]);
})();
