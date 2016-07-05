myApp.controller('AdminCompanyController', ['$scope', '$http', 'AdminDataFactory', '$location', function($scope, $http, AdminDataFactory, $location)
{
  //injections
  $scope.dataFactory = AdminDataFactory;
  //scope variables
  $scope.companies = [];
  $scope.newCompany = {};

  getCompanies();

  //get existing companies
  function getCompanies() {
    $http.get('/companies')
      .then(function (response) {
        console.log('GET /companies ', response.data);
        $scope.companies = response.data;
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
           getCompanies();
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
           getCompanies();
           return;
        } else {
          alert('Your company was not recieved!');
        }
      });
  };

  // 'delete' == deactivate(gives company inactive status) existing company
  $scope.deleteCompany = function(company) {
    console.log('deactivate', company);
    var id = company.id;
    var deactivateCompany = confirm('Are you sure you want to remove ' + company.name + '?');
    if (deactivateCompany === true){
      $http.put('/companies/deactivate/' + id)
        .then(function (response) {
          console.log('PUT /companies/', response);
          alert('Company Removed!');
          $scope.toggleEditCompanyModal();
          getCompanies();
          return;
        });
      } else {
        alert('You can find removed companies in the inactive company screen.');
        $scope.toggleEditCompanyModal();
        return;
      }
  };

  //selectedCoRedirect
  $scope.selectedCoRedirect = function(company){
    $scope.dataFactory.selectedCo.job = company;
    $location.path('/selectedco');
  };

  //modals
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
