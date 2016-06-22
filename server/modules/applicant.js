function Applicant() {
  //this.id = ''; Ask Chavo
  //this.jobID = ''; Ask Chavo
  this.firstName = '';
  this.lastName = '';
  this.dateOfBirth = '';
  this.height = '';
  this.weight = '';
  this.gender = '';
  this.medicalHistory = '';
  this.handMeasurement = '';
  this.bonusMultiplier = 0;
  this.placeMultiplier = 0;
}

Player.prototype.logNewPlayer = function (socket, player, data) {
    player.nickname = data.nickname;
    return player;
  };

module.exports = Player;
