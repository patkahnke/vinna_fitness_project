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

  $scope.companies = [];
  getCompanies();

  function getCompanies() {
    $http.get('/companies')
      .then(function (response) {
        $scope.companies = response.data;
        console.log('GET /companies ', response.data);
      });
  }
  userFactory.logout()
  //     .then(function (response) { // success
  //       userFactory.setLoggedIn(false);
  //         userFactory.isAdmin = false;
  //       $window.location.href = '/login'; // forces a page reload which will update our UserController



}]);
