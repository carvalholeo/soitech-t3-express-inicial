const { Router } = require('express');

const usersController = require('../controllers/usersController');
const validatorMiddleware = require('../middlewares/validatorMiddleware');
const arrayDeValidacao = require('../validators/cadastroUsuario');

const route = Router();

route.get('/', usersController.base);
route.get('/cadastro', usersController.formularioCadastro);
route.post('/', arrayDeValidacao, validatorMiddleware, usersController.cadastrar);
route.patch('/', usersController.atualizar);
route.delete('/', usersController.delete);

module.exports = route;
