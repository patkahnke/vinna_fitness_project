myApp.controller('AdminCompanyController', ['$scope', '$http', 'AdminDataFactory', '$location', function($scope, $http, AdminDataFactory, $location)
{
  //injections
  $scope.dataFactory = AdminDataFactory;
  //scope variables
  $scope.activeCompanies = [];
  $scope.inactiveCompanies = [];
  $scope.newCompany = {};

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
    var data = $scope.newCompany;
    $http.post('/companies', data)
      .then(function (response) {
        console.log('POST /companies', response);
        $scope.newCompany = {};
        if (response.status == 201) {
           $scope.toggleAddCompanyModal();
           getActiveCompanies();
        } else {
          alert('Your company was not recieved!');
        }
      });
  };

  // update existing company
  $scope.updateCompany = function (company) {
    var id = company.id;
    $http.put('/companies/edit/' + id, company)
      .then(function (response) {
        console.log('PUT /companies ', response);
        if (response.status == 204) {
           alert('Company Updated!');
           $scope.toggleEditCompanyModal();
           getActiveCompanies();
           return;
        } else {
          alert('Your company was not recieved!');
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
          alert('Company Removed!');
          getActiveCompanies();
          return;
        });
      } else {
        alert('You can find removed companies in the inactive company screen.');
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
    $location.path('/selectedco');
  };

  //active/inactive company specific redirects
  $scope.activeCoView = function(){
    $location.path('/companies');
  };

  $scope.inactiveCoView = function(){
    $location.path('/companies/inactive');
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
