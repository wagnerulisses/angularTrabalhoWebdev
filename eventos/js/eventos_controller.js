window.app.controller('eventoController', function($rootScope, APIService, $routeParams){
    $rootScope.eventos = []

    listar()

    function listar(){
        APIService.getAllEventos(function (err, data){
            if (err) return window.alert(JSON.stringify(err))
            $rootScope.eventos = data
        })
    }

    $rootScope.excluir = function(id){
        var c = confirm('Deseja realmente excluir?')
        if(c){
         APIService.deleteEventos(id, function(err, data){
             if(err) return window.alert(JSON.stringify(err))
             listar()
         })
        }
     }

})