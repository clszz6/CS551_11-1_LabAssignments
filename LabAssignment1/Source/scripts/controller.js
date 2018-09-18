var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/login', {
    templateUrl : 'pages/login.html',
    controller  : 'LoginController'
  })
  
  .when('/home', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })

  .when('/contact', {
    templateUrl : 'pages/contact.html',
    controller  : 'ContactController'
  })

  .otherwise({redirectTo: '/'});
});

    app.controller('HomeController', function($scope) {
        $scope.message = "Google Knowledge Graph - People Search";

  });

  app.controller('ContactController', function($scope) {
    $scope.member1 = 'Member 1: Merwan Abdelmajeed - maagd4@mail.umkc.edu';
    $scope.member2 = 'Member 47: Christian Skinner - clszz6@mail.umkc.edu';

  });
  
  app.controller('AboutController', function($scope) {
    $scope.message = 'This project is a simple search engine with the exact result needed without the hassle of irrelevant results';
  });

app.controller('SearchController', function($scope) {
    $scope.googleSearch = function(){

        var service_url = "https://kgsearch.googleapis.com/v1/entities:search?query="+$scope.searchText+"&key=AIzaSyAMnpKEwGKIdzxMQNAaiYiTnrO6j0rmOtQ&limit=1&indent=True";
        $.getJSON(service_url,null, function(response) {
            $.each(response.itemListElement, function(i, element) {
               $('.table').append('<tr><td>'
                   + element['result']['name']
                   +'</td><td>'+element['result']['description']
                   +'</td><td><input type="button" class="btn btn-primary" value="show Image"/></td></tr>');
            });
        });
    }
});



  app.controller('LoginController', function($scope, $http) {
   $scope.innerHtml = {
        html: "<div class='container vertical-center'>" +
        "<div class='row'>" +
        "<div class='col-md-3'></div>" +
        "<div class='col-md-6'>" +
        "<div class='login-box well login-style'>" +
        "<div class='jumbotron light-gray'>" +
        "<h1 class='text-center'>Login</h1>" +
        "</div><div class='g-signin2 center-google' data-width='300' data-onsuccess='onSignIn'></div>" +
        "<br><br></div></div></div></div>"
    };
  });