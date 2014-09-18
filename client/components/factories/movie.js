
(function(){
  'use strict';

  angular.module('directives-demo')
  .factory('Movie', ['$http', function($http){

    function create(title){
      return $http.post('/movies', {title:title});
    }

    return {create:create};
  }]);
})();

