function JobCriteria(data) {
  this.jobName = data.jobName;
  this.minDeepSquat = data.minDeepSquat;
  this.minHurdleStep = data.minHurdleStep;
  this.minInlineLunge = data.minInlineLunge;
  this.minShoulderMob = data.minShoulderMob;
  this.minActiveStraightLegRaise = data.minActiveStraightLegRaise;
  this.minRotaryStability = data.minRotaryStability;
  this.minTrunkStabilityPushup = data.minTrunkStabilityPushup;
  this.minCompositeScore = data.minCompositeScore;
  this.maxTotalZerosAndOnes = data.maxTotalZerosAndOnes;
  this.maxTotalAsymmetries = data.maxTotalAsymmetries;
  this.maxTotalHighRiskAreas = data.maxTotalHighRiskAreas;
  this.minSubtestOne = data.minSubtestOne;
  this.minSubtestTwo = data.minSubtestTwo;
  this.minSubtestThree = data.minSubtestThree;
  this.minSubtestFour = data.minSubtestFour;
};

module.exports = JobCriteria;
