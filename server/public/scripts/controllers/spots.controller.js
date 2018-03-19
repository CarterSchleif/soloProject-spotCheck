myApp.controller('SpotsController', ['UserService', function(UserService) {
    console.log('SpotsController created');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
  }]);