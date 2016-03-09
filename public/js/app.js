(function() {
    angular.module('onCollab', ['ngRoute', 'ui.calendar', 'ui.bootstrap'])

        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
            $routeProvider
                .when('/', {
                    templateUrl: 'partials/home.html'/*,
                    controller: 'HomeController',
                    controllerAs: 'HomeCtrl'*/
                })
                .when('/kalender', {
                    templateUrl: 'partials/kalender.html',
                    controller: 'KalenderController'/*,
                    controllerAs: 'KalenderCtrl'*/
                })
                .when('/links', {
                    templateUrl: 'partials/links.html',
                    controller: 'LinkController'/*,
                    controllerAs: 'LinkCtrl'*/
                })
                .when('/notizen', {
                    templateUrl: 'partials/notizen.html',
                    controller: 'NotizenController'/*,
                     controllerAs: 'LinkCtrl'*/
                })
                .otherwise({
                    redirectTo: '/'
                });
            $locationProvider.html5Mode(true);
        }])


    ;

    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });


})();