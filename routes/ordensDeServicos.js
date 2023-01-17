const { Router } = require('express');

const ordensDeServicosController = require('../controllers/ordensDeServicosController');

const route = Router();

route.get('/', ordensDeServicosController.base);
route.get('/:id', ordensDeServicosController.buscar);
route.post('/', ordensDeServicosController.cadastrar);
route.patch('/:id', ordensDeServicosController.atualizar);
route.delete("/:id", ordensDeServicosController.delete);

module.exports = route;
