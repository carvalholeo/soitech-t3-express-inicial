const { Router } = require('express');

const clienteController = require('../controllers/clienteController');

const routeIdValidator = require('../validators/routeIdValidator');
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
  .get('/:id', routeIdValidator, validatorMiddleware, clienteController.cliente)
  .post('/', clienteController.criarCliente)
  .patch('/:id', routeIdValidator, validatorMiddleware,clienteController.atualizarCliente)
  .delete('/:id', routeIdValidator, validatorMiddleware, clienteController.apagarCliente);

module.exports = router;
