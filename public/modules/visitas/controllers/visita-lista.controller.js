angular.module('app.visita')
.controller('VisitaListaController', visitaListaController);

function visitaListaController(visitaService, $localStorage, $state,$mdDialog) {
	
	vm = this;

	function init(){
		$localStorage.condomino = {
            id : 5,
            nome : 'Jose Mayer'
        }
		
		carregaVisitas()
	}

	init()

	vm.exclui = exclui;
	vm.novaVisita = novaVisita;

	function carregaVisitas(){
		visitaService.getAll($localStorage.condomino.id).then(function(visitas){			
			
			console.log(visitas)
			vm.dataset = visitas.data.map(function(resp){

                if (new Date() >= new Date(resp.dataHoraExpiracao)){
                    resp.situacao = "Expirado";
                } 

                switch (resp.situacao) {
                    case 1:
                        resp.situacao = "Agendado"
                        break;
                    case 2:
                        resp.situacao = "Liberado"
                        break;    
                    case 3:
                        resp.situacao = "Expirado"
                        break;
                    case 4:
                        resp.situacao = "Cancelado"
                        break;
                    case 5:
                        resp.situacao = "Negado"
                        break;                
                    default:
                        break;
				}
				
				return resp
            })			
			
		})
	}

	function novaVisita(){
		$state.go('visita-novo')	
	}
	
	function exclui(ev,visitas){
		
        let confirmacao = $mdDialog.confirm()
                .title('Aguardando confirmação')
                .textContent('Confirma o cancelamento da visita de ' + visitas.nomeConvidado)
                .ariaLabel('Msg interna do botao')
                .targetEvent(ev)
                .ok('Sim')
                .cancel('Não');

        $mdDialog.show(confirmacao).then(function() {
                vm.excluir(visitas.id)
        });
    }
}