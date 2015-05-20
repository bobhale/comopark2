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
    
.controller('AttrsCtrl', function($scope, Attractions) {
    console.log("Into the depths");
  $scope.attractions = Attractions.all();
  $scope.remove = function(attraction) {
    Attractions.remove(attraction);
  }
})

.controller('AttractionDetailCtrl', function($ionicPlatform,$scope, $sce, $stateParams, Attractions, $cordovaFile) {
  $scope.attraction = Attractions.get($stateParams.attrId);
  //$scope.chatTextHtml = $sce.trustAsHtml($scope.chat.lastText)
  $scope.attractionFile = $scope.attraction.contentFile;
  //var mainmenu = [];
    
  
  
 // $ionicPlatform.ready(function() {
      /*$scope.$apply(function() { */
         
   // fetchjson.fetch().then(function(data) {
   // mainmenu = data;
   // console.log(data);
//});
   
      
          $cordovaFile.readAsText(cordova.file.applicationDirectory, 'www/htmlcontent/' + $scope.attractionFile)
            .then(function (success) {
          $scope.contents2Text = success;
              $scope.attrTextHtml = $sce.trustAsHtml($scope.contents2Text)
          console.log(success);
           }, function (error) {
        // error
          console.log("Error occured: " + error.code);
         $scope.contents2Text = "Can't find text";
          });   
          
          
          
     
    
  
})  
    

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
          
});
