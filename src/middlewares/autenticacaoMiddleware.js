const jwt = require('jsonwebtoken')

function autenticacaoMiddleware(req, res, next) {
  // if(!req.app.locals.estaLogado) {
  //   return res.status(401).json('Usuário não está autenticado. Faça login e tente novamente');
  // }

  const {authorization = ''} = req.headers;

  const partes = authorization.split(' ');
  const [esquema, token] = partes;

  if (!authorization) {
    return res.status(401).json('Nenhuma chave foi fornecida');
  }

  if (partes.length !== 2) {
    return res.status(401).json('Chave mal-formada');
  }

  if (!/Bearer/i.test(esquema)) {
    return res.status(401).json('Chave mal-formada');
  }

  try {
    const conteudo = jwt.verify(token, process.env.CHAVE_JWT);
    req.conteudo = conteudo;
    next();
  } catch (error) {
    console.trace(error);
    return res.status(401).json('Chave inválida. Faça login novamente');
  }
}

module.exports = autenticacaoMiddleware;
