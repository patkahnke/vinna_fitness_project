myApp.factory('UserFactory', function ($http) {
  console.log('UserFactory running');
  var userStatus = {
    loggedIn: false,
    isAdmin: false,
    username: '',
    id: 0
};

  // the public API
  var publicAPI = {

    currentUser: userStatus,
    //checks to see if a user is authenticated, returns true or false
    checkLoggedIn: function () {
      return userStatus.loggedIn;
    },
    //send a req to the server to find an authenticated user
    isLoggedIn: function () {
      return $http.get('/login');
    },
    //sets userStatus.loggedIn to true (logged in) or false (not logged in)
    setLoggedIn: function (value) {
          userStatus.loggedIn = value;
        },
    //logout
    logout: function () {
          return $http.get('/login/logout');
        },
    //sets userStatus.admin to true (admin) or false (trainer)
    setAdmin: function (admin) {
           userStatus.isAdmin = admin;
        },
    //checks to see if a user is an admin
    checkAdmin: function () {
      return userStatus.isAdmin;
    },
    //gets username
    setName: function (name) {
    userStatus.username = name;
  },
    //gets id
    setId: function (id) {
      userStatus.id = id;
  },
    getId: function () {
      return userStatus.id;
  }

  };

  console.log('after', userStatus.id);

  return publicAPI;

});
