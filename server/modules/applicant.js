var Criteria = require('./criteria');
var criteria = new Criteria();

function Applicant(data) {
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
};

module.exports = Applicant;
