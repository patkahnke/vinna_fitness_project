myApp.factory('UserFactory', function ($http) {
  console.log('UserFactory running');
  var userStatus = {
    loggedIn: false,
    isAdmin: false

};

  // the public API
  var publicAPI = {

    currentUser: userStatus,

    checkLoggedIn: function () {
      return userStatus.loggedIn;
    },

    isLoggedIn: function () {
      return $http.get('/login');
    },

    setLoggedIn: function (value) {
          userStatus.loggedIn = value;
        },

    logout: function () {
          return $http.get('/auth/logout');
        },

    setAdmin: function (admin) {
           userStatus.isAdmin = admin;
        },
    checkAdmin: function () {
      return userStatus.isAdmin;
    }

  };

  return publicAPI;

});
