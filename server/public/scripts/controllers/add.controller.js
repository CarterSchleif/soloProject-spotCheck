myApp.controller('AddController', ['UserService', function(UserService) {
    console.log('AddController created');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
  }]);