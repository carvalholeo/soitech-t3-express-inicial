function insereNivel(array_permissoes) {

  return function(req, res, next) {
    req.nivel = array_permissoes;
    next();
  }
}

module.exports = insereNivel;
