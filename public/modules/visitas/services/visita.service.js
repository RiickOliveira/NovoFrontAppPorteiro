angular.module('app.visita')
.factory('visitaService', function(api) {
    
    var visitaFactory = {};

    visitaFactory.getAll = function(condominoId) {
        
        var ds = new api.visita();
        return ds.$get({where : condominoId})

    }

    visitaFactory.getConvidados = function(condominoId,nomeConvidado){
        var ds = new api.convidado();
        
        return ds.$get({search : nomeConvidado, condominoId : Number(condominoId)});
    }


    visitaFactory.save = function(visitaModel){
        var ds = new api.visita();
        ds.visita = visitaModel;
        
        if (visitaModel.id) {
            ds.id = visitaModel.id;
            return ds.$update()											
		} else {
			return ds.$save()               				
		}
        
    }

    return visitaFactory;

});