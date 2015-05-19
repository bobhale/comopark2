angular.module('starter.controllers', [ ])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($ionicPlatform,$scope, $sce, $stateParams, Chats, $cordovaFile) {
  $scope.chat = Chats.get($stateParams.chatId);
  //$scope.chatTextHtml = $sce.trustAsHtml($scope.chat.lastText)
  $scope.contentFile = $scope.chat.contentFile;
  //var mainmenu = [];
    
  
  
 // $ionicPlatform.ready(function() {
      /*$scope.$apply(function() { */
         
   // fetchjson.fetch().then(function(data) {
   // mainmenu = data;
   // console.log(data);
//});
   
      
          $cordovaFile.readAsText(cordova.file.applicationDirectory, 'www/htmlcontent/' + $scope.contentFile)
            .then(function (success) {
          $scope.contentsText = success;
              $scope.chatTextHtml = $sce.trustAsHtml($scope.contentsText)
          console.log(success);
           }, function (error) {
        // error
          console.log("Error occured: " + error.code);
         $scope.contentsText = "Can't find text";
          });   
          
          
          
     
    
  
})  
    


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
          
});
