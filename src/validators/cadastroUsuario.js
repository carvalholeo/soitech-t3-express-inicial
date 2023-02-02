const { check } = require('express-validator');
const bcrypt = require('bcrypt');
const {Usuario} = require('../database/repository');

// nome, cpf, data de nascimento, e-mail, telefone, senha, usuário
const arrayDeValidacao = [
  check('email')
    .notEmpty().withMessage('Campo e-mail não pode estar vazio')
    .isEmail().withMessage('E-mail não é válido')
    .isLength({ max: 50 }).withMessage('Campo recebe no máximo 50 caracteres')
    .custom(async (field) => {
      const usuario = await Usuario.findOne({
        where: {
          email: field
        }
      });

      if (usuario) {
        throw "Email já existe no sistema";
      }
      return true;
    }),
  check('senha')
    .notEmpty().withMessage('Senha não pode ser vazia')
    .isStrongPassword({
    minLength: 8,
    minLowercase: 2,
    minUppercase: 2,
    minNumbers: 2,
    minSymbols: 1
    }).withMessage('Sua senhas precisa ter no mínimo 8 caracteres, sendo 2 letras minúsculas, 2 maiúsculas, 2 números e 1 caractere especial')
    // .custom(async (field, req) => {
    //   const usuario = await Usuario.findOne({
    //     where: {
    //       usuario: req.body.usuario
    //     }
    //   });

    //   if (usuario) {
    //     const senhaValida = bcrypt.compareSync(field, usuario.senha);
    //     if (senhaValida) {
    //       throw "Nova senha precisa ser diferente da senha anterior."
    //     }
    //   }
    //   return true;
    // }),
    ,
  check('nome').notEmpty().isLength({max: 50, min: 4}),
  check('cpf')
    .notEmpty()
    .isTaxID('pt-BR')
    .custom(async (field) => {
      const usuario = await Usuario.findOne({
        where: {
          cpf: field
        }
      });

      if (usuario) {
        throw "CPF já está cadastrado no sistema";
      }
      return true;
    }),
  check('dataNascimento')
    .isDate().withMessage('Data de nascimento precisa estar no formato AAAA/MM/DD.')
    .notEmpty(),
  check('telefone').isMobilePhone('pt-BR'),
  check('usuario')
    .notEmpty()
    .isLength({min: 5, max: 20})
    .custom(async (field) => {
      const usuario = await Usuario.findOne({
        where: {
          usuario: field
        }
      });

      if (usuario) {
        throw "Usuário já existe no banco de dados";
      }
      return true;
    })
];

module.exports = arrayDeValidacao;