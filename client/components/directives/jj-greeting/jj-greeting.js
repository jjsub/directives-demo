(function(){
  'use strict';

  angular.module('jjGreetingModule',[])
  .directive('jjGreeting', [function(){
    var o = {};

    o.restrict        = 'A';                                                                 // herre is to tell how it can be use A = atribute,C = class,D,M = comment
    o.templateUrl     = '/components/directives/jj-greeting/jj-greeting.html';
    o.scope           = {name:'@', age:'@', from:'@'};                                      // true create his how schope and hereda from his parent - false the used there own + there one from his parents. {} = Is asolated and only work with his own scope

    return o;
  }]);
})();
