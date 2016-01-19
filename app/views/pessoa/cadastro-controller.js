angular.module('aula3')
    .controller('CadastroController', CadastroController);

function CadastroController($scope) {
    $scope.nome = 'Cadastro de Pessoas';
}