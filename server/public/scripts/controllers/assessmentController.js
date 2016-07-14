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

  userFactory = UserFactory;
<<<<<<< HEAD
  console.log(userFactory);

=======
  //console.log(userFactory);

//Checks if user is still logged in.
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
  if (userFactory.checkLoggedIn() === true) {
  } else {
    $window.location.href='#/';
  }

<<<<<<< HEAD
  console.log($scope.assessment);
=======
  //console.log($scope.assessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77

  //utility functions
  getActiveCompanies();

<<<<<<< HEAD
  $scope.applicantSubmit = function(){
    if ($scope.assessment.applicant.firstName !== undefined && $scope.assessment.applicant.lastName !== undefined && $scope.assessment.applicant.gender !== undefined && $scope.assessment.applicant.age !== undefined && $scope.assessment.applicant.height !== undefined && $scope.assessment.applicant.weight !== undefined && $scope.assessment.applicant.medicalHistory !== undefined) {
    ApplicantFactory.currentAssessment = $scope.assessment;
        console.log('this ran');
=======
//Stores applicant information in ApplicantFactory.
  $scope.applicantSubmit = function(){
    if ($scope.assessment.applicant.firstName !== undefined && $scope.assessment.applicant.lastName !== undefined && $scope.assessment.applicant.gender !== undefined && $scope.assessment.applicant.age !== undefined && $scope.assessment.applicant.height !== undefined && $scope.assessment.applicant.weight !== undefined && $scope.assessment.applicant.medicalHistory !== undefined) {
    ApplicantFactory.currentAssessment = $scope.assessment;
        //console.log('this ran');
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
        alert('Thank you! Your initial information has been successfully submitted. Please return this device to the trainer to begin the assessment.');
        $window.location.href='#/assessment';
  }
  };

<<<<<<< HEAD
  $scope.checkContentA = function () {
    if($scope.assessment.selectedCompany !== undefined && $scope.assessment.selectedJob !== undefined) {
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
=======
//Checks if all required fields have been completed before showing the next view, and stores assessment data in ApplicantFactory.
  $scope.checkContentA = function () {
    if($scope.assessment.selectedCompany !== undefined && $scope.assessment.selectedJob !== undefined) {
      ApplicantFactory.currentAssessment = $scope.assessment;
      //console.log(ApplicantFactory.currentAssessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
      $scope.showA = false;
      $scope.show0 = true;
    }
    else {
      alert('Please select an option from both dropdowns before proceeding.');
    }
  };

<<<<<<< HEAD
  $scope.checkContent0 = function () {
    if($scope.assessment.leg_measurement !== undefined && $scope.assessment.hand_measurement !== undefined) {
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
=======
//Checks if all required fields have been completed before showing the next view, and stores assessment data in ApplicantFactory.
  $scope.checkContent0 = function () {
    if($scope.assessment.leg_measurement !== undefined && $scope.assessment.hand_measurement !== undefined) {
      ApplicantFactory.currentAssessment = $scope.assessment;
      //console.log(ApplicantFactory.currentAssessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
      $scope.show0 = false;
      $scope.show1 = true;
    }
  };

<<<<<<< HEAD
=======
//Checks if all required fields have been completed before showing the previous view.
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
  $scope.checkContent0Prev = function () {
    if($scope.assessment.leg_measurement !== undefined && $scope.assessment.hand_measurement !== undefined) {
      $scope.show0 = false;
      $scope.showA = true;
    }
  };

<<<<<<< HEAD
=======
//Checks if all required fields have been completed before showing the next view, and stores assessment data in ApplicantFactory.
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
  $scope.checkContent1 = function () {
    if($scope.assessment.toe_touch !== undefined && $scope.assessment.squat !== undefined) {
      $scope.assessment.squat = parseInt($scope.assessment.squat);
      ApplicantFactory.currentAssessment = $scope.assessment;
<<<<<<< HEAD
      console.log(ApplicantFactory.currentAssessment);
=======
      //console.log(ApplicantFactory.currentAssessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
      $scope.show1 = false;
      $scope.show2 = true;
    }
  };

<<<<<<< HEAD
=======
//Checks if all required fields have been completed before showing the previous view.
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
  $scope.checkContent1Prev = function () {
    if($scope.assessment.toe_touch !== undefined && $scope.assessment.squat !== undefined) {
      $scope.show0 = true;
      $scope.show1 = false;
    }
  };

<<<<<<< HEAD
=======
//Checks if all required fields have been completed before showing the next view, and stores assessment data in ApplicantFactory.
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
  $scope.checkContent2 = function () {
    if($scope.assessment.hurdle.right !== undefined && $scope.assessment.hurdle.left !== undefined) {
      $scope.assessment.hurdle.right = parseInt($scope.assessment.hurdle.right);
      $scope.assessment.hurdle.left = parseInt($scope.assessment.hurdle.left);
      ApplicantFactory.currentAssessment = $scope.assessment;
<<<<<<< HEAD
      console.log(ApplicantFactory.currentAssessment);
=======
      //console.log(ApplicantFactory.currentAssessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
      $scope.show2 = false;
      $scope.show3 = true;
    }
  };

<<<<<<< HEAD
=======
//Checks if all required fields have been completed before showing the previous view.
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
  $scope.checkContent2Prev = function () {
    if($scope.assessment.hurdle.right !== undefined && $scope.assessment.hurdle.left !== undefined) {
      $scope.show1 = true;
      $scope.show2 = false;
    }
  };

<<<<<<< HEAD
=======
//Checks if all required fields have been completed before showing the next view, and stores assessment data in ApplicantFactory.
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
  $scope.checkContent3 = function () {
    if($scope.assessment.lunge.right !== undefined && $scope.assessment.lunge.left !== undefined) {
      $scope.assessment.lunge.right = parseInt($scope.assessment.lunge.right);
      $scope.assessment.lunge.left = parseInt($scope.assessment.lunge.left);
      ApplicantFactory.currentAssessment = $scope.assessment;
<<<<<<< HEAD
      console.log(ApplicantFactory.currentAssessment);
=======
      //console.log(ApplicantFactory.currentAssessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
      $scope.show3 = false;
      $scope.show4 = true;
    }
  };

<<<<<<< HEAD
=======
//Checks if all required fields have been completed before showing the previous view.
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
  $scope.checkContent3Prev = function () {
    if($scope.assessment.lunge.right !== undefined && $scope.assessment.lunge.left !== undefined) {
      $scope.show3 = false;
      $scope.show2 = true;
    }
  };

<<<<<<< HEAD
=======
//Calculates recommended shoulder mobility score if no pain is present on either side during shoulder impingement test.
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
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

<<<<<<< HEAD
=======
//Checks if all required fields have been completed before showing the next view, and stores assessment data in ApplicantFactory.
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
  $scope.checkContent4 = function () {
    if($scope.assessment.shoulder.top_right !== undefined && $scope.assessment.shoulder.top_left !== undefined && $scope.assessment.shoulder.right !== undefined && $scope.assessment.shoulder.left !== undefined && $scope.assessment.shoulder.right_impingement !== undefined && $scope.assessment.shoulder.left_impingement !== undefined) {
      $scope.assessment.shoulder.right = parseInt($scope.assessment.shoulder.right);
      $scope.assessment.shoulder.left = parseInt($scope.assessment.shoulder.left);
      ApplicantFactory.currentAssessment = $scope.assessment;
<<<<<<< HEAD
      console.log(ApplicantFactory.currentAssessment);
=======
      //console.log(ApplicantFactory.currentAssessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
      $scope.show4 = false;
      $scope.show5 = true;
    }
  };

<<<<<<< HEAD
  $scope.checkContent4Prev = function () {
    console.log($scope.assessment);
=======
//Checks if all required fields have been completed before showing the previous view.
  $scope.checkContent4Prev = function () {
    //console.log($scope.assessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
    if($scope.assessment.shoulder.top_right !== undefined && $scope.assessment.shoulder.top_left !== undefined && $scope.assessment.shoulder.right !== undefined && $scope.assessment.shoulder.left !== undefined && $scope.assessment.shoulder.right_impingement !== undefined && $scope.assessment.shoulder.left_impingement !== undefined) {
      $scope.show4 = false;
      $scope.show3 = true;
    }
  };

<<<<<<< HEAD
  $scope.checkContent5 = function () {
    console.log($scope.assessment);
=======
//Checks if all required fields have been completed before showing the next view, and stores assessment data in ApplicantFactory.
  $scope.checkContent5 = function () {
    //console.log($scope.assessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
    if($scope.assessment.leg_raise.right !== undefined && $scope.assessment.leg_raise.left !== undefined) {
      $scope.assessment.leg_raise.right = parseInt($scope.assessment.leg_raise.right);
      $scope.assessment.leg_raise.left = parseInt($scope.assessment.leg_raise.left);
      ApplicantFactory.currentAssessment = $scope.assessment;
<<<<<<< HEAD
      console.log(ApplicantFactory.currentAssessment);
=======
      //console.log(ApplicantFactory.currentAssessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
      $scope.show5 = false;
      $scope.show6 = true;
    }
  };

<<<<<<< HEAD
  $scope.checkContent5Prev = function () {
    console.log($scope.assessment);
=======
//Checks if all required fields have been completed before showing the previous view.
  $scope.checkContent5Prev = function () {
    //console.log($scope.assessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
    if($scope.assessment.leg_raise.right !== undefined && $scope.assessment.leg_raise.left !== undefined) {
      $scope.show5 = false;
      $scope.show4 = true;
    }
  };

<<<<<<< HEAD
  $scope.checkContent6 = function () {
    console.log($scope.assessment);
    if($scope.assessment.push_up !== undefined && $scope.assessment.prone_press_up !== undefined) {
      $scope.assessment.push_up = parseInt($scope.assessment.push_up);
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
=======
//Checks if all required fields have been completed before showing the next view, and stores assessment data in ApplicantFactory.
  $scope.checkContent6 = function () {
    //console.log($scope.assessment);
    if($scope.assessment.push_up !== undefined && $scope.assessment.prone_press_up !== undefined) {
      $scope.assessment.push_up = parseInt($scope.assessment.push_up);
      ApplicantFactory.currentAssessment = $scope.assessment;
      //console.log(ApplicantFactory.currentAssessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
      $scope.show6 = false;
      $scope.show7 = true;
    }
  };

<<<<<<< HEAD
  $scope.checkContent6Prev = function () {
    console.log($scope.assessment);
=======
//Checks if all required fields have been completed before showing the previous view.
  $scope.checkContent6Prev = function () {
    //console.log($scope.assessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
    if($scope.assessment.push_up !== undefined && $scope.assessment.prone_press_up !== undefined) {
      $scope.show6 = false;
      $scope.show5 = true;
    }
  };

<<<<<<< HEAD
  $scope.checkContent7 = function () {
    console.log($scope.assessment);
    if($scope.assessment.rotary.right !== undefined && $scope.assessment.rotary.left !== undefined  && $scope.assessment.rotary.lumbar_flexion != undefined) {
      $scope.assessment.rotary.right = parseInt($scope.assessment.rotary.right);
      $scope.assessment.rotary.left = parseInt($scope.assessment.rotary.left);
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
=======
//Checks if all required fields have been completed before showing the next view, and stores assessment data in ApplicantFactory.
  $scope.checkContent7 = function () {
    //console.log($scope.assessment);
    if($scope.assessment.rotary.right !== undefined && $scope.assessment.rotary.left !== undefined  && $scope.assessment.rotary.lumbar_flexion !== undefined) {
      $scope.assessment.rotary.right = parseInt($scope.assessment.rotary.right);
      $scope.assessment.rotary.left = parseInt($scope.assessment.rotary.left);
      ApplicantFactory.currentAssessment = $scope.assessment;
      //console.log(ApplicantFactory.currentAssessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
      $scope.show7 = false;
      $scope.show8 = true;
    }
  };

<<<<<<< HEAD
  $scope.checkContent7Prev = function () {
    console.log($scope.assessment);
    if($scope.assessment.rotary.right !== undefined && $scope.assessment.rotary.left !== undefined && $scope.assessment.rotary.lumbar_flexion != undefined) {
=======
//Checks if all required fields have been completed before showing the previous view.
  $scope.checkContent7Prev = function () {
    //console.log($scope.assessment);
    if($scope.assessment.rotary.right !== undefined && $scope.assessment.rotary.left !== undefined && $scope.assessment.rotary.lumbar_flexion !== undefined) {
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
      $scope.show7 = false;
      $scope.show6 = true;
    }
  };

<<<<<<< HEAD
  $scope.checkContent8 = function () {
    console.log($scope.assessment);
    $scope.assessment.trainerId = userFactory.getId();
    console.log($scope.assessment.trainerId);
    console.log(userFactory.getId());
=======
//Checks if all required fields have been completed before showing the next view, and stores assessment data in ApplicantFactory.
  $scope.checkContent8 = function () {
    //console.log($scope.assessment);
    $scope.assessment.trainerId = userFactory.getId();
    //console.log($scope.assessment.trainerId);
    //console.log(userFactory.getId());
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
      if ($scope.assessment.notes === undefined) {
        $scope.assessment.notes = "none";
      }
      ApplicantFactory.currentAssessment = $scope.assessment;
<<<<<<< HEAD
      console.log(ApplicantFactory.currentAssessment);
=======
      //console.log(ApplicantFactory.currentAssessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
      var results = $scope.assessment;
        $http.post('/assessmentResults', results).then(function(response) {
          if (response.status == 201 ) {
            $scope.assessment = {};
            ApplicantFactory.currentAssessment = $scope.assessment;
<<<<<<< HEAD
            console.log($scope.assessment);
=======
            //console.log($scope.assessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
            alert('Assessment data successfully submitted.');
            $window.location.href='#/applicant';
          } else {
            alert('Error saving results. Please try again.');
          }
        });
  };

<<<<<<< HEAD
  $scope.checkContent8Prev = function () {
    console.log($scope.assessment);
=======
//Checks if all required fields have been completed before showing the previous view.
  $scope.checkContent8Prev = function () {
    //console.log($scope.assessment);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
      $scope.show8 = false;
      $scope.show7 = true;
    };

  //get companies for testing
  function getActiveCompanies() {
    $http.get('/companies/active')
      .then(function (response) {
<<<<<<< HEAD
        console.log('GET /companies/active ', response.data);
=======
        //console.log('GET /companies/active ', response.data);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
        $scope.companies = response.data;
      });
  }

  //retrieve existing jobs from selected company
  $scope.getJobs = function() {
    var id = $scope.assessment.selectedCompany.id;
    $http.get('/jobs/' + id)
      .then(function (response) {
        $scope.jobs = response.data;
<<<<<<< HEAD
        console.log('GET /jobs ', response.data);
=======
        //console.log('GET /jobs ', response.data);
>>>>>>> 8cf96f6c35b58ee4260774cb4fbca3622609cd77
      });
  };

}]);
