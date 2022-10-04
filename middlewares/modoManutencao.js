const modoManutencao = false;

function modoManutencaoMiddleware(req, res, next) {
  if (modoManutencao) {
    return res
      .status(503)
      .json('Oops, sistema em manutenção. Vá ler um livro.');
  }
  next();
}

module.exports = modoManutencaoMiddleware;
