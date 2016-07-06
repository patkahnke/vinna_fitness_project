myApp.controller('AdminTrainersController', ['$scope', '$http', 'AdminDataFactory', 'UserFactory', '$location', function($scope, $http, AdminDataFactory, UserFactory, $location)
{
  //injections
  $scope.dataFactory = AdminDataFactory;
  userFactory = UserFactory;
  //scope variables
  $scope.trainers = [];
  $scope.newTrainer = {};

  //authenticated?
  if (userFactory.checkLoggedIn() === true) {
    if (userFactory.checkAdmin() === false) {
      $location.path('/trainer');
    }
  } else {
    $location.path('/');
  };

  userFactory.logout()

  getTrainers();

  //get existing companies
  function getTrainers() {
    $http.get('/trainers')
      .then(function (response) {
        console.log('GET /trainers ', response.data);
        $scope.trainers = response.data;
      });
  }

  //add new company
  $scope.addTrainer = function () {
    var data = $scope.newTrainer;
    $http.post('/trainers', data)
      .then(function (response) {
        console.log('POST /trainers', response);
        alert("Trainer added!");
        if (response.status == 201) {
           $scope.toggleAddTrainerModal();
           getTrainers();
           $scope.newTrainer = {};
        } else {
          alert('Your trainer was not received!');
        }
      });
    };

  // update existing company
  $scope.updateTrainer = function (trainer) {
    var id = trainer.id;
    console.log(trainer);
    $http.put('/trainers/edit/' + id, trainer)
      .then(function (response) {
        console.log('PUT /trainers ', response);
        if (response.status == 204) {
           alert('Trainer Updated!');
           $scope.toggleEditTrainerModal();
           getTrainers();
           return;
        } else {
          alert('Your trainer was not received!');
        }
      });
  };

  // 'delete' == deactivate(gives company inactive status) existing company
  $scope.deleteTrainer = function(trainer) {
    console.log('deactivate', trainer);
    var id = trainer.id;
    var deactivateTrainer = confirm('Are you sure you want to remove ' + trainer.name + '?');
    if (deactivateTrainer === true){
      $http.delete('/trainers/' + id)
        .then(function (response) {
          console.log('PUT /trainers/', response);
          alert('Trainer Removed!');
          $scope.toggleEditTrainerModal();
          getTrainers();
          return;
        });
      } else {
        alert('You can find removed trainers in the inactive trainer screen.');
        $scope.toggleEditTrainerModal();
        return;
      }
  };

  //modals
  $scope.addTrainerModal = {
    modalShown : false
  };

  $scope.toggleAddTrainerModal = function() {
    $scope.addTrainerModal.modalShown = !$scope.addTrainerModal.modalShown;
  };

  $scope.editTrainerModal = {
    modalShown : false
  };

  $scope.toggleEditTrainerModal = function(selected) {
    $scope.editTrainerModal.modalShown = !$scope.editTrainerModal.modalShown;
    $scope.trainer = selected;

  };

  }]);
