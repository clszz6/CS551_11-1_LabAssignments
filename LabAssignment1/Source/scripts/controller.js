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
    $scope.message = 'Home';
  });

  app.controller('ContactController', function($scope) {
    $scope.message = 'Contact';
  });
  
  app.controller('AboutController', function($scope) {
    $scope.message = 'About';
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