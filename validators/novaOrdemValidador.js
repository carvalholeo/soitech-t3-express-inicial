const {check} = require('express-validator');
const {Cliente, Servico} = require('../database/repository');

const arrayDeValidacao = [
  check('data_abertura')
    .escape()
    .notEmpty().withMessage('Data de abertura não pode estar vazia')
    .isDate({format: 'YYYY-MM-DD'}).withMessage('Data de abertura não é válida')
    .custom((field) => {
      const dataAbertura = new Date(field);
      const dataAtual = new Date();
      if (dataAbertura > dataAtual) {
        throw "Data de abertura não pode ser maior que a data atual";
      }
      return true;
    }),

  check('solicitacao')
    .escape()
    .trim()
    .isLength({max: 100}).withMessage('Solicitação não pode ter mais de 100 caracteres'),

  check('id_cliente')
    .escape()
    .notEmpty().withMessage('Cliente não pode estar vazio')
    .isInt({gt: 0}).withMessage('Cliente precisa ser um número inteiro, positivo e maior do que zero')
    .custom(async (field) => {
      const cliente = await Cliente.findOne({where: {id: field}});
      if (!cliente) {
        throw "Cliente não encontrado";
      }
      return true;
    }),

  check('servicos')
    .isArray({ min: 1}).withMessage('Ordem de serviço precisa ter pelo menos um serviço')
    .custom(async (field) => {
      for await (const i of field) {
        const servico = await Servico.findOne({where: {id: i}});
        if (!servico) {
          throw `Serviço de id ${i} não existe`;
        }
      }
      return true;
    })

];

module.exports = arrayDeValidacao;
