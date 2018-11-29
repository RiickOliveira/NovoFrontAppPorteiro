angular.module('app.visita')
.controller('VisitaController', visitaController);

function visitaController(visitaService, $localStorage,$state) {
	
    vm = this;
    
    vm.query = {
        text : ''
    }

	function init(){
		
	}

    init()
    
    vm.exclui            = exclui
    vm.salva             = salva;
    vm.carregaConvidados = carregaConvidados;

    function carregaConvidados(nomeConvidado){
        return visitaService.getConvidados($localStorage.condomino.id,nomeConvidado).then(function(convidados){ 
            return convidados.data;
        })    
    }

	
	function salva(){
                
        vm.dataHoraReserva.setHours(vm.horaReserva.getHours()- 3)
        vm.dataHoraReserva.setMinutes(vm.horaReserva.getMinutes())
        
        let visitaModel = {
            condominoId : $localStorage.condomino.id,
            pessoaId : vm.query.item.pessoa.id, 
            dataHoraReserva : vm.dataHoraReserva ,
            nomeConvidado : vm.query.item.pessoa.nome,
            condominoObservacao : vm.condominoObservacao,           
        };

        let sucesso = function(resposta){
			console.log(resposta)
			
			if (resposta.sucesso) {				

				if (vm.visitaId) {
					toastr.info("Visita atualizada com sucesso","SUCESSO")
				} else {
					toastr.success("Visita agendada com sucesso :)","SUCESSO")	
				}
                $state.go('visita')
            }
           
        }
        
        let erro = function(resposta){
            console.log(resposta)
        }

        
        visitaModel.id = vm.visitaId;
        visitaService.save(visitaModel).then(sucesso,erro)               				
		

    }
    
    
	

}