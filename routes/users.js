const { Router } = require('express');

const usersController = require('../controllers/usersController');
const validatorMiddleware = require('../middlewares/validatorMiddleware');
const validacaoCadastro = require('../validators/cadastroUsuario');
const loginValidator = require('../validators/loginValidator');
const autenticacaoMiddleware = require('../middlewares/autenticacaoMiddleware');
const autorizacaoMiddleware = require('../middlewares/autorizacaoMiddleware');

const route = Router();

route.post('/', validacaoCadastro, validatorMiddleware, usersController.cadastrar); // implementado

route.use(autenticacaoMiddleware);

route.get('/', usersController.base); // listar todos os usuarios
route.get('/:idDoUsuario', autorizacaoMiddleware, usersController.buscarUmUsuario); // implementado
route.patch('/:idDoUsuario', usersController.atualizar); // atualizar um usuario
route.delete('/:idDoUsuario', usersController.delete); // apagar um usuário

module.exports = route;
