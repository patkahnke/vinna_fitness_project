myApp.controller('AdminSearchController', ['$scope', '$http', 'AdminDataFactory', 'UserFactory', '$location', '$window', function($scope, $http, AdminDataFactory, UserFactory, $location, $window)
{
  //injections
  $scope.dataFactory = AdminDataFactory;
  userFactory = UserFactory;
  //scope variables
  $scope.applicants = [];

  //authenticated?
  if (userFactory.checkLoggedIn() === true) {
    if (userFactory.checkAdmin() === false) {
      $location.path('/trainer');
    }
  } else {
    $location.path('/');
  }


  //Get applicant results from database
  $scope.getApplicant = function() {
    if ($scope.first_name !== undefined && $scope.last_name !== undefined) {
    var query = {
      first_name: $scope.first_name,
      last_name: $scope.last_name
    };
    console.log('here');
    $http.post('/search', query)
      .then(function (response) {
        console.log('GET /applicant', response.data);
        $scope.applicants = response.data;
        $scope.results = true;
        $scope.first_name = '';
        $scope.last_name = '';
      });
    }
  };

  $scope.viewApplicantModal = {
    modalShown : false
  };

  $scope.toggleViewApplicantModal = function(applicant) {
    $scope.viewApplicantModal.modalShown = !$scope.viewApplicantModal.modalShown;
    $scope.applicant = applicant;
  };


  }]);
