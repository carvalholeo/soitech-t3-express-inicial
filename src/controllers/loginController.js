const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { buscarUsuarioParaLogin } = require('../models/usuariosModel');

const loginController = {
  fazerLogin: async (req, res) => {
    const { usuario, senha } = req.body;
    const usuarioDB = await buscarUsuarioParaLogin(usuario);

    if (!usuarioDB) {
      return res.status(401).json('Usuário ou senha inválidos');
    }

    const senhaEstaValida = bcrypt.compareSync(senha, usuarioDB.senha);

    if (!senhaEstaValida) {
      return res.status(401).json('Usuário ou senha inválidos');
    }

    usuarioDB.senha = undefined;
    const usuarioParse = JSON.parse(JSON.stringify(usuarioDB));

    const token = jwt.sign(usuarioParse, process.env.CHAVE_JWT, {
      expiresIn: '5 minutes',
    });

    return res.json({ token });
  },
};

module.exports = loginController;
