const { Router } = require('express');

const clienteController = require('../controllers/clienteController');

const idDaRotaValidator = require('../validators/idDeRotaValidator');
const validatorMiddleware = require('../middlewares/validatorMiddleware');

const router = Router();

router
  .get('/', clienteController.listarTodos)
  .get('/:id', idDaRotaValidator, validatorMiddleware, clienteController.cliente)
  .post('/', clienteController.criarCliente)
  .patch('/:id', idDaRotaValidator, validatorMiddleware,clienteController.atualizarCliente)
  .delete('/:id', idDaRotaValidator, validatorMiddleware, clienteController.apagarCliente);

module.exports = router;
