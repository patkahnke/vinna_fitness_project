myApp.controller('AssessmentController', ['$scope', '$http', '$location', 'ApplicantFactory', 'UserFactory', '$window', function($scope, $http, $location, ApplicantFactory, UserFactory, $window) {
  $scope.assessment = ApplicantFactory.currentAssessment;
  $scope.showA = true;
  $scope.show0 = false;
  $scope.show1 = false;
  $scope.show2 = false;
  $scope.show3 = false;
  $scope.show4 = false;
  $scope.show5 = false;
  $scope.show6 = false;
  $scope.show7 = false;
  $scope.show8 = false;
  $scope.showShoulderRec = false;
  $scope.shoulderRec = '';
  $scope.jobs = [];
  $scope.companies = [];
  $scope.selectedCo = {};


  $scope.applicantSubmit = function(){
    if ($scope.assessment.applicant.firstName !== undefined && $scope.assessment.applicant.lastName !== undefined && $scope.assessment.applicant.gender !== undefined && $scope.assessment.applicant.age !== undefined && $scope.assessment.applicant.height !== undefined && $scope.assessment.applicant.weight !== undefined && $scope.assessment.applicant.medicalHistory !== undefined) {
    ApplicantFactory.currentAssessment = $scope.assessment;
        console.log('this ran');
    $window.location.href='#/assessment';
  }
  };

  userFactory = UserFactory;
  console.log(userFactory);

  if (userFactory.checkLoggedIn() === true) {

  } else {
    $window.location.href='#/';
  }

  ApplicantFactory.all();
  console.log($scope.assessment);

  //utility functions
  getActiveCompanies();

  $scope.checkContentA = function () {
    if($scope.assessment.selectedCompany !== undefined && $scope.assessment.selectedJob !== undefined) {
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.showA = false;
      $scope.show0 = true;
    }
    else {
      alert('Please select an option from both dropdowns before proceeding.');
    }
  };

  $scope.checkContent0 = function () {
    if($scope.assessment.leg_measurement !== undefined && $scope.assessment.hand_measurement !== undefined) {
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.show0 = false;
      $scope.show1 = true;
    }
  };

  $scope.checkContent0Prev = function () {
    if($scope.assessment.leg_measurement !== undefined && $scope.assessment.hand_measurement !== undefined) {
      $scope.show0 = false;
      $scope.showA = true;
    }
  };

  $scope.checkContent1 = function () {
    if($scope.assessment.toe_touch !== undefined && $scope.assessment.squat !== undefined) {
      $scope.assessment.squat = parseInt($scope.assessment.squat);
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.show1 = false;
      $scope.show2 = true;
    }
  };

  $scope.checkContent1Prev = function () {
    if($scope.assessment.toe_touch !== undefined && $scope.assessment.squat !== undefined) {
      $scope.show0 = true;
      $scope.show1 = false;
    }
  };

  $scope.checkContent2 = function () {
    if($scope.assessment.hurdle.right !== undefined && $scope.assessment.hurdle.left !== undefined) {
      $scope.assessment.hurdle.right = parseInt($scope.assessment.hurdle.right);
      $scope.assessment.hurdle.left = parseInt($scope.assessment.hurdle.left);
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.show2 = false;
      $scope.show3 = true;
    }
  };

  $scope.checkContent2Prev = function () {
    if($scope.assessment.hurdle.right !== undefined && $scope.assessment.hurdle.left !== undefined) {
      $scope.show1 = true;
      $scope.show2 = false;
    }
  };

  $scope.checkContent3 = function () {
    if($scope.assessment.lunge.right !== undefined && $scope.assessment.lunge.left !== undefined) {
      $scope.assessment.lunge.right = parseInt($scope.assessment.lunge.right);
      $scope.assessment.lunge.left = parseInt($scope.assessment.lunge.left);
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.show3 = false;
      $scope.show4 = true;
    }
  };

  $scope.checkContent3Prev = function () {
    if($scope.assessment.lunge.right !== undefined && $scope.assessment.lunge.left !== undefined) {
      $scope.show3 = false;
      $scope.show2 = true;
    }
  };

  $scope.getShoulderScore = function () {
    if($scope.assessment.shoulder.top_right !== undefined && $scope.assessment.shoulder.top_left !== undefined && $scope.assessment.hand_measurement !== undefined) {
      var shoulderScore = function (handDist, shoulderTop) {
        var recScore = '';
        if (shoulderTop / handDist <= 1) {
          recScore = 3;
        }
        else if (shoulderTop / handDist > 1 && shoulderTop / handDist <= 1.5) {
          recScore = 2;
        }
        else if (shoulderTop / handDist > 1.5) {
          recScore = 1;
        }
        return recScore;
      };

      var recShoulderRight = shoulderScore($scope.assessment.hand_measurement, $scope.assessment.shoulder.top_right);
      var recShoulderLeft = shoulderScore($scope.assessment.hand_measurement, $scope.assessment.shoulder.top_left);

      $scope.showShoulderRec = true;
      $scope.shoulderRec = 'If no pain/impingement, left shoulder = ' + recShoulderLeft + ' and right shoulder = ' + recShoulderRight + '.';
    }
    else {
      $scope.showShoulderRec = true;
      $scope.shoulderRec = "Please enter values for both measurement fields.";
    }
  };

  $scope.checkContent4 = function () {
    if($scope.assessment.shoulder.top_right !== undefined && $scope.assessment.shoulder.top_left !== undefined && $scope.assessment.shoulder.right !== undefined && $scope.assessment.shoulder.left !== undefined && $scope.assessment.shoulder.right_impingement !== undefined && $scope.assessment.shoulder.left_impingement !== undefined) {
      $scope.assessment.shoulder.right = parseInt($scope.assessment.shoulder.right);
      $scope.assessment.shoulder.left = parseInt($scope.assessment.shoulder.left);
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.show4 = false;
      $scope.show5 = true;
    }
  };

  $scope.checkContent4Prev = function () {
    console.log($scope.assessment);
    if($scope.assessment.shoulder.top_right !== undefined && $scope.assessment.shoulder.top_left !== undefined && $scope.assessment.shoulder.right !== undefined && $scope.assessment.shoulder.left !== undefined && $scope.assessment.shoulder.right_impingement !== undefined && $scope.assessment.shoulder.left_impingement !== undefined) {
      $scope.show4 = false;
      $scope.show3 = true;
    }
  };

  $scope.checkContent5 = function () {
    console.log($scope.assessment);
    if($scope.assessment.leg_raise.right !== undefined && $scope.assessment.leg_raise.left !== undefined) {
      $scope.assessment.leg_raise.right = parseInt($scope.assessment.leg_raise.right);
      $scope.assessment.leg_raise.left = parseInt($scope.assessment.leg_raise.left);
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.show5 = false;
      $scope.show6 = true;
    }
  };

  $scope.checkContent5Prev = function () {
    console.log($scope.assessment);
    if($scope.assessment.leg_raise.right !== undefined && $scope.assessment.leg_raise.left !== undefined) {
      $scope.show5 = false;
      $scope.show4 = true;
    }
  };

  $scope.checkContent6 = function () {
    console.log($scope.assessment);
    if($scope.assessment.push_up !== undefined && $scope.assessment.prone_press_up !== undefined) {
      $scope.assessment.push_up = parseInt($scope.assessment.push_up);
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.show6 = false;
      $scope.show7 = true;
    }
  };

  $scope.checkContent6Prev = function () {
    console.log($scope.assessment);
    if($scope.assessment.push_up !== undefined && $scope.assessment.prone_press_up !== undefined) {
      $scope.show6 = false;
      $scope.show5 = true;
    }
  };

  $scope.checkContent7 = function () {
    console.log($scope.assessment);
    if($scope.assessment.rotary.right !== undefined && $scope.assessment.rotary.left !== undefined  && $scope.assessment.rotary.lumbar_flexion != undefined) {
      $scope.assessment.rotary.right = parseInt($scope.assessment.rotary.right);
      $scope.assessment.rotary.left = parseInt($scope.assessment.rotary.left);
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.show7 = false;
      $scope.show8 = true;
    }
  };

  $scope.checkContent7Prev = function () {
    console.log($scope.assessment);
    if($scope.assessment.rotary.right !== undefined && $scope.assessment.rotary.left !== undefined && $scope.assessment.rotary.lumbar_flexion != undefined) {
      $scope.show7 = false;
      $scope.show6 = true;
    }
  };

  $scope.checkContent8 = function () {
    console.log($scope.assessment);
    $scope.assessment.trainerId = userFactory.getId();
    console.log($scope.assessment.trainerId);
    console.log(userFactory.getId());
      if ($scope.assessment.notes === undefined) {
        $scope.assessment.notes = "none";
      }
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      var results = $scope.assessment;
        $http.post('/assessmentResults', results).then(function(response) {
          if (response.status == 201 ) {
            $scope.assessment = {};
            ApplicantFactory.currentAssessment = $scope.assessment;
            console.log($scope.assessment);
            alert('Assessment data successfully saved.');
            $window.location.href='#/applicant';
          } else {
            alert('Error saving results. Please try again.');
          }
        });
  };

  $scope.checkContent8Prev = function () {
    console.log($scope.assessment);
      $scope.show8 = false;
      $scope.show7 = true;
    };

  //get companies for testing
  function getActiveCompanies() {
    $http.get('/companies/active')
      .then(function (response) {
        console.log('GET /companies/active ', response.data);
        $scope.companies = response.data;
      });
  }

  //retrieve existing jobs from selected company
  $scope.getJobs = function() {
    var id = $scope.assessment.selectedCompany.id;
    $http.get('/jobs/' + id)
      .then(function (response) {
        $scope.jobs = response.data;
        console.log('GET /jobs ', response.data);
      });
  };

}]);
