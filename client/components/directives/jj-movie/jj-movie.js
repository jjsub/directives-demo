/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('jjMovieModule',[])
  .factory('MovieApi',['$http', function($http){
    function info(title){
      return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=' + title + '&page_limit=1&page=1&apikey=3mhvmefydmkre6dx2c959h6q&callback=JSON_CALLBACK');
    }

    return {info:info};
  }])

  .directive('jjMovie', [function(){
    var o = {};

    o.restrict = 'A';                                                                                 // herre is to tell how it can be use A = atribute,C = class,D,M = comment
    o.templateUrl = '/components/directives/jj-movie/jj-movie.html';
    o.scope       = {title:'@', remove:'&'};                                                                                      // true create his how schope and hereda from his parent - false the used there own + there one from his parents. {} = Is asolated and only work with his own scope
    o.link        =   function(scope, element, attrs){                         // Link is a function that take 3 parameters ( $scope, element= is th div, atributte ) Is like havin a controller in the div
                      };

    o.controller  =  ['$scope', 'MovieApi', function($scope, MovieApi){
                        MovieApi.info($scope.title).then(function(response){
                          console.log(response);
                          $scope.movie  = response.data.movies[0];
                          $scope.poster = $scope.movie.posters.thumbnail.replace(/_tmb/, '_pos');
                        });
                      }];
    return o;
  }]);
})();
