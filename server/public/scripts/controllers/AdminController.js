myApp.controller('AdminController', ['$scope', '$http', '$location', 'ApplicantFactory', 'UserFactory',  function($scope, $http, $location, ApplicantFactory, UserFactory)
{
  userFactory = UserFactory;
  $scope.username = userFactory.currentUser.username;

  if (userFactory.checkLoggedIn() === true) {
    if (userFactory.checkAdmin() === false) {
      $location.path('/trainer');
    }
  } else {
    $location.path('/');
  };

  // TODO: Add Trainers and other admins

  $scope.companies = [];
  getCompanies();

  function getCompanies() {
    $http.get('/companies')
      .then(function (response) {
        $scope.companies = response.data;
        console.log('GET /companies ', response.data);
      });
  }
  $scope.trainers = [];
  getTrainers();

  function getTrainers() {
    $http.get('/trainers')
      .then(function (response) {
        $scope.trainers = response.data;
        console.log('GET /trainers ', response.data);
      });
  }
  userFactory.logout()
  //     .then(function (response) { // success
  //       userFactory.setLoggedIn(false);
  //         userFactory.isAdmin = false;
  //       $window.location.href = '/login'; // forces a page reload which will update our UserController


}]);
