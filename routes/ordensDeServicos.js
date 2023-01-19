const { Router } = require('express');

const ordensDeServicosController = require('../controllers/ordensDeServicosController');

const novaOrdemValidator = require('../validators/novaOrdemValidador');

const validator = require('../middlewares/validatorMiddleware');

const route = Router();

route.get('/', ordensDeServicosController.base);
route.get('/:id', ordensDeServicosController.buscar);
route.post('/', novaOrdemValidator, validator, ordensDeServicosController.cadastrar);
route.patch('/:id', ordensDeServicosController.atualizar);
route.delete("/:id", ordensDeServicosController.delete);

module.exports = route;
