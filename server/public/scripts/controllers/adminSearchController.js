myApp.controller('AdminTrainersController', ['$scope', '$http', 'AdminDataFactory', 'UserFactory', '$location', function($scope, $http, AdminDataFactory, UserFactory, $location)
{
  //injections
  $scope.dataFactory = AdminDataFactory;
  userFactory = UserFactory;
  //scope variables
  $scope.applicants = [];
  $scope.message = false;
  $scope.results = false;

  //authenticated?
  if (userFactory.checkLoggedIn() === true) {
    if (userFactory.checkAdmin() === false) {
      $location.path('/trainer');
    }
  } else {
    $location.path('/');
  };

  userFactory.logout()



  //Search
  function searchApplicants() {
    response.data.forEach(function (applicant) {
          applicant.resultShown = false;
          recipe.date_screened = new Date(applicant.date);
        });
      $scope.applicants = response.data;
      console.log('GET /applicants', response.data);

      if ($scope.applicants.length == 0) {
        $scope.message = true;
      }


      });
    

  }]);
