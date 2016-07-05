myApp.controller('TrainerController', ['$scope', '$http', '$location', 'ApplicantFactory', 'UserFactory',  function($scope, $http, $location, ApplicantFactory, UserFactory)

{
  userFactory = UserFactory;
  $scope.username = userFactory.currentUser.username;

  if (userFactory.checkLoggedIn() === true) {
    if (userFactory.checkAdmin() === false) {
      $location.path('/applicant');
    }
  } else {
    $location.path('/');
  }



}]);
