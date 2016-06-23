var myApp = angular.module('myApp', ['ngRoute', 'ngModal']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })

    .when('/assessment1', {
      templateUrl: '/views/assessment1.html',
      controller: "AssessmentController"
    })

    .when('/assessment2', {
      templateUrl: '/views/assessment2.html',
      controller: "AssessmentController"
    })

    .when('/assessment3', {
      templateUrl: '/views/assessment3.html',
      controller: "AssessmentController"
    })

    .when('/assessment4', {
      templateUrl: '/views/assessment4.html',
      controller: "AssessmentController"
    })

    .when('/assessment5', {
      templateUrl: '/views/assessment5.html',
      controller: "AssessmentController"
    })

    .when('/assessment6', {
      templateUrl: '/views/assessment6.html',
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
