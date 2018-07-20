window.app.controller('newEventoController', function($scope, APIService, $routeParams){
    $scope.eventos = {}

    if($routeParams.id){
        APIService.getEvent($routeParams.id, function(err, dados){
            if(err) return window.alert(JSON.stringify(err))
            $scope.eventos = dados;
            console.log($scope.eventos)
        })
    }


     $scope.salvarEvento = function(){
        if (!$scope.eventos.data) return window.alert('Preencha a data do evento!')
        if (!$scope.eventos.local) return window.alert('Preencha o local do evento!')
        if (!$scope.eventos.responsavel) return window.alert('Preencha o responsavel do evento!')
        
        APIService.saveEvent($scope.eventos, function (err, data){
            if (err) return window.alert(JSON.stringify(err))
            window.location.href = '#!/listar/'
        })
    }
})