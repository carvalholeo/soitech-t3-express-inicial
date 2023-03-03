const { check } = require('express-validator');

const routeIdValidator = [
  check('id')
    .not().isEmpty({ ignore_whitespace: true }).withMessage('O id deve ser preenchido.')
    .isInt({ min: 1 })
    .withMessage('O id deve ser um número inteiro maior que zero.'),
];

module.exports = routeIdValidator;
