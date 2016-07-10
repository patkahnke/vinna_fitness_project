myApp.controller('AdminCompanyController', ['$scope', '$http', 'AdminDataFactory', '$location', '$window', 'UserFactory', function($scope, $http, AdminDataFactory, $location, $window, UserFactory)

{
  //injections
  $scope.dataFactory = AdminDataFactory;
  userFactory = UserFactory;
  //scope variables
  $scope.activeCompanies = [];
  $scope.inactiveCompanies = [];
  $scope.newCompany = {};

  //authenticated?
  if (userFactory.checkLoggedIn() === true) {
    if (userFactory.checkAdmin() === false) {
      $location.path('/trainer');
    }
  } else {
    $location.path('/');
  }

  getActiveCompanies();
  getInactiveCompanies();

  //get existing companies
  function getActiveCompanies() {
    $http.get('/companies/active')
      .then(function (response) {
        console.log('GET /companies/active ', response.data);
        $scope.activeCompanies = response.data;
      });
  }

  //get inactive companies
  function getInactiveCompanies() {
    $http.get('/companies/inactive')
      .then(function (response) {
        console.log('GET /companies/inactive ', response.data);
        $scope.inactiveCompanies = response.data;
      });
  }

  //add new company
  $scope.addCompany = function () {
    if ($scope.newCompany.name !== undefined && $scope.newCompany.location !== undefined && $scope.newCompany.email !== undefined) {
    var data = $scope.newCompany;
    $http.post('/companies', data)
      .then(function (response) {
        console.log('POST /companies', response);
        if (response.status == 201) {
           $scope.newCompany = {};
           $scope.toggleAddCompanyModal();
           getActiveCompanies();
        } else {
          alert('Your company was not recieved. Please try again.');
        }
      });
    }
  };

  // update existing company
  $scope.updateCompany = function (company) {
    var id = company.id;
    $http.put('/companies/edit/' + id, company)
      .then(function (response) {
        console.log('PUT /companies ', response);
        if (response.status == 204) {
           alert('Company Updated!');
           $scope.newCompany = {};
           $scope.toggleEditCompanyModal();
           getActiveCompanies();
           return;
        } else {
          alert('Your company was not recieved. Please try again.');
        }
      });
  };

  // 'delete' == deactivate(gives company inactive status) existing company
  $scope.deactivateCompany = function(company) {
    console.log('deactivate', company);
    var id = company.id;
    var deactivateCompany = confirm('Are you sure you want to remove ' + company.name + '?');
    if (deactivateCompany === true){
      $http.put('/companies/deactivate/' + id)
        .then(function (response) {
          console.log('PUT /companies/', response);
          $scope.toggleEditCompanyModal();
          getActiveCompanies();
          return;
        });
      } else {
        $scope.toggleEditCompanyModal();
        return;
      }
  };

  // reactivate existing company
  $scope.reactivateCompany = function(company) {
    console.log('reactivate', company);
    var id = company.id;
    var reactivateCompany = confirm('Are you sure you want to reactivate ' + company.name + '?');
    if (reactivateCompany === true){
      $http.put('/companies/reactivate/' + id)
        .then(function (response) {
          console.log('PUT /companies', response);
          $scope.toggleEditCompanyModal();
          getInactiveCompanies();
          return;
        });
      } else {
        $scope.toggleEditCompanyModal();
        return;
      }
  };

  //selectedCoRedirect
  $scope.selectedCoRedirect = function(company){
    $scope.dataFactory.selectedCo.job = company;
    $window.location.href='#/selectedco';
  };

  //active/inactive company specific redirects
  $scope.activeCoView = function(){
    $window.location.href='#/companies';
  };

  $scope.inactiveCoView = function(){
    $window.location.href='#/companies/inactive';
  };

  //company modals
  $scope.addCompanyModal = {
    modalShown : false
  };

  $scope.toggleAddCompanyModal = function() {
    $scope.addCompanyModal.modalShown = !$scope.addCompanyModal.modalShown;
  };

  $scope.editCompanyModal = {
    modalShown : false
  };

  $scope.toggleEditCompanyModal = function(selected) {
    $scope.editCompanyModal.modalShown = !$scope.editCompanyModal.modalShown;
    $scope.company = selected;
  };

}]);
