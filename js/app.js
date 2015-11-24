

var person_url = '../json/person-info.json';
var project_url = '../json/project-info.json';

// Create app
var myApp = angular.module('myApp', ['ui.router']);

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
	$http.get('../json/person-info.json').success(function(info) {
		$scope.person = info[0];
		console.log($scope.person);
	})

	// $http.get(project_url).success(function (project) {
	// 	$scope.project = project.data;
	// })

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

// Landing page controller: define $scope.number as a number
.controller('HomeController', function ($scope) {
	$scope.number = 5
})

// About page controller: define $scope.about as a string
.controller('AboutController', function ($scope) {
	$scope.about = 'about something'

})

.controller('ResumeController', function ($scope) {
	$scope.hmm = 5
})

// Content controller: define $scope.url as an image
.controller('ProjectsController', function ($scope) {
	$scope.url = 'http://s7.leapfrog.com/is/image/LeapFrog/disney-pixar-finding-nemo-book_21335_1?$prod-lg$&$label=Book'

})



// angular.module('ui.bootstrap.demo').controller('CarouselCtrl', function ($scope) {
//   $scope.myInterval = 5000;
//   $scope.noWrapSlides = false;
//   var slides = $scope.slides = [];
//   $scope.addSlide = function() {
//     var newWidth = 600 + slides.length + 1;
//     slides.push({
//       image: '//placekitten.com/' + newWidth + '/300',
//       text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
//         ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
//     });
//   };
//   for (var i=0; i<4; i++) {
//     $scope.addSlide();
//   }
// });
