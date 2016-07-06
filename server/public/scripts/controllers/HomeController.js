myApp.controller('HomeController', ['$scope', '$http', 'ApplicantFactory',  function($scope, $http, ApplicantFactory)
{
  ApplicantFactory.all();

$scope.testEmail = function() {
  $http.get('/assessmentResults').then(function(response) {
    console.log(response);
 });
};


}]);
