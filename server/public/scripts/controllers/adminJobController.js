myApp.controller('AdminJobController', ['$scope', '$http', 'AdminDataFactory', '$location', function($scope, $http, AdminDataFactory, $location)
{
  //injections
  $scope.dataFactory = AdminDataFactory;
  $scope.selectedCo = $scope.dataFactory.selectedCo.job;
  //scope variables
  $scope.jobs = [];
  $scope.newJobs = {};

  // getJobs();

  //retrieve existing jobs
  function getJobs() {
    $http.get('/jobs')
      .then(function (response) {
        $scope.jobs = response.data;
        console.log('GET /jobs ', response.data);
      });
  }

  //add new job
  $scope.addJob = function () {
    var data = $scope.newJob;
    $http.post('/jobs', data)
      .then(function (response) {
        console.log('POST /jobs');
        console.log(response);
        if (response.status == 201 ) {
           $scope.toggleAddJobModal();
           getJobs();
        } else {
          alert('Your job was not recieved!');
        }
      });
    };

  //modals
  $scope.addJobModal = {
    modalShown : false
  };

  $scope.toggleAddJobModal = function() {
    $scope.addJobModal.modalShown = !$scope.addJobModal.modalShown;
  };

  $scope.editJobModal = {
    modalShown : false
  };

  $scope.toggleEditJobModal = function(selected) {
    $scope.editJobModal.modalShown = !$scope.editJobModal.modalShown;
    $scope.job = selected;
  };

}]);
