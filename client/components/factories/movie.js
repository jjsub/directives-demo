
(function(){
  'use strict';

  angular.module('directives-demo')
  .factory('Movie', ['$http', function($http){

    function getMessage(){
      return $http.get('/home');
    }

    return {getMessage:getMessage};
  }]);
})();

