myApp.controller('UserController', ['$scope', '$http', '$location', 'UserFactory', '$window', function ($scope, $http, $location, UserFactory, $window) {

userFactory = UserFactory;


  userFactory.isLoggedIn()
  .then(function (response) {
      console.log(response);
      if (response.data.name !== undefined) {
        userFactory.setName(response.data.name);
        userFactory.setLoggedIn(true);
        if (response.data.admin === true) {
        userFactory.setAdmin(response.data.admin);
        userFactory.setId(response.data.id);
        $window.location.href='#/admin';
      } else {
        $window.location.href='#/applicant';
      }

 } else { // is not logged in on server
   console.log('here');
   userFactory.setLoggedIn(false);
   $window.location.href='#/';
     }


  });

  // _this.logout = function () {
  //   userFactory.logout()
  //     .then(function (response) { // success
  //       userFactory.setLoggedIn(false);
  //         userFactory.isAdmin = false;
  //       $window.location.href = '/login'; // forces a page reload which will update our UserController
  //     },
  //
  //     function (response) { // error
  //       _this.message.text = 'Unable to logout';
  //       _this.message.type = 'error';
  //     });
  // };

}]);
