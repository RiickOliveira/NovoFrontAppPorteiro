(function ()
{
  'use strict';

  angular
    angular.module('app.visita', [])
    .config(config);
  
  function config($stateProvider)
  {
    // State
    $stateProvider
      
    .state('visita', {
        url: '/visita',
        templateUrl: './modules/visitas/views/visita-lista.html',
        controller: 'VisitaListaController',
        controllerAs: 'vm',
        params: {
            title: "Visitas agendadas"
        }
    })
    .state('visita-novo', {
        url: '/visita/novo',
        templateUrl: './modules/visitas/views/visita-novo.html',
        controller: 'VisitaController',
        controllerAs: 'vm',
        params: {
            title: "Cadastro de Visita"
        }
    });
  }
})()