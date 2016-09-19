samermetri.config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            redirectTo: '/home'
        })

        .when('/home', {
            templateUrl : 'app/components/home.html'
        })

        .when('/resume', {
            templateUrl : 'app/components/resume.html',
            controller : 'resume'
        })

        .otherwise({
            templateUrl : 'app/components/error404/error404.html'
        });
});
