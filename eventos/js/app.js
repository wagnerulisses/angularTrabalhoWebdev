window.app = window.angular.module('eventos', ['ngRoute'])

window.app.config(function($routeProvider, $locationProvider){
    
    $routeProvider.when('/',{
        templateUrl: 'login.html',
        controller: 'loginController' 
    })
    .when('/newLogin/',{
        templateUrl: 'new_login.html',
        controller: 'loginController' 
    })
    .when('/listar/',{
        templateUrl: 'listar_eventos.html',
        controller: 'eventoController' 
    })
    .when('/newEvent/',{
        templateUrl: 'new_event.html',
        controller: 'newEventoController' 
    })
    .when('/newEvent/:id',{
        templateUrl: 'new_event.html',
        controller: 'newEventoController' 
    })
    .otherwise('/')

})