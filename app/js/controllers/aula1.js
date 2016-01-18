angular.module('aula1')
    .controller('aula1Controller', aula1Controller);

aula1Controller.$inject = ['$scope'];

function aula1Controller($scope) {
    $scope.nome = "Natanael Felipe";
    $scope.subFuncao = subFuncao;
    $scope.novoEstilo = {};
    $scope.$watch('nome', onChangeNome);
    function subFuncao() {
        alert("Olá " + $scope.nome);
    }

    function onChangeNome(novoValor, valorAntigo){
        if(novoValor === valorAntigo){
            return;
        }

        if(novoValor === 'delta'){
            $scope.novoEstilo.backgroundColor = 'red';
            $scope.novoEstilo.color = 'white';
        }else{
            $scope.novoEstilo.backgroundColor = 'blue';
            $scope.novoEstilo.color = 'yellow';
        }
    }
}