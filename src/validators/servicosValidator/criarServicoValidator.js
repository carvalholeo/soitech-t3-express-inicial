const { check } = require('express-validator');

const criarServicoValidator = [
  check('descricao')
    .notEmpty({ ignore_whitespace: true }).withMessage('A descrição deve ser preenchida.')
    .isLength({ min: 1, max: 50 })
    .withMessage('A descrição deve ter entre 1 e 50 caracteres.'),

  check('valor')
    .isDecimal({ min: 0.01 }).withMessage('O valor deve ser maior que zero.')
    .notEmpty()
    .withMessage('O valor deve ser preenchido.'),

  check('prazo_execucao')
    .isInt({ min: 1 }).withMessage('O prazo de execução deve ser um número inteiro maior que zero.')
    .notEmpty()
    .withMessage('O prazo de execução deve ser preenchido.'),
];

module.exports = criarServicoValidator;
