samermetri.controller("personalInformation", function($scope) {

    $scope.name = "Samer Metri";
    $scope.email = "samermetri@gmail.com";
    $scope.phonenumber = "(858) 776-5542";
    $scope.profilePictureURL = "content/files/profilepic.jpg";
    $scope.personalDescription =  [
        "Curious Researcher",
        "Passionate Learner"
    ];
    $scope.icons =  [
        {
            mdiname: "email",
            link: "mailto:samermetri@gmail.com"
        },
        {
            mdiname: "linkedin-box",
            link: "https://www.linkedin.com/in/samer-metri-a85642118",
            target: "_blank"
        }
    ];
    
});
