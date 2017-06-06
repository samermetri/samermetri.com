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

    $scope.headers_right = [
        {
            name: "LinkedIn",
            icon: "linkedin-box",
            link: "https://www.linkedin.com/in/smetri",
            target: "_blank"
        }
    ];

    navbarScope = $scope

});
