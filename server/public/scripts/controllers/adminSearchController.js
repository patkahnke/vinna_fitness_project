myApp.controller('AdminSearchController', ['$scope', '$http', 'AdminDataFactory', 'UserFactory', '$location', function($scope, $http, AdminDataFactory, UserFactory, $location)
{
  //injections
  $scope.dataFactory = AdminDataFactory;
  userFactory = UserFactory;
  //scope variables
  $scope.applicants = [];
  $scope.first_name = '';
  $scope.last_name = '';

  //authenticated?
  if (userFactory.checkLoggedIn() === true) {
    if (userFactory.checkAdmin() === false) {
      $location.path('/trainer');
    }
  } else {
    $location.path('/');
  };


  //Get applicant results from database
  $scope.getApplicant = function() {
    console.log('here');
    $http.get('/search')
      .then(function (response) {
        console.log('GET /applicant', response.data);
        $scope.applicants = response.data;
      });
  }

  $scope.viewApplicantModal = {
    modalShown : false
  };



  }]);
