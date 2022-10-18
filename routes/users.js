const { Router } = require('express');

const usersController = require('../controllers/usersController');
const validatorMiddleware = require('../middlewares/validatorMiddleware');
const validacaoCadastro = require('../validators/cadastroUsuario');
const loginValidator = require('../validators/loginValidator');

const route = Router();

route.get('/', usersController.base);
route.get('/:idDoUsuario', usersController.base);
route.post('/', validacaoCadastro, validatorMiddleware, usersController.cadastrar);
route.patch('/', usersController.atualizar);
route.delete('/', usersController.delete);

module.exports = route;
