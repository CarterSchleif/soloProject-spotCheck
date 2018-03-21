myApp.controller('UserController', ['UserService', function(UserService) {
  console.log('UserController created');
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;
  self.allSpots = UserService.allSpots;
  self.mySpots = UserService.mySpots;
  self.getAllSpots = UserService.getAllSpots;
  self.deleteSpot = UserService.deleteSpot;
  self.getAllSpots();
}]);
