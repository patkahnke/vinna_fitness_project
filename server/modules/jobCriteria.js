//Job Criteria prototype creates a new set of criteria for each job entered on the jobs page.
//This job criteria is used in conjunction with the Applicant prototype to weigh the
//applicant scores against the stated criteria for the specific job being applied for.
function JobCriteria(data) {
  this.minDeepSquat = data.min_deep_squat;
  this.minHurdleStep = data.min_hurdle_step;
  this.minInlineLunge = data.min_inline_lunge;
  this.minShoulderMob = data.min_shoulder_mob;
  this.minActiveStraightLegRaise = data.min_straight_leg;
  this.minRotaryStability = data.min_rotary_stab;
  this.minTrunkStabilityPushup = data.min_trunk_push_up;
  this.minCoreSubtest = data.core_subtest;
  this.minShoulderSubtest = data.shoulder_subtest;
  this.minLowerBodySubtest = data.low_body_subtest;
  this.minOtherSubtest = data.other_subtest;
  this.minCompositeScore = data.min_composite;
};

module.exports = JobCriteria;
