var navbarScope;
samermetri.controller("navbar", function($scope) {
    $scope.headers = [
        {
            name: "Home",
            link: "home"
        },
        {
            name: "Resume",
            link: "resume"
        }
    ];

    navbarScope = $scope
    
});
