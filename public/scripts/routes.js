define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: '../views/home.html',
                dependencies: [
                    'controllers/homeController'
                ]
            },
            '/user/login': {
                templateUrl: '../views/login.html',
                dependencies: [
                    'controllers/userController'
                ]
            },
            '/user/register':{
                templateUrl:'../views/register.html',
                dependencies:[
                    'controllers/userController'
                ]
            }
        }
    };
});