angular.module('aula3')
    .service('AlertService', AlertService);
AlertService.$inject = ['toastr'];

function AlertService(toastr) {
    this.showSucess = showSucess;
    this.showInfo = showInfo;
    this.showWarning = showWarning;
    this.showError = showError;
    this.configuracao = {progressBar: true};

    function showSucess(mensagem, titulo) {
        if (!titulo) {
            titulo = 'Ok';
        }

        toastr.success(mensagem, titulo, this.configuracao);
    }

    function showInfo(mensagem, titulo) {
        if (!titulo) {
            titulo = 'Informação';
        }

        toastr.info(mensagem, titulo, this.configuracao);
    }

    function showWarning(mensagem, titulo) {
        if (!titulo) {
            titulo = 'Alerta';
        }

        toastr.warning(mensagem, titulo, this.configuracao);
    }

    function showError(mensagem, titulo) {
        if (!titulo) {
            titulo = 'Erro';
        }

        toastr.error(mensagem, titulo, this.configuracao);
    }

}