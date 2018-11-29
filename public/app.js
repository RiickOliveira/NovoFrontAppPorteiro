var materialApp = angular
.module('materialApp', [
    'materialApp.routes',
    'ui.router',
    'ngMaterial',
    'ngResource',
    'ngMessages',
    'appCtrl',
    'ngStorage',
    'app.visita'    
    

]).config(function($mdThemingProvider,$mdDateLocaleProvider,$mdAriaProvider) {
  
    $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('red');

    // Formata de data brasileiro
    $mdDateLocaleProvider.formatDate = function(date) {
        return date ? moment(date).format('DD/MM/YYYY') : null;
    };

    // Desativar os warnings de ARIA-LABEL (label para tecnologias assistivas)
    $mdAriaProvider.disableWarnings(); 
});