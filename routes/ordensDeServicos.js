const { Router } = require('express');

const ordensDeServicosController = require('../controllers/ordensDeServicosController');

const route = Router();

route.get('/', ordensDeServicosController.base);
route.get('/:idDaOrdemDeServico', ordensDeServicosController.base);
route.post('/', ordensDeServicosController.cadastrar);
route.patch('/', ordensDeServicosController.atualizar);
route.delete("/", ordensDeServicosController.delete);

module.exports = route;
