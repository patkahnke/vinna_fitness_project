//Applicant prototype: new applicant is created on submit of applicant data
function Applicant(data, jobCriteria) {

  //jobCriteria is specific to each job, and applicant results are measured against the criteria
  this.jobCriteria = jobCriteria;
  this.jobTitle = data.selectedJob.title;
  this.jobLocation = data.selectedCompany.location;
  this.companyEmail = data.selectedCompany.email;
  this.jobEmail = data.selectedJob.job_email;
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
  this.pronePressup = data.pronePressup;
  this.lumbarFlexion = data.lumbarFLexion;

  //applicant prototype functions. "Total" scores are usually the lowest of left/right,
  //or else a composite of several exercise totals
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
    }

    if (this.hurdleStepTotal() < 2) {
      totalZerosAndOnes++;
    }

    if (this.inlineLungeTotal() < 2) {
      totalZerosAndOnes++;
    }

    if (this.shoulderMobTotal() < 2) {
      totalZerosAndOnes++;
    }

    if (this.activeStraightLegRaiseTotal() < 2) {
      totalZerosAndOnes++;
    }

    if (this.rotaryStabilityTotal() < 2) {
      totalZerosAndOnes++;
    }

    if (this.trunkStabilityPushup < 2) {
      totalZerosAndOnes++;
    }

    return totalZerosAndOnes;
  };

  this.totalAsymmetries = function () {
    var totalAsymmetries = 0;
    if (this.hurdleStepLeft != this.hurdleStepRight) {
      totalAsymmetries++;
    }

    if (this.inlineLungeLeft != this.inlineLungeRight) {
      totalAsymmetries++;
    }

    if (this.shoulderMobLeft != this.shoulderMobRight) {
      totalAsymmetries++;
    }

    if (this.activeStraightLegRaiseLeft != this.activeStraightLegRaiseRight) {
      totalAsymmetries++;
    }

    if (this.rotaryStabilityLeft != this.rotaryStabilityRight) {
      totalAsymmetries++;
    }

    return totalAsymmetries;
  };

  //Total high risk areas takes in total zeros and ones and total asymmetries to indicate the
  //number of high risk areas. This number is called out in the final email report
  // for informational purposes only.
  this.totalHighRiskAreas = function () {
    var totalHighRisk = this.totalZerosAndOnes() + this.totalAsymmetries();
    return totalHighRisk;
  };

  //All of the "pass" functions are measuring applicant scores against job criteria.
  this.passDeepSquat = function () {
    var message = '';
    if (this.deepSquat >= jobCriteria.minDeepSquat) {
      message = 'PASS';
    } else {
      message = 'FAIL';
    }

    return message;
  };

  this.passHurdleStep = function () {
    var message = '';
    if (this.hurdleStepTotal() >= jobCriteria.minHurdleStep) {
      message = 'PASS';
    } else {
      message = 'FAIL';
    }

    return message;
  };

  this.passInlineLunge = function () {
    var message = '';
    if (this.inlineLungeTotal() >= jobCriteria.minInlineLunge) {
      message = 'PASS';
    } else {
      message = 'FAIL';
    }

    return message;
  };

  this.passShoulderMob = function () {
    var message = '';
    if (this.shoulderMobTotal() >= jobCriteria.minShoulderMob) {
      message = 'PASS';
    } else {
      message = 'FAIL';
    }

    return message;
  };

  this.passActiveStraightLegRaise = function () {
    var message = '';
    if (this.activeStraightLegRaiseTotal() >= jobCriteria.minActiveStraightLegRaise) {
      message = 'PASS';
    } else {
      message = 'FAIL';
    }

    return message;
  };

  this.passRotaryStability = function () {
    var message = '';
    if (this.rotaryStabilityTotal() >= jobCriteria.minRotaryStability) {
      message = 'PASS';
    } else {
      message = 'FAIL';
    }

    return message;
  };

  this.passTrunkStability = function () {
    var message = '';
    if (this.trunkStabilityPushup >= jobCriteria.minTrunkStabilityPushup) {
      message = 'PASS';
    } else {
      message = 'FAIL';
    }

    return message;
  };

  this.passCompositeScore = function () {
    var message = '';
    if (this.compositeScore() >= jobCriteria.minCompositeScore) {
      message = 'PASS';
    } else {
      message = 'FAIL';
    }

    return message;
  };

  this.riskCategory = function () {
    var riskCategoryVar = '';
    if (this.compositeScore() <= 9) {
      riskCategoryVar = 'EXTREME';
    } else if (this.compositeScore() <= 13) {
      riskCategoryVar = 'ELEVATED';
    } else {
      riskCategoryVar = 'NORMAL';
    }

    return riskCategoryVar;
  };

  this.riskMessage = function () {
    var message = '';
    if (this.riskCategory == 'EXTREME') {
      message = 'This test subject is in the Extreme Risk Category (Composite ' +
      'Score of ≤ 9) and is >12X more likely to suffer major injury than an individual ' +
      'in the normal range (>13 Composite Score).\nThis individual demonstrates pathological ' +
      'movement patterns making them far more likely than others to suffer serious injury.' +
      '\nExtreme scores can rarely be improved without extensive, prolonged intervention and ' +
      'may be considered likely to be permanent within the employment context.';
      return message;
    } else if (this.riskCategory == 'ELEVATED') {
      message = 'This test subject is in the Elevated Risk Category (Composite score of 10-13) ' +
      'and is 4X more likely to suffer major injury than an individual in the normal range (>13).' +
      '\nThese reduced scores are often the result of the accumulation of years or decades worth ' +
      'of small- and micro-injuries leading your body to adopt progressively pathological ' +
      'movement patterns.\nCES offers brief, targeted, individualized or group corrective ' +
      'interventions that can improve scores in as little as one hour-long session. ' +
      'Contact CES at 612-341-0097 to arrange correctives.';
      return message;
    } else {
      message = 'This test subject is in the Normal Risk Category (Composite score of 14 or ' +
      'above) and is not at increased risk of musculoskeletal injury due to movement ' +
      'deficiencies, though any High Risk Areas (see below) still need to be addressed.' +
      '\nThough Normal scores are not indicative of increased injury risk, movement patterns ' +
      'can always be refined and corrected, and CES has experience with up to Pro-Level athletes.' +
      '\nCES offers brief, targeted, individualized or group corrective interventions that can ' +
      'improve scores in as little as one hour-long session. Contact CES at 612-341-0097 to ' +
      'arrange correctives.';
      return message;
    }
  };

  this.passCoreSubtest = function () {
    var message = 'PASS';
    var subtestTotalScore = 0;
    var minSubtestScore = jobCriteria.minCoreSubtest;
    subtestTotalScore = this.activeStraightLegRaiseTotal() + this.trunkStabilityPushup
    + this.rotaryStabilityTotal();

    if (subtestTotalScore < minSubtestScore) {
      message = 'FAIL';

    } else {
      message = 'PASS';
    }

    return message;
  };

  this.passShoulderSubtest = function () {
    var message = 'PASS';
    var subtestTotalScore = 0;
    var minSubtestScore = jobCriteria.minShoulderSubtest;
    subtestTotalScore = this.shoulderMobTotal();

    if (subtestTotalScore < minSubtestScore) {
      message = 'FAIL';

    } else {
      message = 'PASS';
    }

    return message;
  };

  this.passLowerBodySubtest = function () {
    var message = 'PASS';
    var subtestTotalScore = 0;
    var minSubtestScore = jobCriteria.minLowerBodySubtest;
    subtestTotalScore = this.deepSquat;

    if (subtestTotalScore < minSubtestScore) {
      message = 'FAIL';

    } else {
      message = 'PASS';
    }

    return message;
  };

  //   SAVING THIS FOR FUTURE EXPANSION - ALLOWS ADMIN TO CEATE A SPECIFIC SUBTEST
  //    this.passOtherSubtest = function () {
  //     var message = 'PASS';
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
  //       message = 'FAIL';
  //
  //     } else {
  //       message = 'PASS';
  //     };
  //     return message;
  //   };

  //In order to pass overall, an applicant must pass every test. One failure equals an
  //overall score of "FAIL"
  this.passOverall = function () {
    var message = '';
    if (this.passDeepSquat() == 'FAIL') {
      message = 'FAIL';
      return message;
    } else if (this.passHurdleStep() == 'FAIL') {
      message = 'FAIL';
      return message;
    } else if (this.passInlineLunge() == 'FAIL') {
      message = 'FAIL';
      return message;
    } else if (this.passShoulderMob() == 'FAIL') {
      message = 'FAIL';
      return message;
    } else if (this.passActiveStraightLegRaise() == 'FAIL') {
      message = 'FAIL';
      return message;
    } else if (this.passRotaryStability() == 'FAIL') {
      message = 'FAIL';
      return message;
    } else if (this.passCompositeScore() == 'FAIL') {
      message = 'FAIL';
      return message;
    } else if (this.passCoreSubtest() == 'FAIL') {
      message = 'FAIL';
      return message;
    } else if (this.passShoulderSubtest() == 'FAIL') {
      message = 'FAIL';
      return message;
    } else if (this.passLowerBodySubtest() == 'FAIL') {
      message = 'FAIL';

      // } else if (this.passOtherSubtest() == false) {
      //   return false;
    } else {
      message = 'PASS';
    }

    return message;
  };
}

module.exports = Applicant;
