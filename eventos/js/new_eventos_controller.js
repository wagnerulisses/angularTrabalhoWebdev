window.app.controller('newEventoController', function($rootScope, APIService, $routeParams){
    $rootScope.eventos = {}

    if($routeParams.id){
        APIService.getEvent($routeParams.id, function(err, dados){
            if(err) return window.alert(JSON.stringify(err))
            $rootScope.eventos = dados[0];
            console.log($rootScope.eventos)
        })
    }

    $rootScope.salvarEvento = function(){

        if (!$rootScope.eventos.date) return window.alert('Preencha a data do evento!')
        if (!$rootScope.eventos.local) return window.alert('Preencha o local do evento!')
        if (!$rootScope.eventos.responsavel) return window.alert('Preencha o responsavel do evento!')
        
        APIService.saveEvent($rootScope.eventos, function (err, data){
            if (err) return window.alert(JSON.stringify(err))
            window.location.href = '#!/listar/'
        })
    }
    
})