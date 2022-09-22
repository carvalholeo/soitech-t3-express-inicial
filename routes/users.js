const { Router } = require('express');

const usersController = require('../controllers/usersController')

const route = Router();

route.get('/', usersController.base);

route.get('/cadastro', usersController.formularioCadastro);

route.post('/cadastro', usersController.cadastrar);

module.exports = route;
