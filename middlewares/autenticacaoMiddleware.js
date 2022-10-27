function autenticacaoMiddleware(req, res, next) {
  if(!req.app.locals.estaLogado) {
    return res.status(401).json('Usuário não está autenticado. Faça login e tente novamente');
  }

  next();
}

module.exports = autenticacaoMiddleware;
