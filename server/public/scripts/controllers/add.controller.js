myApp.controller('AddController', ['UserService', function(UserService) {
    console.log('AddController created');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
    self.newSpot = UserService.newSpot;
    self.allSpots = UserService.allSpots;
    self.addSpot = UserService.addSpot;
    self.getAllSpots = UserService.getAllSpots;
    self.upload = UserService.upload;
    self.popUp = UserService.popUp;
    
    
    





  }]);