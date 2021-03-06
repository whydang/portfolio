

var person_url = '../json/person-info.json';
var about_url = '../json/about.json';
var project_url = '../json/project-info.json';

// Create app
var myApp = angular.module('myApp', ['ui.router']);

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
	$http.get(person_url).success(function(info) {
		$scope.person = info[0];
	})

})



// Configure app
myApp.config(function ($stateProvider) {
	$stateProvider.state('home', {
		url: "",
		templateUrl: 'templates/home.html',
		controller: 'HomeController'

	})

	$stateProvider.state('about', {
		url: 'about',
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	})

	$stateProvider.state('resume', {
		url: 'resume',
		templateUrl: 'templates/resume.html',
		controller: 'ResumeController'
	})

	$stateProvider.state('projects', {
		url: 'projects',
		templateUrl: 'templates/projects.html',
		controller: 'ProjectsController'
	})

})


// Content controller: define $scope.url as an image
.controller('ProjectsController', function($scope, $http) {
	$http.get(project_url).success(function(project) {
		$scope.project = project;
	})
})

// Landing page controller: define $scope.number as a number
.controller('HomeController', function ($scope) {

})

// About page controller: define $scope.about as a string
.controller('AboutController', function ($scope, $http) {
	$http.get(about_url).success(function(about) {
		$scope.aboutme = about;
	})
})

.controller('ResumeController', function ($scope) {

})

