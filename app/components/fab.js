samermetri.directive('fab', function() {
    return {
        restrict: 'E',
        scope: {
           icon: "=",
           href: "="
        },
        templateUrl: 'app/components/fab.html'
    };
});
