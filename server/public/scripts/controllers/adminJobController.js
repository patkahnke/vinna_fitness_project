myApp.controller('AdminJobController', ['$scope', '$http', 'AdminDataFactory', '$location', '$window', 'UserFactory', function($scope, $http, AdminDataFactory, $location, $window, UserFactory){
  //injections
  $scope.dataFactory = AdminDataFactory;
  userFactory = UserFactory;
  $scope.selectedCo = $scope.dataFactory.selectedCo.job;
  //scope variables
  $scope.jobs = [];
  $scope.newJob = {};
  $scope.job = {};
  //ng option dropdown values and variations
  $scope.standardMinimums = [0,1,2,3];
  $scope.coreMinimums = [0,1,2,3,4,5,6,7,8,9];
  $scope.otherMinimums = [0,1,2,3,4,5,6,7,8,9,10,11,12];
  $scope.compositeMinimums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  //authenticated
  if (userFactory.checkLoggedIn() === true) {
    if (userFactory.checkAdmin() === false) {
      $location.path('/trainer');
    }
  } else {
    $location.path('/');
  }

  getJobs();

  //retrieve existing jobs from selected company
  function getJobs() {
    var id = $scope.selectedCo.id;
    $http.get('/jobs/' + id)
      .then(function (response) {
        $scope.jobs = response.data;
        //console.log('GET /jobs ', response.data);
      });
  }

  //post http call to add new job
  $scope.addJob = function () {
    if ($scope.newJob.title !== undefined && $scope.newJob.minDeepSquat !== undefined && $scope.newJob.minHurdleStep !== undefined && $scope.newJob.minInlineLunge !== undefined && $scope.newJob.minShoulderMob !== undefined && $scope.newJob.minActiveStraightLegRaise !== undefined && $scope.newJob.minRotaryStability !== undefined && $scope.newJob.minTrunkStabilityPushup !== undefined && $scope.newJob.compositeScore !== undefined && $scope.newJob.coreSubtest !== undefined && $scope.newJob.shoulderSubtest !== undefined && $scope.newJob.lowerBodySubtest !== undefined) {
    var data = $scope.newJob;
    var id = $scope.selectedCo.id;
    $http.post('/jobs/' + id, data)
      .then(function (response) {
        //console.log('POST /jobs');
        //console.log(response);
        if (response.status == 201 ) {
           $scope.toggleAddJobModal();
           getJobs();
           $scope.newJob = {};
           return;
        } else {
          alert('Job was not recieved. Please try again.');
          return;
        }
      });
    }
    else {
      alert("Please complete all required fields.");
    }
    };

    //put http call to update existing job
    $scope.updateJob = function (job) {
      var id = job.id;
      $http.put('/jobs/update/' + id, job)
        .then(function (response) {
          //console.log('PUT /job ', response);
          if (response.status == 204) {
             alert('Job updated!');
             $scope.toggleEditJobModal();
             getJobs();
             return;
          } else {
            alert('Job update was not recieved. Please try again.');
            return;
          }
        });
    };

    //delet http call to delete existing selected job
    $scope.deleteJob = function(job) {
      var id = job.id;
      var deleteJob = confirm('Are you sure you want to remove ' + job.title + '?');
      if (deleteJob === true){
        $http.delete('/jobs/delete/' + id)
          .then(function (response) {
            //console.log('DELETE /jobs/', response);
            $scope.toggleEditJobModal();
            getJobs();
            return;
          });
        } else {
          $scope.toggleEditJobModal();
          return;
        }
    };

  //resets any object you pass through it. To be Utilized after AJAX calls
  function resetObject (object) {
    object = {};
  }

  //variable naming prep for backend
  function defaultValues (selected) {
    $scope.job = selected;
    $scope.job.minDeepSquat = selected.min_deep_squat;
    $scope.job.minHurdleStep = selected.min_hurdle_step;
    $scope.job.minInlineLunge = selected.min_inline_lunge;
    $scope.job.minShoulderMob = selected.min_shoulder_mob;
    $scope.job.minActiveStraightLegRaise = selected.min_straight_leg;
    $scope.job.minRotaryStability = selected.min_rotary_stab;
    $scope.job.minTrunkStabilityPushup = selected.min_trunk_push_up;
    $scope.job.compositeScore = selected.min_composite;
    $scope.job.coreSubtest = selected.core_subtest;
    $scope.job.shoulderSubtest = selected.shoulder_subtest;
    $scope.job.lowerBodySubtest = selected.low_body_subtest;
    $scope.job.otherSubtest = selected.other_subtest;
  }

  //active/inactive company specific redirects
  $scope.activeCompanies = function(){
    $window.location.href='#/companies';
  };

  //job modals
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
    if ($scope.editJobModal.modalShown === true){
      defaultValues(selected);
      $scope.job = selected;
      return;
    }
  };

}]);
