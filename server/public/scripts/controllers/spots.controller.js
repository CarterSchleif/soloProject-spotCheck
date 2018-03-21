myApp.controller('SpotsController', ['UserService', function(UserService) {
    console.log('SpotsController created');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
    self.allSpots = UserService.allSpots;
    self.mySpots = UserService.mySpots;
    self.getAllSpots = UserService.getAllSpots;
    self.deleteSpot = UserService.deleteSpot;
    self.getAllSpots();
  }]);