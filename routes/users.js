const { Router } = require('express');

const usersController = require('../controllers/usersController')

const route = Router();

route.get('/', usersController.base);

route.get('/cadastro', usersController.formularioCadastro);

route.post('/', usersController.cadastrar);

route.patch('/', usersController.atualizar);

route.delete('/', usersController.delete);

module.exports = route;
