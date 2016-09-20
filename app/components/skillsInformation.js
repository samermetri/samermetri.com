samermetri.directive('skillsInformation', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'app/components/skillsInformation.html'
    };
});
