function Applicant(data, jobCriteria) {
  this.jobCriteria = jobCriteria;
  this.firstName = data.firstName;
  this.lastName = data.lastName;
  this.dateOfBirth = data.dateOfBirth;
  this.height = data.height;
  this.weight = data.weight;
  this.gender = data.gender;
  this.medicalHistory = data.medicalHistory;
  this.handMeasurement = data.handMeasurement;
  this.armMeasurement = data.armMeasurement;
  this.legMeasurement = data.legMeasurement;
  this.toeTouch = data.toeTouch;
  this.deepSquat = data.deepSquat;
  this.hurdleStepLeft = data.hurdleStepLeft;
  this.hurdleStepRight = data.hurdleStepRight;
  this.hurdleStepLeftInches = data.hurdleStepLeftInches;
  this.hurdleStepRightInches = data.hurdleStepRightInches;
  this.inlineLungeLeft = data.inlineLungeLeft;
  this.inlineLungeRight = data.inlineLungeRight;
  this.inlineLungeLeftInches = data.inlineLungeLeftInches;
  this.inlineLungeRightInches = data.inlineLungeRightInches;
  this.shoulderMobLeftTop = data.shoulderMobLeftTop;
  this.shoulderMobRightTop = data.shoulderMobRightTop;
  this.shoulderMobLeft = data.shoulderMobLeft;
  this.shoulderMobRight = data.shoulderMobRight;
  this.activeStraightLegRaiseLeft = data.activeStraightLegRaiseLeft;
  this.activeStraightLegRaiseRight = data.activeStraightLegRaiseRight;
  this.activeStraightLegRaiseLeftMeasurement = data.activeStraightLegRaiseLeftMeasurement;
  this.activeStraightLegRaiseRightMeasurement = data.activeStraightLegRaiseRightMeasurement;
  this.trunkStabilityPushup = data.trunkStabilityPushup;
  this.pronePressupTest = data.pronePressupTest;
  this.rotaryStabilityLeft = data.rotaryStabilityLeft;
  this.rotaryStabilityRight = data.rotaryStabilityRight;
  this.kneelingLumbarFlexionTestLeft = data.kneelingLumbarFlexionTestLeft;
  this.kneelingLumbarFlexionTestRight = data.kneelingLumbarFlexionTestRight;
  this.hurdleStepTotal = function () {
    var lowScore = Math.min(this.hurdleStepLeft, this.hurdleStepRight);
    return lowScore;
  };

  this.inlineLungeTotal = function () {
    var lowScore = Math.min(this.inlineLungeLeft, this.inlineLungeRight);
    return lowScore;
  };

  this.shoulderMobTotal = function () {
    var lowScore = Math.min(this.shoulderMobLeft, this.shoulderMobRight);
    return lowScore;
  };

  this.activeStraightLegRaiseTotal = function () {
    var lowScore = Math.min(this.activeStraightLegRaiseLeft, this.activeStraightLegRaiseRight);
    return lowScore;
  };

  this.rotaryStabilityTotal = function () {
    var lowScore = Math.min(this.rotaryStabilityLeft, this.rotaryStabilityRight);
    return lowScore;
  };

  this.compositeScore = function () {
    var totalScore =
      this.deepSquat +
      this.hurdleStepTotal() +
      this.inlineLungeTotal() +
      this.shoulderMobTotal() +
      this.activeStraightLegRaiseTotal() +
      this.rotaryStabilityTotal() +
      this.trunkStabilityPushup;
    return totalScore;
  };

  this.totalZerosAndOnes = function () {
    var totalZerosAndOnes = 0;
    if (this.deepSquat < 2) {
      totalZerosAndOnes++;
    };

    if (this.hurdleStepTotal() < 2) {
      totalZerosAndOnes++;
    };

    if (this.inlineLungeTotal() < 2) {
      totalZerosAndOnes++;
    };

    if (this.shoulderMobTotal() < 2) {
      totalZerosAndOnes++;
    };

    if (this.activeStraightLegRaiseTotal() < 2) {
      totalZerosAndOnes++;
    };

    if (this.rotaryStabilityTotal() < 2) {
      totalZerosAndOnes++;
    };

    if (this.trunkStabilityPushup < 2) {
      totalZerosAndOnes++;
    };

    return totalZerosAndOnes;
  };

  this.totalAsymmetries = function () {
    var totalAsymmetries = 0;
    if (this.hurdleStepLeft != this.hurdleStepRight) {
      totalAsymmetries++;
    };

    if (this.inlineLungeLeft != this.inlineLungeRight) {
      totalAsymmetries++;
    };

    if (this.shoulderMobLeft != this.shoulderMobRight) {
      totalAsymmetries++;
    };

    if (this.activeStraightLegRaiseLeft != this.activeStraightLegRaiseRight) {
      totalAsymmetries++;
    };

    if (this.rotaryStabilityLeft != this.rotaryStabilityRight) {
      totalAsymmetries++;
    };

    return totalAsymmetries;
  };

  this.totalHighRiskAreas = function () {
    var totalHighRisk = this.totalZerosAndOnes() + this.totalAsymmetries();
    return totalHighRisk;
  };

  this.passDeepSquat = function () {
    if (this.deepSquat >= jobCriteria.minDeepSquat) {
      return true;
    } else {
      return false;
    }
  };

  this.passHurdleStep = function () {
    if (this.hurdleStepTotal() >= jobCriteria.minHurdleStep) {
      return true;
    } else {
      return false;
    }
  };

  this.passInlineLunge = function () {
    if (this.inlineLungeTotal() >= jobCriteria.minInlineLunge) {
      return true;
    } else {
      return false;
    }
  };

  this.passShoulderMob = function () {
    if (this.shoulderMobTotal() >= jobCriteria.minShoulderMob) {
      return true;
    } else {
      return false;
    }
  };

  this.passActiveStraightLegRaise = function () {
    if (this.activeStraightLegRaiseTotal() >= jobCriteria.minActiveStraightLegRaise) {
      return true;
    } else {
      return false;
    }
  };

  this.passRotaryStability = function () {
    if (this.rotaryStabilityTotal() >= jobCriteria.minRotaryStability) {
      return true;
    } else {
      return false;
    }
  };

  this.passTrunkStability = function () {
    if (this.trunkStabilityPushup >= jobCriteria.minTrunkStabilityPushup) {
      return true;
    } else {
      return false;
    }
  };

  this.passCompositeScore = function () {
    if (this.compositeScore() >= jobCriteria.minCompositeScore) {
      return true;
    } else {
      return false;
    }
  };

  this.passTotalZerosAndOnes = function () {
    if (this.totalZerosAndOnes() <= jobCriteria.maxTotalZerosAndOnes) {
      return true;
    } else {
      return false;
    }
  };

  this.passTotalAsymmetries = function () {
    if (this.totalAsymmetries() <= jobCriteria.maxTotalAsymmetries) {
      return true;
    } else {
      return false;
    }
  };

  this.passTotalHighRiskAreas = function () {
    if (this.totalHighRiskAreas() <= jobCriteria.maxTotalHighRiskAreas) {
      return true;
    } else {
      return false;
    }
  };

  this.passSubtestOne = function () {
    console.log('SUBTEST ONE');
    var pass = true;
    var tests = '';
    var subtestArray = jobCriteria.minSubtestOne.subtestArray;
    var subtestTotalScore = 0;
    var minSubtestScore = jobCriteria.minSubtestOne.minScore;
    for (var i = 0; i < subtestArray.length; i++) {
      var test = undefined;
      if (subtestArray[i] == 'deepSquat') {
        test = this.deepSquat;
      } else if (subtestArray[i] == 'hurdleStep') {
        test = this.hurdleStepTotal();
      } else if (subtestArray[i] == 'inlineLunge') {
        test = this.inlineLungeTotal();
      } else if (subtestArray[i] == 'shoulderMob') {
        test = this.shoulderMobTotal();
      } else if (subtestArray[i] == 'activeStraightLegRaise') {
        test = this.activeStraightLegRaiseTotal();
      } else if (subtestArray[i] == 'rotaryStability') {
        test = this.rotaryStabilityTotal();
      } else if (subtestArray[i] == 'trunkStabilityPushup') {
        test = this.trunkStabilityPushup;
      };

      console.log('test', test);
      subtestTotalScore += test;
      tests += subtestArray[i] + '  ';
    };

    if (subtestTotalScore < minSubtestScore) {
      pass = false;

    } else {
      pass = true;
    };

    console.log('tests', tests, 'subtestTotalScore:', subtestTotalScore, 'minSubtestScore', minSubtestScore);
    return pass;
  };

  this.passSubtestTwo = function () {
    console.log('SUBTEST TWO');
    var pass = true;
    var subtestArray = jobCriteria.minSubtestTwo.subtestArray;
    var subtestTotalScore = 0;
    var minSubtestScore = jobCriteria.minSubtestTwo.minScore;
    var tests = '';
    for (var i = 0; i < subtestArray.length; i++) {
      var test = 0;
      if (subtestArray[i] == 'deepSquat') {
        test = this.deepSquat;
      } else if (subtestArray[i] == 'hurdleStep') {
        test = this.hurdleStepTotal();
      } else if (subtestArray[i] == 'inlineLunge') {
        test = this.inlineLungeTotal();
      } else if (subtestArray[i] == 'shoulderMob') {
        test = this.shoulderMobTotal();
      } else if (subtestArray[i] == 'activeStraightLegRaise') {
        test = this.activeStraightLegRaiseTotal();
      } else if (subtestArray[i] == 'rotaryStability') {
        test = this.rotaryStabilityTotal();
      } else if (subtestArray[i] == 'trunkStabilityPushup') {
        test = this.trunkStabilityPushup;
      };

      tests += subtestArray[i] + '  ';
      subtestTotalScore += test;
      console.log('subtestTotalScore', subtestTotalScore);
    };

      console.log('tests', tests, 'subtestTotalScore:', subtestTotalScore, 'minSubtestScore', minSubtestScore);
    if (subtestTotalScore < minSubtestScore) {
      pass = false;

    } else {
      pass = true;
    };

    return pass;
  };

  this.passSubtestThree = function () {
    console.log('SUBTEST THREE');
    var pass = true;
    var tests = '';
    var subtestArray = jobCriteria.minSubtestThree.subtestArray;
    var subtestTotalScore = 0;
    var minSubtestScore = jobCriteria.minSubtestThree.minScore;
    for (var i = 0; i < subtestArray.length; i++) {
      var test = undefined;
      if (subtestArray[i] == 'deepSquat') {
        test = this.deepSquat;
      } else if (subtestArray[i] == 'hurdleStep') {
        test = this.hurdleStepTotal();
      } else if (subtestArray[i] == 'inlineLunge') {
        test = this.inlineLungeTotal();
      } else if (subtestArray[i] == 'shoulderMob') {
        test = this.shoulderMobTotal();
      } else if (subtestArray[i] == 'activeStraightLegRaise') {
        test = this.activeStraightLegRaiseTotal();
      } else if (subtestArray[i] == 'rotaryStability') {
        test = this.rotaryStabilityTotal();
      } else if (subtestArray[i] == 'trunkStabilityPushup') {
        test = this.trunkStabilityPushup;
      };

      subtestTotalScore += test;
      tests += subtestArray[i] + '  ';
    };

    if (subtestTotalScore < minSubtestScore) {
      pass = false;

    } else {
      pass = true;
    };
console.log('tests', tests, 'subtestTotalScore:', subtestTotalScore, 'minSubtestScore', minSubtestScore);
    return pass;
  };

  this.passOverall = function () {
    if (this.passDeepSquat() == false) {
      return false;
    } else if (this.passHurdleStep() == false) {
      return false;
    } else if (this.passInlineLunge() == false) {
      return false;
    } else if (this.passShoulderMob() == false) {
      return false;
    } else if (this.passActiveStraightLegRaise() == false) {
      return false;
    } else if (this.passRotaryStability() == false) {
      return false;
    } else if (this.passCompositeScore() == false) {
      return false;
    } else if (this.passTotalZerosAndOnes() == false) {
      return false;
    } else if (this.passTotalAsymmetries() == false) {
      return false;
    } else if (this.passTotalHighRiskAreas() == false) {
      return false;
    } else if (this.passSubtestOne() == false) {
      return false;
    } else if (this.passSubtestTwo() == false) {
      return false;
    } else if (this.passSubtestThree() == false) {
      return false;
    } else {
      return true;
    }
  };
};

module.exports = Applicant;
