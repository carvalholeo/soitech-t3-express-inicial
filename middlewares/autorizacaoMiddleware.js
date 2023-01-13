const { Permissao } = require('../database/repository');

async function autorizacaoMiddleware(req, res, next) {
  const { idDoUsuario } = req.params;
  const { id, nivel_id = 1 } = req.conteudo;

  const permissoes = await Permissao.findOne({
    where: {
      id: nivel_id
    }
  });

  if (Number(idDoUsuario) === id || permissoes.nome_permissao === 'Administrador') {
    return next();
  }

  return res.status(403).json('Usuário não tem permissão para acesso a essa informação.')
}

module.exports = autorizacaoMiddleware;
