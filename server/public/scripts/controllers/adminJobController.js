myApp.controller('AdminJobController', ['$scope', '$http', 'AdminDataFactory', '$location', function($scope, $http, AdminDataFactory, $location)
{
  //injections
  $scope.dataFactory = AdminDataFactory;
  $scope.selectedCo = $scope.dataFactory.selectedCo.job;
  //scope variables
  $scope.jobs = [];
  $scope.newJob = {};
  //ng option dropdown values and variations
  $scope.standardMinimums = [0,1,2,3];
  $scope.coreMinimums = [0,1,2,3,4,5,6,7,8,9];
  $scope.otherMinimums = [0,1,2,3,4,5,6,7,8,9,10,11,12];
  $scope.compositeMinimums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  getJobs();

  //retrieve existing jobs from selected company
  function getJobs() {
    var id = $scope.selectedCo.id;
    $http.get('/jobs/' + id)
      .then(function (response) {
        $scope.jobs = response.data;
        console.log('GET /jobs ', response.data);
      });
  }

  //add new job
  $scope.addJob = function () {
    var data = $scope.newJob;
    var id = $scope.selectedCo.id;
    $http.post('/jobs/' + id, data)
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
