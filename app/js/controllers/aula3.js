angular.module('aula3')
    .controller('aula3Controller', aula3Controller);

aula3Controller.$inject = ['$scope', '$timeout', 'AlertService', '$filter'];

function aula3Controller($scope, $timeout, AlertService, $filter) {
    $scope.colunas = [
        {chave: 'nome', nome: 'Nome'},
        {chave: 'email', nome: 'Email'},
        {chave: 'data_nascimento', nome: 'Data Nascimento'},
        {chave: 'telefone', nome: 'Telefone'},
        {chave: 'editar', nome: 'Editar'}
    ];
    $scope.pessoas = [];
    $scope.pessoa = {};
    $scope.adicionaPessoa = adicionaPessoa;
    $scope.editarPessoa = editarPessoa;
    $scope.getRowStyle = getRowStyle;
    $scope.gridOptions = {};

    iniciar();

    function iniciar() {
        $scope.gridOptions = {
            data: $scope.pessoas,
            columnDefs: [
                {field: 'nome', displayName: 'Nome', width: '25%'},
                {field: 'email', displayName: 'Sobrenome'},
                {
                    field: 'data_nascimento',
                    displayName: 'Data Nascimento',
                    cellTemplate: 'app/template/cell-template-date.html'
                },
                {field: 'telefone', displayName: 'Telefone'},
                {field: 'editar', displayName: '', cellTemplate: 'app/template/cell-template-button.html'}
            ],
            rowTemplate: 'app/template/row-template.html'
        };
    }

    function adicionaPessoa() {
        setarTouchedNosInputs();
        if ($scope.formularioPessoa.$invalid) {
            AlertService.showError('Verifique os campos antes de salvar', 'Erro');
            return;
        }

        $scope.pessoa.nome = $filter('maiusculo')($scope.pessoa.nome);
        $scope.pessoas.push($scope.pessoa);

        AlertService.showSucess('Registro salvo com sucesso', 'Ok');

        limpar();
    }

    function editarPessoa(linhaSelecionada) {
        limpar();
        linhaSelecionada.data_nascimento = new Date(linhaSelecionada.data_nascimento);
        $scope.pessoa = linhaSelecionada;
    }

    function limpar() {
        $scope.pessoa = {};
        $timeout(function () {
            setarUntouchedNosInputs();
        }, 80);
    }

    function excluir() {
        $scope.pessoas = {};
    }

    function setarTouchedNosInputs() {
        angular.forEach($scope.formularioPessoa.$error, function (error) {
            angular.forEach(error, function (field) {
                field.$setTouched();
            });
        });
    }

    function setarUntouchedNosInputs() {
        angular.forEach($scope.formularioPessoa.$error, function (error) {
            angular.forEach(error, function (field) {
                field.$setUntouched();
            });
        });
    }

    function getRowStyle(linhaSelecionada){
        var style = {};
        style.backgroundColor = linhaSelecionada.cor;
        style.minHeight = '40px';
        style.verticalAlign = 'center';
        style.color = 'white';
        return style;
    }
}