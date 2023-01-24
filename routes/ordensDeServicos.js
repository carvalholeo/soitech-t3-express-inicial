const { Router } = require('express');

const ordensDeServicosController = require('../controllers/ordensDeServicosController');

const novaOrdemValidator = require('../validators/novaOrdemValidador');

const validator = require('../middlewares/validatorMiddleware');
const autenticacaoMiddleware = require('../middlewares/autenticacaoMiddleware');
const autorizacaoMiddleware = require('../middlewares/autorizacaoMiddleware');

const route = Router();

function niveis(array_permissoes) {

  return function(req, res, next) {
    req.nivel = array_permissoes;
    next();
  }
}

route.use(autenticacaoMiddleware);

route.get('/', ordensDeServicosController.base);
route.get('/:id', niveis(['Administrador', 'Backoffice', 'Diretoria', 'Técnico', 'Cliente']), autorizacaoMiddleware, ordensDeServicosController.buscar);
route.post('/', niveis(['Administrador', 'Backoffice', 'Diretoria']), autorizacaoMiddleware, novaOrdemValidator, validator, ordensDeServicosController.cadastrar);
route.patch('/:id', ordensDeServicosController.atualizar);
route.delete("/:id", ordensDeServicosController.delete);

module.exports = route;
