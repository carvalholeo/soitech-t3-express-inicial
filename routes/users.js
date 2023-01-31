const { Router } = require("express");

const usersController = require("../controllers/usersController");
const validatorMiddleware = require("../middlewares/validatorMiddleware");
const validacaoCadastro = require("../validators/cadastroUsuario");
const routeIdValidator = require("../validators/routeIdValidator");
const autenticacaoMiddleware = require("../middlewares/autenticacaoMiddleware");
const autorizacaoMiddleware = require("../middlewares/autorizacaoMiddleware");

const route = Router();

route.post(
  "/",
  validacaoCadastro,
  validatorMiddleware,
  usersController.cadastrar
); // implementado

route.use(autenticacaoMiddleware);

route.get("/", autorizacaoMiddleware, usersController.base); // listar todos os usuarios
route.get(
  "/:id",
  routeIdValidator,
  validatorMiddleware,
  autorizacaoMiddleware,
  usersController.buscarUmUsuario
); // implementado
route.patch("/:id",
  routeIdValidator,
  validatorMiddleware,
  autorizacaoMiddleware, usersController.atualizar); // atualizar um usuario
route.delete("/:id",
  routeIdValidator,
  validatorMiddleware,
  autorizacaoMiddleware, usersController.delete); // apagar um usuário
route.get("/logout", usersController.logout);

module.exports = route;
