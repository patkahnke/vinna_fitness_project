function Applicant(data, jobCriteria) {
  this.jobCriteria = jobCriteria;
  this.firstName = data.applicant.firstName;
  this.lastName = data.applicant.lastName;
  this.age = data.applicant.age;
  this.height = data.applicant.height;
  this.weight = data.applicant.weight;
  this.gender = data.applicant.gender;
  this.medicalHistory = data.applicant.medicalHistory;
  this.deepSquat = data.squat;
  this.hurdleStepLeft = data.hurdle.left;
  this.hurdleStepRight = data.hurdle.right;
  this.inlineLungeLeft = data.lunge.left;
  this.inlineLungeRight = data.lunge.right;
  this.shoulderMobLeft = data.shoulder.left;
  this.shoulderMobRight = data.shoulder.right;
  this.activeStraightLegRaiseLeft = data.leg_raise.left;
  this.activeStraightLegRaiseRight = data.leg_raise.right;
  this.trunkStabilityPushup = data.push_up;
  this.rotaryStabilityLeft = data.rotary.left;
  this.rotaryStabilityRight = data.rotary.right;
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

  this.riskCategory = function () {
    var riskCategoryVar = '';
    if (this.compositeScore() <= 9) {
      riskCategoryVar = 'extreme';
    } else if (this.compositeScore() <= 13) {
      riskCategoryVar = 'elevated';
    } else {
      riskCategoryVar = 'normal';
    };

    return riskCategoryVar;
  };

  this.passCoreSubtest = function () {
    console.log('core subtest');
    var pass = true;
    var subtestTotalScore = 0;
    var minSubtestScore = jobCriteria.minCoreSubtest;
    subtestTotalScore = this.activeStraightLegRaiseTotal + this.trunkStabilityPushup + this.rotaryStabilityTotal;

    if (subtestTotalScore < minSubtestScore) {
      pass = false;

    } else {
      pass = true;
    };

    console.log('subtestTotalScore:', subtestTotalScore, 'minSubtestScore', minSubtestScore);
    return pass;
  };

  this.passShoulderSubtest = function () {
    console.log('shoulder subtest');
    var pass = true;
    var subtestTotalScore = 0;
    var minSubtestScore = jobCriteria.minShoulderSubtest;
    subtestTotalScore = this.shoulderMobTotal;

    if (subtestTotalScore < minSubtestScore) {
      pass = false;

    } else {
      pass = true;
    };

    console.log('subtestTotalScore:', subtestTotalScore, 'minSubtestScore', minSubtestScore);
    return pass;
  };

  this.passLowerBodySubtest = function () {
    console.log('lower body subtest');
    var pass = true;
    var subtestTotalScore = 0;
    var minSubtestScore = jobCriteria.minLowerBodySubtest;
    subtestTotalScore = this.deepSquat;

    if (subtestTotalScore < minSubtestScore) {
      pass = false;

    } else {
      pass = true;
    };

    console.log('subtestTotalScore:', subtestTotalScore, 'minSubtestScore', minSubtestScore);
    return pass;
  };

  //   this.passOtherSubtest = function () {
  //     console.log('other subtest');
  //     var pass = true;
  //     var tests = '';
  //     var exerciseArray = jobCriteria.minOtherSubtest.exerciseArray;
  //     var subtestTotalScore = 0;
  //     var minSubtestScore = jobCriteria.minOtherSubtest.minScore;
  //     for (var i = 0; i < exerciseArray.length; i++) {
  //       var test = undefined;
  //       if (exerciseArray[i] == 'deepSquat') {
  //         test = this.deepSquat;
  //       } else if (exerciseArray[i] == 'hurdleStep') {
  //         test = this.hurdleStepTotal();
  //       } else if (exerciseArray[i] == 'inlineLunge') {
  //         test = this.inlineLungeTotal();
  //       } else if (exerciseArray[i] == 'shoulderMob') {
  //         test = this.shoulderMobTotal();
  //       } else if (exerciseArray[i] == 'activeStraightLegRaise') {
  //         test = this.activeStraightLegRaiseTotal();
  //       } else if (exerciseArray[i] == 'rotaryStability') {
  //         test = this.rotaryStabilityTotal();
  //       } else if (exerciseArray[i] == 'trunkStabilityPushup') {
  //         test = this.trunkStabilityPushup;
  //       };
  //
  //       subtestTotalScore += test;
  //       tests += exerciseArray[i] + '  ';
  //     };
  //
  //     if (subtestTotalScore < minSubtestScore) {
  //       pass = false;
  //
  //     } else {
  //       pass = true;
  //     };
  // console.log('tests', tests, 'subtestTotalScore:', subtestTotalScore, 'minSubtestScore', minSubtestScore);
  //     return pass;
  //   };

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
    } else if (this.passCoreSubtest() == false) {
      return false;
    } else if (this.passShoulderSubtest() == false) {
      return false;
    } else if (this.passLowerBodySubtest() == false) {
      return false;
    // } else if (this.passOtherSubtest() == false) {
    //   return false;
    } else {
      return true;
    }
  };
};

module.exports = Applicant;
