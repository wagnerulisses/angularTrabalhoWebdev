window.app.service('APIService', function($http){
    
    var url = 'http://localhost:3000'
    this.getAllLogin = function(callback){
        $http.get(url + '/login').then(
            function(res){
                callback(null, res.data)

            },
            function(err){
                callback(err)
            }
        )
    }

    this.getAllEventos = function(callback){
        $http.get(url + '/eventos').then(
            function(res){
                callback(null, res.data)

            },
            function(err){
                callback(err)
            }
        )
    }

    this.getLogin = function(user, pass ,callback){
        $http.get(url + '/login?user=' + user + '&pass=' + pass).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.getEvent = function(id,callback){
        $http.get(url + '/eventos?id=' + id).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.saveLogin = function(login, callback){
        var urlLogin = url + '/login'
        if(login.id){
            urlLogin += '/' + login.id
        }
        $http({
            url: urlLogin,
            data: login,
            method: login.id ? 'PUT' : 'POST'
        }).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.deleteLogin = function(id, callback){
        $http.delete(url + '/login/' + id).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.deleteEventos = function(id, callback){
        $http.delete(url + '/eventos/' + id).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.saveEvent = function(event, callback){
        var urlEvent = url + '/eventos'
        if(event.id){
            urlEvent += '/' + event.id
        }
        $http({
            url: urlEvent,
            data: event,
            method: event.id ? 'PUT' : 'POST'
        }).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

})