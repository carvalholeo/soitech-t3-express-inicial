const { Router } = require('express');

const ordensDeServicosController = require('../controllers/ordensDeServicosController');

const novaOrdemValidator = require('../validators/novaOrdemValidador');
const routeIdValidator = require('../validators/routeIdValidator');
const atualizaOrdemServicoValidator = require('../validators/autalizaOrdemServicoValidator');

const validator = require('../middlewares/validatorMiddleware');
const autenticacaoMiddleware = require('../middlewares/autenticacaoMiddleware');
const autorizacaoMiddleware = require('../middlewares/autorizacaoMiddleware');

const insereNivel = require('../middlewares/insereNivelMiddleware');

const route = Router();

route.use(autenticacaoMiddleware);

route.get('/', ordensDeServicosController.base);
route.get(
  '/:id',
  insereNivel(['Administrador', 'Backoffice', 'Diretoria', 'Técnico', 'Cliente']),
  autorizacaoMiddleware,
  routeIdValidator,
  validator,
  ordensDeServicosController.buscar,
);

route.post(
  '/',
  insereNivel(['Administrador', 'Backoffice', 'Diretoria']),
  autorizacaoMiddleware,
  novaOrdemValidator,
  validator,
  ordensDeServicosController.cadastrar,
);

route.patch(
  '/:id',
  insereNivel(['Administrador', 'Backoffice', 'Diretoria', 'Técnico']),
  autorizacaoMiddleware,
  routeIdValidator,
  atualizaOrdemServicoValidator,
  validator,
  ordensDeServicosController.atualizar,
);

route.delete(
  '/:id',
  routeIdValidator,
  validator,
  ordensDeServicosController.delete,
);

module.exports = route;
