const { Router } = require('express');

const ordensDeServicosController = require('../controllers/ordensDeServicosController');

const route = Router();

route.get('/', ordensDeServicosController.base);

module.exports = route;
