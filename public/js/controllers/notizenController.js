/**
 * Created by Christian on 08.02.2016.
 */
(function() {
    angular.module('onCollab')
        .controller('NotizenController', function ($scope, $http) {
            var editId = 0;
            $scope.newNote = {};
            $scope.editNote = {};


            getNotes();

            function getNotes() {
                $http.get('/api/notes')
                    .success(function (data, status, headers, config) {
                        //linkData = data;
                        $scope.notes = data;
                        //console.log(data);
                    })
                    .error(function (data, status, header, config) {
                        console.log('Error: ' + data);
                    })
                ;
            }

            $scope.postNote = function(){

                var data = $scope.newNote;
                $http.post('/api/notes', data)
                    .success(function(data) {
                        //$scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.notes = data;
                        //console.log(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            };

            $scope.deleteNote = function(id){
                $http.delete('/api/notes/' + id)
                    .success(function(data) {
                        $scope.notes = data;
                        //console.log(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });

            };

            $scope.editNote = function(id){

            };

            $scope.addSketch = function () {
                sketchCount++;

                /*var outputN = "outputSkizze" + skizzeAnz;
                 var canvas = $("#colors_sketch")[0];
                 var context = canvas.getContext('2d');
                 var image = new Image();
                 image.src = $('#colors_sketch')[0].toDataURL("image/png");

                 $("#outputArea").append("<div class = singleOutput id = "+outputN+"></div>");
                 $("#"+outputN).append(image);
                 //$("#skizzenTool").load(" #skizzenTool");
                 context.clearRect(0, 0, canvas.width, canvas.height);
                 $('#colors_sketch').sketch('actions',[]);*/


            };
            $scope.deleteSketch = function () {
                var canvas = sketch[0];
                var context = canvas.getContext('2d');

                context.clearRect(0, 0, canvas.width, canvas.height);
                sketch.sketch('actions',[]);

            };

            $scope.setEditId = function(id) {
                editId = id;
                //editNote =
            };
        })
})();