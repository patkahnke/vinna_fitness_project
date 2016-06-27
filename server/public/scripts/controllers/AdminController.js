myApp.controller('AdminController', ['$scope', '$http', 'ApplicantFactory',  function($scope, $http, ApplicantFactory)
{
  ApplicantFactory.all();

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
