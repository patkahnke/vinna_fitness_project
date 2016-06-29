myApp.controller('AssessmentController', ['$scope', '$http', '$location', 'ApplicantFactory',  function($scope, $http, $location, ApplicantFactory) {
  $scope.assessment = ApplicantFactory.currentAssessment;
  $scope.show1 = true;
  $scope.show2 = false;
  $scope.show3 = false;
  $scope.show4 = false;
  $scope.show5 = false;
  $scope.show6 = false;
  $scope.show7 = false;
  $scope.show8 = false;
  $scope.showShoulderRec = false;
  $scope.shoulderRec = '';

//$scope.email = object with fields
  /*$scope.sendMail = function ()  {
    $http.post('/mail', $scope.email).then(function(response) {
      console.log(response);
    });
  };*/

  ApplicantFactory.all();
  console.log($scope.assessment);

  $scope.checkContent1 = function () {
    if($scope.assessment.toe_touch !== undefined && $scope.assessment.squat !== undefined) {
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.show1 = false;
      $scope.show2 = true;
    }
  };

  $scope.checkContent2 = function () {
    if($scope.assessment.hurdle.right !== undefined && $scope.assessment.hurdle.left !== undefined && $scope.assessment.hurdle.measurement !== undefined) {
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.show2 = false;
      $scope.show3 = true;
    }
  };

  $scope.checkContent2Prev = function () {
    if($scope.assessment.hurdle.right !== undefined && $scope.assessment.hurdle.left !== undefined && $scope.assessment.hurdle.measurement !== undefined) {
      $scope.show1 = true;
      $scope.show2 = false;
    }
  };

  $scope.checkContent3 = function () {
    if($scope.assessment.lunge.right !== undefined && $scope.assessment.lunge.left !== undefined && $scope.assessment.lunge.measurement !== undefined) {
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.show3 = false;
      $scope.show4 = true;
    }
  };

  $scope.checkContent3Prev = function () {
    if($scope.assessment.lunge.right !== undefined && $scope.assessment.lunge.left !== undefined && $scope.assessment.lunge.measurement !== undefined) {
      $scope.show3 = false;
      $scope.show2 = true;
    }
  };

  $scope.getShoulderScore = function () {
    if($scope.assessment.shoulder.top_right !== undefined && $scope.assessment.shoulder.top_left !== undefined && $scope.assessment.shoulder.distance !== undefined) {
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

      var recShoulderRight = shoulderScore($scope.assessment.shoulder.distance, $scope.assessment.shoulder.top_right);
      var recShoulderLeft = shoulderScore($scope.assessment.shoulder.distance, $scope.assessment.shoulder.top_left);

      $scope.showShoulderRec = true;
      $scope.shoulderRec = 'If no pain present, left shoulder score = ' + recShoulderLeft + ' and right shoulder score = ' + recShoulderRight + '.';
    }
    else {
      $scope.showShoulderRec = true;
      $scope.shoulderRec = "Please enter values for all three measurement fields.";
    }
  };

  $scope.checkContent4 = function () {
    if($scope.assessment.shoulder.top_right !== undefined && $scope.assessment.shoulder.top_left !== undefined && $scope.assessment.shoulder.right !== undefined && $scope.assessment.shoulder.left !== undefined && $scope.assessment.shoulder.distance !== undefined) {
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.show4 = false;
      $scope.show5 = true;
    }
  };

  $scope.checkContent4Prev = function () {
    console.log($scope.assessment);
    if($scope.assessment.shoulder.top_right !== undefined && $scope.assessment.shoulder.top_left !== undefined && $scope.assessment.shoulder.right !== undefined && $scope.assessment.shoulder.left !== undefined && $scope.assessment.shoulder.distance !== undefined) {
      $scope.show4 = false;
      $scope.show3 = true;
    }
  };

  $scope.checkContent5 = function () {
    console.log($scope.assessment);
    if($scope.assessment.leg_raise.right !== undefined && $scope.assessment.leg_raise.left !== undefined) {
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
    if($scope.assessment.push_up !== undefined) {
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.show6 = false;
      $scope.show7 = true;
    }
  };

  $scope.checkContent6Prev = function () {
    console.log($scope.assessment);
    if($scope.assessment.push_up !== undefined) {
      $scope.show6 = false;
      $scope.show5 = true;
    }
  };

  $scope.checkContent7 = function () {
    console.log($scope.assessment);
    if($scope.assessment.rotary.right !== undefined && $scope.assessment.rotary.left !== undefined) {
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
      $scope.show7 = false;
      $scope.show8 = true;
    }
  };

  $scope.checkContent7Prev = function () {
    console.log($scope.assessment);
    if($scope.assessment.rotary.right !== undefined && $scope.assessment.rotary.left !== undefined) {
      $scope.show7 = false;
      $scope.show6 = true;
    }
  };

  $scope.checkContent8 = function () {
    console.log($scope.assessment);
      ApplicantFactory.currentAssessment = $scope.assessment;
      console.log(ApplicantFactory.currentAssessment);
        $http.post('/mail').then(function(response) {
          console.log(response);
        });
      console.log("submit function, then redirect to trainer home");
  };

  $scope.checkContent8Prev = function () {
    console.log($scope.assessment);
      $scope.show8 = false;
      $scope.show7 = true;
    };
}]);
