myApp.factory('UserFactory', function ($http) {
  console.log('UserFactory running');
  var Status = {
    loggedIn: false,
    isAdmin: false

};

  // the public API
  return {
    Status = Status,

    checkLoggedIn: function () {
      return Status.loggedIn;
    },

    isLoggedIn: function () {
      return $http.get('/login');
    },

    setLoggedIn: function (value) {
          Status.loggedIn = value;
        },

    logout: function () {
          return $http.get('/auth/logout');
        },

    isAdmin: function (admin) {
           Status.isAdmin = admin;
        },

  };

});
