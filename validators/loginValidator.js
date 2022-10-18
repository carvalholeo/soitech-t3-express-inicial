const { check } = require('express-validator');


const texto1 = 'de vison          gfjgh         hgj';
const texto2 = '            ';

const loginValidator = [
  check('usuario')
    .trim()
    .notEmpty({ignore_whitespace: true}).withMessage('Campo usuário é obrigatório')
    .isLength({min: 5, max: 20}).withMessage('Campo usuário precisa ter no mínimo 5 e no máximo 20 caracteres'),

  check('senha')
    .notEmpty().withMessage('Senha não pode ser vazia')
    .isStrongPassword({
      minLength: 8,
      minLowercase: 2,
      minUppercase: 2,
      minNumbers: 2,
      minSymbols: 1
    }).withMessage('Sua senhas precisa ter no mínimo 8 caracteres, sendo 2 letras minúsculas, 2 maiúsculas, 2 números e 1 caractere especial'),
];

module.exports = loginValidator;
