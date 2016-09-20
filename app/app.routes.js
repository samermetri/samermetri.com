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

        .when('/tools', {
            templateUrl : 'app/components/tools.html'
        })

        .otherwise({
            templateUrl : 'app/components/errors/error404.html'
        });
});
