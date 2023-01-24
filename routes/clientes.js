const { Router } = require('express');

const clienteController = require('../controllers/clienteController');

const idDaRotaValidator = require('../validators/idDeRotaValidator');
const validatorMiddleware = require('../middlewares/validatorMiddleware');
const autenticacaoMiddleware = require('../middlewares/autenticacaoMiddleware');
const autorizacaoMiddleware = require('../middlewares/autorizacaoMiddleware');

const router = Router();

router.use((req, res, next) => {
  req.nivel = [
    'Administrador',
    'Backoffice',
    'Diretoria'
  ];
  next();
})

router
  .use(autenticacaoMiddleware)
  .use(autorizacaoMiddleware)
  .get('/', clienteController.listarTodos)
  .get('/:id', idDaRotaValidator, validatorMiddleware, clienteController.cliente)
  .post('/', clienteController.criarCliente)
  .patch('/:id', idDaRotaValidator, validatorMiddleware,clienteController.atualizarCliente)
  .delete('/:id', idDaRotaValidator, validatorMiddleware, clienteController.apagarCliente);

module.exports = router;
