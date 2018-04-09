angular.module("movieApp", []).controller('movieAppController', function($scope, $http){
   getListOfMovies();
   $scope.movies = [];
   $scope.movieName = null;
   function getListOfMovies(){
	   
	   $http({
		   method : "GET",
		   url : "/movies"
	   }).then(function(response){
		   $scope.movies = response.data;
		   
	   })
   }
   
   $scope.addMovieInList = function(){
		    $http({
		     method : "POST",
		     url : "/movies",
			 data : {name : $scope.movieName}
	   }).then(function(response){
		   $scope.movies.push(response.data);
		   $scope.movieName = null;
		   
	   })
		   
	   
   }
   $scope.deleteMovie = function(eve, id){
	      eve.preventDefault();
	      $http({
		     method : "DELETE",
		     url : "/movie/"+id,
			 
	   }).then(function(response){
		  var indx = $scope.movies.findIndex(function(movie){
			  return movie._id === id
		  });
		  $scope.movies.splice(indx, 1)
		   
		   
	   })
	   
   }

})
