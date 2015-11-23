// Create app
var myApp = angular.module('myApp', ['ui.router']);

// Configure app
myApp.config(function($stateProvider) {
	$stateProvider.state('home', {
		url: "/",
		templateUrl: 'templates/home.html',
		controller: 'HomeController'

	})

	$stateProvider.state('about', {
		url: '/about',
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	})

	$stateProvider.state('content', {
		url: '/content',
		templateUrl: 'templates/content.html',
		controller: 'ContentController'
	})

})

// Landing page controller: define $scope.number as a number
.controller('HomeController', function ($scope) {
	$scope.number = 5
})

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope) {
	$scope.about = 'about something'

})

// Content controller: define $scope.url as an image
.controller('ContentController', function($scope) {
	$scope.url = 'http://s7.leapfrog.com/is/image/LeapFrog/disney-pixar-finding-nemo-book_21335_1?$prod-lg$&$label=Book'

})

