const { param } = require('express-validator');

const idDaRotaValidator = [
  param('id')
    .notEmpty({ignore_whitespace: true}).withMessage('Campo id na rota é obrigatório')
    .isNumeric({no_symbols: true}).withMessage('Campo id na rota precisa ser um número')
];

module.exports = idDaRotaValidator;
