myApp.controller('UserController', ['$scope', '$http', '$location', 'UserFactory', function ($scope, $http, $location, UserFactory) {
console.log('userController running');
  var _this = this;
  var userFactory = UserFactory;

  userFactory.isLoggedIn()
  .then(function (response) {
    if (response.data.status) {
      console.log(response.data);

      userFactory.setLoggedIn(true);
      _this.username = response.data.name;

      if (response.data.admin) {
        isAdmin(response.data.admin);
        $location.path('/admin');
      } else {
        $location.path('/home');
      }
    } else { // is not logged in on server
        $location.path('/');
    }
  },

  });

  _this.logout = function () {
    userFactory.logout()
      .then(function (response) { // success
        userFactory.setLoggedIn(false);
          userFactory.isAdmin = false;
        $window.location.href = '/login'; // forces a page reload which will update our UserController
      },

      function (response) { // error
        _this.message.text = 'Unable to logout';
        _this.message.type = 'error';
      });
  };

}]);
