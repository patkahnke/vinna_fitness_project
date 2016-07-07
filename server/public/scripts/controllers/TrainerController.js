myApp.controller('TrainerController', ['$scope', '$http', '$location', 'ApplicantFactory', 'UserFactory', '$window', function($scope, $http, $location, ApplicantFactory, UserFactory, $window)

{
  userFactory = UserFactory;
  $scope.username = userFactory.currentUser.username;

  if (userFactory.checkLoggedIn() === true) {
    if (userFactory.checkAdmin() === false) {
      $window.location.href='#/applicant';
    }
  } else {
    $window.location.href='#/';
  }



}]);
