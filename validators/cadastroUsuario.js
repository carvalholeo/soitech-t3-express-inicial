const { check } = require('express-validator');

const arrayDeValidacao = [
  check('email').notEmpty().isEmail().isLength({ max: 50 }),
  check('senha').notEmpty().isStrongPassword({
    minLength: 8,
    minLowercase: 2,
    minUppercase: 2,
    minNumbers: 2,
    minSymbols: 1
  })
];

module.exports = arrayDeValidacao;