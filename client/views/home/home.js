(function(){
  'use strict';

  angular.module('directives-demo')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    $scope.people = [{name: 'Bob', age: '22', from:'USA'}, {name:'Juan', age:'30', from:'France'}, {name:'Pablo', age:'22', from:'Dominican'}];
    $scope.symbols = ['AAPL','FB','GOOG','AMZN'];
    $scope.titles = ['The hobbit'];

    $scope.delMovie = function(index){
      $scope.titles.splice(index, 1);
    };


    $scope.addMovie = function(){
      $scope.titles.push($scope.title);
      $scope.title = null;

    };
  }]);
})();
