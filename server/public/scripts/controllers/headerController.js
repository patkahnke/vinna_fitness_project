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

  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));


}]);
