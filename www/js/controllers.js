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
 
.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('mapCtrl', function($scope, $ionicLoading, $compile) { 
      $scope.init = function() {
        var myLatlng = new google.maps.LatLng(44.981634,-93.152187);
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        
        };
          console.log("In Init");
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Clicca qui!</a></div>";
        var compiled = $compile(contentString)($scope);
        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });
          
          console.log('Adding Marker');
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
        $scope.map = map;
    };
    // google.maps.event.addDomListener(window, 'load', initialize);
    $scope.centerOnMe = function() {
        if(!$scope.map) {return;}

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
    };
    $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
    };
})

.controller('browCtrl', function($scope){
  $scope.Browse2Url = function() {
      console.log("Way down here.....");
    window.open('http://www.comodockside.com', '_blank', 'location=no');
  }
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
          
}); 
