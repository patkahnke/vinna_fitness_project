myApp.controller('AdminController', ['$scope', '$http', 'ApplicantFactory',  function($scope, $http, ApplicantFactory)
{
  ApplicantFactory.all();



}]);
