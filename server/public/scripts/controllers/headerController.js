myApp.controller('HeaderController', ['$scope', '$http', '$window', '$location', 'UserFactory', '$log',  function($scope, $http, $window, $location, UserFactory, $log)

{
  userFactory = UserFactory;
  $scope.hide = true;
  $scope.trainerHide = true;
  $scope.hiddenAdmin = true;

  userFactory.checkAdmin();
  if (userFactory.checkAdmin === true) {
    $scope.hiddenAdmin = false;
  } else {
    $scope.hiddenAdmin = true;
  }

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

  $scope.status = {
    isopen: false
  };

}]);
