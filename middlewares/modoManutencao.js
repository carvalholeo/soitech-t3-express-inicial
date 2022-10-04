const modoManutencao = false;

function modoManutencaoMiddleware(req, res, next) {
  if (modoManutencao) {
    return res.json('Oops, sistema em manutenção. Vá ler um livro.');
  }
  next();
}

module.exports = modoManutencaoMiddleware;
