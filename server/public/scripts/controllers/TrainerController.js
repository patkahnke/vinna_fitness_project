myApp.controller('TrainerController',['$scope', '$http', 'ApplicantFactory', function($scope, $http, ApplicantFactory)
{
  ApplicantFactory.all();



}]);
