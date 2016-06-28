myApp.controller('AdminController', ['$scope', '$http', '$location', 'ApplicantFactory', 'UserFactory',  function($scope, $http, $location, ApplicantFactory, UserFactory)
{
  userFactory = UserFactory;

  if (userFactory.checkLoggedIn() === true) {
    if (userFactory.checkAdmin() === false) {
      $location.path('/trainer');
    }
  } else {
    $location.path('/');
  };



}]);
