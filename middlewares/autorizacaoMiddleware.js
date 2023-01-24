const { Permissao } = require('../database/repository');
const { Op } = require('sequelize');

async function autorizacaoMiddleware(req, res, next) {
  const { id: idRotas = 0 } = req.params;
  const { id, nivel_id = 1 } = req.conteudo;
  const { nivel } = req;

  const permissoes = await Permissao.findAll({
    where: {
      nome_permissao: {
        [Op.in]: nivel
      },
      id: nivel_id
    }
  });

  if (Number(idRotas) === id || permissoes.length > 0) {
    console.log(idRotas)
    console.log(id)
    console.log('ENTROU AQUI')
    console.log(permissoes)
    console.log(nivel)

    // process.exit(0)
    return next();
  }

  return res.status(403).json('Usuário não tem permissão para acesso a essa informação.')
}

module.exports = autorizacaoMiddleware;
