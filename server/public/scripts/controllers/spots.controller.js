myApp.controller('SpotsController', ['UserService', function(UserService) {
    console.log('SpotsController created');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
    self.allSpots = UserService.allSpots;
    self.mySpots = UserService.mySpots;
    self.getAllSpots = UserService.getAllSpots;
    self.deleteSpot = UserService.deleteSpot;
    self.editedSpot = UserService.editedSpot;
    self.submitEditSpot = UserService.submitEditSpot;

    //Show and Hide edit forms
    self.showEditForm = (spot) => {
      spot.beingEdited = true;
  }

  self.cancelEdit = (spot) => {
      spot.beingEdited = false;
  }

    //On page load get all spots
    self.getAllSpots();


  }]);