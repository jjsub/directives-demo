(function(){
  'use strict';

  angular.module('jjClockModule',[])
  .directive('jjGreeting', [function(){
    var o = {};

    o.restrict = 'A';                                                                                 // herre is to tell how it can be use A = atribute,C = class,D,M = comment
    o.templateUrl = '/components/directives/jj-clock/jj-clock.html';
    o.scope       = {};                                                                                      // true create his how schope and hereda from his parent - false the used there own + there one from his parents. {} = Is asolated and only work with his own scope
    o.link        =   function($scope, element, attrs){                         // Link is a function that take 3 parameters ( $scope, element= is th div, atributte ) Is like havin a controller in the div

                      };
    return o;
  }]);
})();
