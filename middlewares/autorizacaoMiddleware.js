const { Permissao } = require('../database/repository');

async function autorizacaoMiddleware(req, res, next) {
  const { idDoUsuario } = req.params;
  const { id, nivel = 1 } = req.conteudo;

  const permissoes = await Permissao.findOne({
    where: {
      id: nivel
    }
  });

  if (Number(idDoUsuario) === id || permissoes.alterar_ordem) {
    return next();
  }

  return res.status(403).json('Usuário não tem permissão para acesso a essa informação.')
}

module.exports = autorizacaoMiddleware;
