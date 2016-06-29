myApp.factory('AdminDataFactory', ['$http', function($http){

  var companyData = {};

 //PUBLIC
  var publicApi = {
   selectedCo: companyData
  };

  return publicApi;

}]);
