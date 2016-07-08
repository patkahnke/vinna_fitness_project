myApp.controller('AdminTrainersController', ['$scope', '$http', 'AdminDataFactory', 'UserFactory', '$location', '$window', function($scope, $http, AdminDataFactory, UserFactory, $location, $window)
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
      $window.location.href='#/trainer';
    }
  } else {
    $window.location.href='#/';
  }

  userFactory.logout();

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
    if ($scope.newTrainer.name !== undefined && $scope.newTrainer.email !== undefined) {
    var data = $scope.newTrainer;
    $http.post('/trainers', data)
      .then(function (response) {
        console.log('POST /trainers', response);
        if (response.status == 201) {
           $scope.toggleAddTrainerModal();
           getTrainers();
           $scope.newTrainer = {};
        } else {
          alert('Trainer was not received. Please try again.');
        }
      });
    }
    };

  // update existing company
  $scope.updateTrainer = function (trainer) {
    var id = trainer.id;
    console.log(trainer);
    $http.put('/trainers/edit/' + id, trainer)
      .then(function (response) {
        console.log('PUT /trainers ', response);
        if (response.status == 204) {
           alert('Trainer updated!');
           $scope.toggleEditTrainerModal();
           getTrainers();
           return;
        } else {
          alert('Trainer update was not received. Please try again.');
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
          $scope.toggleEditTrainerModal();
          getTrainers();
          return;
        });
      } else {
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
