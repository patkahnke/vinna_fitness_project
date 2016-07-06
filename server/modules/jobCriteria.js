function JobCriteria(data) {
  this.title = data.title;
  this.email = data.email;
  this.location = data.location;
  this.minDeepSquat = data.minDeepSquat;
  this.minHurdleStep = data.minHurdleStep;
  this.minInlineLunge = data.minInlineLunge;
  this.minShoulderMob = data.minShoulderMob;
  this.minActiveStraightLegRaise = data.minActiveStraightLegRaise;
  this.minRotaryStability = data.minRotaryStability;
  this.minTrunkStabilityPushup = data.minTrunkStabilityPushup;
  this.minCompositeScore = data.minCompositeScore;
  this.minCoreSubtest = data.minCoreSubtest;
  this.minShoulderSubtest = data.minShoulderSubtest;
  this.minLowerBodySubtest = data.minLowerBodySubtest;
  this.minOtherSubtest = data.minOtherSubtest;
};

module.exports = JobCriteria;
