const { ESTA_EM_MANUTENCAO = 0 } = process.env;

function modoManutencaoMiddleware(req, res, next) {
  if (+ESTA_EM_MANUTENCAO) {
    return res
      .status(503)
      .json('Oops, sistema em manutenção. Vá ler um livro.');
  }
  next();
}

module.exports = modoManutencaoMiddleware;
