const { Router } = require('express');

const usersController = require('../controllers/usersController');
const validatorMiddleware = require('../middlewares/validatorMiddleware');
const validacaoCadastro = require('../validators/cadastroUsuario');
const loginValidator = require('../validators/loginValidator');

const route = Router();

route.get('/', usersController.base); // listar todos os usuarios
route.get('/:idDoUsuario', usersController.buscarUmUsuario); // implementado
route.post('/', validacaoCadastro, validatorMiddleware, usersController.cadastrar); // implementado
route.patch('/:idDoUsuario', usersController.atualizar); // atualizar um usuario
route.delete('/:idDoUsuario', usersController.delete); // apagar um usuário

module.exports = route;

// criar função que lê o arquivo e devolve o array de objetos
// exportar a função no final da model
// importar no controller
// executar a função dentro do controller 'base'
// enviar a lista para o cliente (Insomnia)