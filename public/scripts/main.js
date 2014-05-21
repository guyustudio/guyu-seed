require.config({
	baseUrl: '/scripts',
    paths: {
		'angular': '../../bower_components/angular/angular.min',
		'angular-route': '../../bower_components/angular-route/angular-route.min',
		'jquery': '../../bower_components/jquery/dist/jquery.min',
		'bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap.min'
    },
	shim: {
		'app': {	
			deps: ['angular', 'angular-route', 'bootstrap']
		},
		'angular': {
			exports: 'angular'
		},
		'angular-route': {
			deps: ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		}
	}
});

require(['app'], function(app){
    angular.bootstrap(document, ['app']);
});