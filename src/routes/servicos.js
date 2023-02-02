const { Router } = require("express");

const servicosController = require("../controllers/servicosController");
const autenticacaoMiddleware = require('../middlewares/autenticacaoMiddleware');
const validatorMiddleware = require('../middlewares/validatorMiddleware');

const routeIdValidator = require('../validators/routeIdValidator');
const updateServicoValidator = require('../validators/servicosValidator/updateServicoValidator');
const criarServicoValidator = require('../validators/servicosValidator/criarServicoValidator');

const route = Router();

// route.use(autenticacaoMiddleware);

route.get("/", servicosController.base);
route.get("/:id", routeIdValidator, validatorMiddleware, servicosController.buscar);
route.post("/", criarServicoValidator, validatorMiddleware, servicosController.cadastrar);
route.patch("/:id", routeIdValidator, updateServicoValidator, validatorMiddleware, servicosController.atualizar);
route.delete("/:id", routeIdValidator, validatorMiddleware, servicosController.delete);

module.exports = route;
