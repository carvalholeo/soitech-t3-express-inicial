const {check} = require('express-validator');
const { Servico } = require('../../database/repository');

const updateServicoValidator = [
  check('id')
    .custom(async (value) => {
      const servico = await Servico.findOne({where: { id: value }});

      if (!servico) {
        throw new Error('Serviço não encontrado.');
      }
      return true;
    }),

  check('descricao')
    .optional()
    .isLength({ min: 1, max: 50 }).withMessage('A descrição deve ter entre 1 e 50 caracteres.'),

  check('valor')
    .optional()
    .isDecimal({min: 0.01}).withMessage('O valor deve ser maior que zero.'),

  check('prazo_execucao')
    .optional()
    .isInt({min: 1}).withMessage('O prazo de execução deve ser um número inteiro maior que zero.'),
];

module.exports = updateServicoValidator;
