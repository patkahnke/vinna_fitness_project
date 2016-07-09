var myApp = angular.module('myApp', ['ngRoute', 'ngModal', 'ui.bootstrap']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    .when('/user', {
      templateUrl: '/views/user.html',
      controller: "UserController"
    })

    .when('/applicant', {
      templateUrl: '/views/applicant.html',
      controller: "AssessmentController"
    })

    .when('/assessment', {
      templateUrl: '/views/assessment.html',
      controller: "AssessmentController"
    })

    .when('/login', {
      templateUrl: '/views/login.html',
      controller: "HomeController"
    })

    .when('/admin', {
      templateUrl: '/views/admin.html',
      controller: "AdminController"
    })

    .when('/companies', {
      templateUrl: '/views/companies.html',
      controller: "AdminCompanyController"
    })

    .when('/companies/inactive', {
      templateUrl: '/views/companies_inactive.html',
      controller: "AdminCompanyController"
    })

    .when('/selectedco', {
      templateUrl: '/views/selectedco.html',
      controller: "AdminJobController"
    })

    .when('/search', {
      templateUrl: '/views/search.html',
      controller: "AdminSearchController"
    })

    .when('/trainers', {
      templateUrl: '/views/trainers.html',
      controller: "AdminTrainersController"
    })

    .otherwise({
      redirectTo: 'login'
    });

}
]);
