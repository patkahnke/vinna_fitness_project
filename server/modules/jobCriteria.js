function JobCriteria(data) {
  this.title = data.title;
  this.email = data.email;
  this.minDeepSquat = data.minDeepSquat;
  this.minHurdleStep = data.minHurdleStep;
  this.minInlineLunge = data.minInlineLunge;
  this.minShoulderMob = data.minShoulderMob;
  this.minActiveStraightLegRaise = data.minActiveStraightLegRaise;
  this.minRotaryStability = data.minRotaryStability;
  this.minTrunkStabilityPushup = data.minTrunkStabilityPushup;
  this.compositeScore = data.compositeScore;
  this.coreSubtest = data.coreSubtest;
  this.shoulderSubtest = data.shoulderSubtest;
  this.lowerBodySubtest = data.lowerBodySubtest;
  this.otherSubtest = data.otherSubtest;
};

module.exports = JobCriteria;
