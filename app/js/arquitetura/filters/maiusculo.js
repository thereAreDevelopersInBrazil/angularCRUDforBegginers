angular.module('aula3').filter('maiusculo', toUpperCase);

function toUpperCase() {
    return function (input) {
        if (input && typeof input === 'string') {
            return input.toUpperCase();
        }
        return input;
    }
};