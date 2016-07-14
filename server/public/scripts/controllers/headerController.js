myApp.controller('HeaderController', ['$scope', '$http', '$window', '$location', 'UserFactory', '$log',  function($scope, $http, $window, $location, UserFactory, $log)

{
  userFactory = UserFactory;
  $scope.hide = true;
  $scope.trainerHide = true;
  $scope.hiddenAdmin = true;


//Checks if user is logged in, and, if so, whether or not they are an admin, and displays header dropdown and logout button accordingly.

  userFactory.isLoggedIn()
  .then(function (response) {
      if (response.data.name !== undefined) {
        $scope.hide = false;
        if (response.data.admin === true) {
          $scope.hiddenAdmin = false;
        }
      } else {
        $scope.hide = true;
      }

  });


//Checks if user is logged in, and routes user to the appropriate home page accordingly.

  $scope.routeHome = function() {
    if (userFactory.checkLoggedIn() === true) {
      if ($scope.hiddenAdmin === true) {
      $window.location.href='#/applicant';
      }
      else {
      $window.location.href='#/admin';
      }
    } else {
      $window.location.href='#/';
    }
};


//Logs user out.

  $scope.logout = function () {
    userFactory.logout()
  .then(function (response) { // success
    userFactory.setLoggedIn(false);
    userFactory.setAdmin(false);
    $scope.hiddenAdmin = true;
    $scope.hide = true;
    $window.location.href = '#/'; // forces a page reload which will update our UserController
  });
  };

  $scope.status = {
    isopen: false
  };

}]);
