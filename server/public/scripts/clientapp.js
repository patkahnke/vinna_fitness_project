var myApp = angular.module('myApp', ['ngRoute', 'ngModal']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })

    .when('/assessment', {
      templateUrl: '/views/assessment.html',
      controller: "AssessmentController"
    })

    .when('/vitals', {
      templateUrl: '/views/vitals.html',
      controller: "HomeController"
    })

    .when('/login', {
      templateUrl: '/views/login.html',
      controller: "HomeController"
    })

    .when('/stage', {
      templateUrl: '/views/stage.html',
      controller: "TrainerController"
    })

    .when('/screen', {
      templateUrl: '/views/screen.html',
      controller: "TrainerController"
    })

    .when('/admin', {
      templateUrl: '/views/admin.html',
      controller: "AdminController"
    })

    .when('/companies', {
      templateUrl: '/views/companies.html',
      controller: "AdminController"
    })

    .when('/selectedco', {
      templateUrl: '/views/selectedco.html',
      controller: "AdminController"
    })

    .when('/search', {
      templateUrl: '/views/search.html',
      controller: "AdminController"
    })

    .when('/trainers', {
      templateUrl: '/views/trainers.html',
      controller: "AdminController"
    })

    .otherwise({
      redirectTo: 'home'
    });

}
]);