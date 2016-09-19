samermetri.controller("resume", function($scope, $http) {
    $scope.resume = $http.get("content/files/resume.json")
        .success(function (data) {
            $scope.name = data.name;
            $scope.education = data.education;
            $scope.experience = data.experience;
            // $scope.projects = data.projects;
            $scope.skills = data.skills;
            $scope.awards = data.awards;
        })
});
