/**
 * Created by Christian on 29.01.2016.
 */
(function(){
    angular.module('onCollab')

        /*.controller('HomeController', function(){

        })*/

        .controller('LinkController', function($scope, $http){
            $scope.newLink = {};
            $scope.updateLink = {};
            //this.links = linkEntrys;

            //this.links = linkEntrys;
            getLinks();
           /* $scope.refresh = function(){
                getLinks();
            };*/

            function getLinks() {
                $http.get('/api/links')
                    .success(function (data) {
                        //linkData = data;
                        $scope.links =data;
                        //console.log(data);
                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    })
                ;
            }

            $scope.getLink = function(id){
                $http.get('/api/links/' +id)
                    .success(function(data){
                        $scope.updateLink = data;
                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    })
                ;
            };

            $scope.postLink = function(){

                var data = $scope.newLink;
                $http.post('/api/links', data)
                    .success(function(data) {
                        //$scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.links = data;
                        console.log(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            };

            $scope.deleteLink = function(id){
                $http.delete('/api/links/' + id)
                    .success(function(data) {
                        $scope.links = data;
                        console.log(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });

            };
            $scope.editLink = function(id) {
                var data = $scope.updateLink;
                $http.put('/api/links/' + id, data)
                    .success(function(data){
                        $scope.links = data;
                    })
                    .error(function(data){
                        console.log('Error: ' + data);
                    });
            };
        })

        .controller('KalenderController', function($scope, $http){
            var kalenderData=kalenderEntries;
            $scope.entriesCount = kalenderData.count;
            $scope.data = kalenderData.entrys;
            $scope.entriesPerPage = 10;
            $scope.currentPage = 1;



        })



    ;
    var linkEntry =
        {
            name: 'Google',
            url: 'www.google.com',
            desc: 'Suchmaschine'
        };
    var linkEntrys =[
        {
            name: 'Google',
            url: 'www.google.com',
            desc: 'Suchmaschine'
        },
        {
            name: 'Stack Overflow',
            url: 'http://stackoverflow.com/',
            desc: 'Frage und Antwort Plattform zu Programmierthemen.'
        }

    ];
    var kalenderEntries = {
        "count": 25,
        "entrys": [
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            },
            {
                "id": 1,
                "title": "Termin",
                "desc": "wichtiger Termin",
                "startDate": "01.01.2001",
                "endDate": "01.01.2001",
                "startTime": "00:00",
                "endTime": "06:00"


            }

        ]


    };




})();