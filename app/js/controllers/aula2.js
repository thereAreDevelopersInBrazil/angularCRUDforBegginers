angular.module('aula2')
    .controller('aula2Controller', aula2Controller);

aula2Controller.$inject = ['$scope'];

function aula2Controller($scope) {
    $scope.colunas = [
        {chave: 'nome', nome: 'Nome'},
        {chave: 'email', nome: 'Email'},
        {chave: 'data_nasc', nome: 'Data Nascimento'},
        {chave: 'telefone', nome: 'Telefone'}
    ];
    $scope.pessoas = [];
    $scope.pessoa = {};
    $scope.adicionaPessoa = adicionaPessoa;
    function adicionaPessoa() {
        $scope.pessoas.push($scope.pessoa);
    }
}