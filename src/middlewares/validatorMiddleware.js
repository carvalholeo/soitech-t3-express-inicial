const { validationResult } = require('express-validator');

function validatorMiddleware(req, res, next) {
  const resultado = validationResult(req);

  if (resultado.isEmpty()) {
    return next();
  }

  return res
    .status(400)
    .json({ erros: resultado.mapped() });
}

module.exports = validatorMiddleware;
