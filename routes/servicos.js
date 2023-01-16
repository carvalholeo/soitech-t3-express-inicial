const { Router } = require('express');

const servicosController = require('../controllers/servicosController');

const route = Router();

route.get('/', servicosController.base);
route.get('/:id', servicosController.base);
route.post('/', servicosController.cadastrar);
route.patch('/:id', servicosController.atualizar);
route.delete("/:id", servicosController.delete);

module.exports = route;
