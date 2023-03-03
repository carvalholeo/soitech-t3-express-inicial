function insereNivel(arrayPermissoes) {
  // eslint-disable-next-line func-names
  return function (req, res, next) {
    req.nivel = arrayPermissoes;
    next();
  };
}

module.exports = insereNivel;
