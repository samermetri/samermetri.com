samermetri.controller("personalInformation", function($scope) {

    $scope.name = "Samer Metri";
    $scope.email = "smetri@uci.edu";
    $scope.phonenumber = "(858) 776-5542";
    $scope.profilePictureURL = "content/files/profilepic.jpg";
    $scope.personalDescription =  [
        "Senior Consultant at UC Irvine Office of Information Technology",
        "Sue and Bill Gross Stem Cell Research Center   •   University of California, Irvine"
    ];
    $scope.icons =  [
        {
            mdiname: "email",
            link: "mailto:smetri@uci.edu"
        },
        {
            mdiname: "linkedin-box",
            link: "https://www.linkedin.com/in/smetri/",
            target: "_blank"
        }
    ];

});
