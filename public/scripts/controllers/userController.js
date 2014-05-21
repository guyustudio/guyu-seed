define(['app'], function(app){
    app.controller('loginController', ['$scope', function($scope){
           console.log('now login..');
        }
    ]);
    app.controller('registerController', ['$scope', function($scope){
            console.log('now register..');
            $scope.register = function(){

            }
        }
    ]);
});