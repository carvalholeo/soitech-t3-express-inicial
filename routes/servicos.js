const { Router } = require("express");

const servicosController = require("../controllers/servicosController");
const autenticacaoMiddleware = require('../middlewares/autenticacaoMiddleware');

const route = Router();

route.use(autenticacaoMiddleware);

route.get("/", servicosController.base);
route.get("/:id", servicosController.buscar);
route.post("/", servicosController.cadastrar);
route.patch("/:id", servicosController.atualizar);
route.delete("/:id", servicosController.delete);

module.exports = route;
