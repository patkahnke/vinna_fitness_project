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



}]);
