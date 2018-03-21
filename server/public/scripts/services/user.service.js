myApp.service('UserService', ['$http', '$location', function ($http, $location) {
  console.log('UserService Loaded');
  
  var self = this;

  self.allSpots = { list: [] };
  self.mySpots = { list: [] };
  self.userObject = {};
  self.newSpot = {};

  self.getuser = function () {
    $http.get('/user').then(function (response) {
      if (response.data.username) {
        // user has a curret session on the server
        self.userObject.userName = response.data.username;
        self.newSpot.postedBy = self.userObject.userName;
        console.log('THIS IS THE NAMMEEE:', self.newSpot.postedBy);
        console.log('User Data: ', self.userObject.userName);
      } else {
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    });
  }

  self.logout = function () {
    $http.get('/user/logout').then(function (response) {
      console.log('logged out');
      $location.path("/home");
    });
  }



  self.addSpot = function() {

    console.log('on click self.addSpot', self.newSpot);
    
    $http({
        method: 'POST',
        url: '/spots',
        data: self.newSpot
    }).then( (response) => {
        console.log('Added newSpot', response);
        self.getAllSpots();
    }).catch( (error) => {
        console.log('error in self.addSpot', error);
    }); // END $http
} // END self.addItem


self.getAllSpots = () => {
  $http({
      method: 'GET',
      url: '/spots'
  }).then( (response) => {
      self.allSpots.list = response.data; 
      console.log('these are all the spots:', self.allSpots.list);
  }).catch( (error) => {
      console.log('error in self.getAllSpots:', error);
  }); // END $http
} // END self.getAllSpots


self.deleteSpot = function(id){
  console.log('THIS IS THE ID:', id);

  $http({
    method: 'DELETE',
    url: `/spots/${id}`
  })
  .then((response) => {
    console.log('spot deleted');
    self.getAllSpots();
  }) // end done
  .catch((error) => {
    console.log('error', error);
  }) // end fail
  } // end deleteSpot

}]);
