const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {buscarUsuarioParaLogin} = require('../models/usuariosModel');

const loginController = {
  fazerLogin: (req, res) => {
    const {usuario, senha} = req.body;
    const usuarioDB = buscarUsuarioParaLogin(usuario);

    if (typeof(usuarioDB) === "undefined") {
      return res.status(401).json('Usuário ou senha inválidos');
    }

    const senhaEstaValida = bcrypt.compareSync(senha, usuarioDB.senha);

    if (!senhaEstaValida) {
      return res.status(401).json('Usuário ou senha inválidos');
    }

    usuarioDB.senha = undefined;

    const token = jwt.sign(usuarioDB, process.env.CHAVE_JWT, {
      expiresIn: '5 minutes'
    });

    return res.json({token});
  }
}

module.exports = loginController;
