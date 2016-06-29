myApp.controller('HeaderController', ['$scope', '$http', '$window', '$location', 'UserFactory',  function($scope, $http, $window, $location, UserFactory)

{
  userFactory = UserFactory;
  $scope.hide = true;
  $scope.trainerHide = true;

  userFactory.isLoggedIn()
  .then(function (response) {
      if (response.data.name !== undefined) {
        $scope.hidden = false;
      } else {
        $scope.hidden = true;
      }

  });

  $scope.logout = function () {
    userFactory.logout()
  .then(function (response) { // success
    userFactory.setLoggedIn(false);
    userFactory.setAdmin(false);
    $window.location.href = '/'; // forces a page reload which will update our UserController
  });
  };




}]);
