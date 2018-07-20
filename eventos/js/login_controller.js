window.app.controller('loginController', function($scope, APIService){
    $scope.login = {}

    $scope.logar = function(){
        if (!$scope.login.user) return window.alert('Preencha o nome do usuário!')
        if (!$scope.login.pass) return window.alert('Preencha a senha do usuário!')

        APIService.getLogin($scope.login.user, $scope.login.pass, function (err, data){
            if (err) return window.alert(JSON.stringify(err))
            if(!data.length) return window.alert('Usuário ou senha incorreta!')
            
            window.location.href = '#!/listar/'
        })
    }

    $scope.salvarLogin = function(){
        if (!$scope.login.user) return window.alert('Preencha o nome do usuário!')
        if (!$scope.login.pass) return window.alert('Preencha a senha do usuário!')

        APIService.saveLogin($scope.login, function (err, data){
            if (err) return window.alert(JSON.stringify(err))
            window.location.href = '#!/'
        })
    }

})