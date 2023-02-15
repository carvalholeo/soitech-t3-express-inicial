function modoManutencaoMiddleware(req, res, next) {
  const { ESTA_EM_MANUTENCAO } = process.env;

  if (+ESTA_EM_MANUTENCAO) {
    return res
      .status(503)
      .json("Oops, sistema em manutenção. Vá ler um livro.");
  }
  next();
}

module.exports = modoManutencaoMiddleware;
