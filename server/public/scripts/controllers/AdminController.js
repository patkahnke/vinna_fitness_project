myApp.controller('AdminController', ['$scope', '$http', 'ApplicantFactory', '$location', function($scope, $http, ApplicantFactory, $location)
{
  ApplicantFactory.all();

  // TODO: Add Trainers and other admins

}]);
