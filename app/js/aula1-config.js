angular.module('aula1', []);
angular.module('aula2', []);
angular.module('aula3', [
    'ngMessages',
    'toastr',
    'ui.grid',
    'ngMaterial',
    'ui.router',
    'oc.lazyLoad'
]).config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    var home = {
        url: '/home',
        templateUrl: 'app/views/home/home.html'
    };
    var cadastro = {
        url: '/cadastro',
        templateUrl: 'app/views/pessoa/cadastro.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/pessoa/cadastro-controller.js');
            }
        }
    };
    var lista = {
        url: '/cadastro',
        templateUrl: 'app/views/pessoa/lista.html',
        resolve: {
            deps: function ($ocLazyLoad){
                return $ocLazyLoad.load('app/views/pessoa/lista-controller.js');
            }
        }
    };

    $stateProvider.state('home', home);
    $stateProvider.state('cadastro', cadastro);
    $stateProvider.state('lista', lista);
}