(function(){
  'use strict';

  angular.module('directives-demo')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    $scope.people = [{name: 'Bob', age: '22'}, {name:'Juan', age:'30'}];
  }]);
})();
