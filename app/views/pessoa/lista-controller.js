angular.module('aula3')
    .controller('ListaController', ListaController);

function ListaController($scope) {
    $scope.nome = 'Lista de pessoas';
}