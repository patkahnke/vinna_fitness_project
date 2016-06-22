myApp.factory('ApplicantFactory', ['$http', function($http){


 var dataService = {
  all: function(){
    return console.log("factory delivered"); //some get request to the server
  },
  create: function(){
    return console.log("factory also delivered"); //some post request to the server
  }

}

 return dataService;



}])
