samermetri.directive('employmentInformation', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'app/components/employmentInformation.html'
    };
});
