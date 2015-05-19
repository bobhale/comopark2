angular.module('starter.services', ['ngResource'])

.factory('Chats', function(MainMenu) {
    
    var menuItems = MainMenu.query();
    //console.log(testes);
    var chats = menuItems;
    
  // Might use a resource here that returns a JSON array

  // Some fake testing data
    
   // var test = $resource('main-menu.json');
    //console.log('We are in');
   // console.log(test.menu-main.items);
    //var chats = test.menu-main.items;
    /*
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    contentFile: 'bikes.html',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    contentFile: 'bikes.html',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    contentFile: 'bikes.html',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should <h3>buy<\/h3> a boat',
      contentFile: 'bikes.html',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    contentFile: 'bikes.html',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];v*/

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
}
)

.factory('MainMenu', function($resource) {
  
    return $resource('main-menu.json');
    
});
         /*
 .factory('fetchJson', function($q, $timeout, $http) {
    var MenuBuild = {
        fetch: function() {

            var deferred = $q.defer();

            $timeout(function() {
                $http.get('main-menu.json').success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
        }
    }

    return MenuBuild;
}  */
 

