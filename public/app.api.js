(function ()
{
    'use strict';

    angular
        .module('materialApp')
        .factory('api', apiService);
    
    function apiService($resource)
    {

      var api = {}      

      // Base Url
      api.baseUrl = 'http://localhost:3000/api/';

      
      /* Recursos da API */ 
      api.condomino   = $resource(api.baseUrl + 'condomino/:id', {},
        {update: {
          method: 'PUT'
        }
      })

      api.visita   = $resource(api.baseUrl + 'visita/:id', {id : '@id'},
        {update: {
          method: 'PUT'
        }
      })

      api.convidado = $resource(api.baseUrl + 'condominoConvidado/:id' , {id :'@id'}, {
        update : {
            method : 'PUT'
        }
      })


      

      return api;
    }

})();
