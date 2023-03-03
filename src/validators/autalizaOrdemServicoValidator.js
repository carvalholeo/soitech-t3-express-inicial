const { check } = require('express-validator');
const { Cliente, Servico, OrdensDeServico } = require('../database/repository');

const arrayDeValidacao = [
  check('id')
    .custom(async (value) => {
      const ordem = await OrdensDeServico.findOne({ where: { id: value } });
      if (!ordem) {
        throw new Error('Ordem de serviço não encontrada.');
      }

      return true;
    }),

  check('data_abertura')
    .optional()
    .escape()
    .notEmpty()
    .withMessage('Data de abertura não pode estar vazia')
    .isDate({ format: 'YYYY-MM-DD' })
    .withMessage('Data de abertura não é válida')
    .custom((field) => {
      const dataAbertura = new Date(field);
      const dataAtual = new Date();
      if (dataAbertura > dataAtual) {
        throw new Error('Data de abertura não pode ser maior que a data atual');
      }
      return true;
    }),

  check('solicitacao')
    .optional()
    .escape()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Solicitação não pode ter mais de 100 caracteres'),

  check('id_cliente')
    .optional()
    .escape()
    .notEmpty()
    .withMessage('Cliente não pode estar vazio')
    .isInt({ gt: 0 })
    .withMessage('Cliente precisa ser um número inteiro, positivo e maior do que zero')
    .custom(async (field) => {
      const cliente = await Cliente.findOne({ where: { id: field } });
      if (!cliente) {
        throw new Error('Cliente não encontrado');
      }
      return true;
    }),

  check('servicos')
    .optional()
    .isArray({ min: 1 }).withMessage('Ordem de serviço precisa ter pelo menos um serviço')
    .custom(async (field) => {
      // eslint-disable-next-line no-restricted-syntax
      for await (const i of field) {
        const servico = await Servico.findOne({ where: { id: i } });
        if (!servico) {
          throw new Error(`Serviço de id ${i} não existe`);
        }
      }
      return true;
    }),

];

module.exports = arrayDeValidacao;
