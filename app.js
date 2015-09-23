var app = angular.module("app", []);
  
app.controller("PruebaController", function($scope) {
  $scope.movies=[
    {
      calificacion:2,
      moviename:"SuperMan"
    },
    {
      calificacion:3,
      moviename:"BatMan"
    },
    {
      calificacion:1,
      moviename:"Flash"
    },
    {
      calificacion:7,
      moviename:"AquaMan"
    },  
    {
      calificacion:5,
      moviename:"MegaMan"
    },      
  ];

 var someMovie = $scope.movies;
  $scope.addMovie = function (){
    var newMovie = $scope.moviename;
    var oldmovie;
    var suma = 0 ;
    if(newMovie){
      angular.forEach($scope.movies, function(eachmovie){
        suma=eachmovie.calificacion+suma;
        if(newMovie.toLowerCase() == eachmovie.moviename.toLowerCase()){
          console.log(eachmovie.moviename.toLowerCase());
          oldmovie= true;
          console.log(suma);
        }
      });
      if(!oldmovie){
        someMovie.push({moviename:newMovie});

      }
    }
  };
 

});
