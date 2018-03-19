myApp.controller('TopsController', ['UserService', function(UserService) {
    console.log('TopsController created');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
  }]);