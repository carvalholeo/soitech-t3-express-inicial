function autorizacaoMiddleware(req, res, next) {
  const { idDoUsuario } = req.params;
  const { id, nivel = 1 } = req.conteudo;

  if (Number(idDoUsuario) === id || nivel === 2) {
    return next();
  }

  return res.status(403).json('Usuário não tem permissão para acesso a essa informação.')
}

module.exports = autorizacaoMiddleware;
