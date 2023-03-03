const bcrypt = require('bcrypt');

const {
  cadastroUsuario, buscarUmUsuario, listaDeUsuarios, excluirUsuario, atualizarUsuario,
} = require('../models/usuariosModel');

const usersController = {
  base: async (req, res) => {
    const usuarios = await listaDeUsuarios();

    res.json(usuarios);
  },
  buscarUmUsuario: async (req, res) => {
    const { id } = req.params;
    const usuario = await buscarUmUsuario(id);

    res.json(usuario);
  },
  cadastrar: async (req, res) => {
    try {
      const novoUsuario = req.body;
      novoUsuario.senha = bcrypt.hashSync(req.body.senha, 12);
      novoUsuario.nivel = 1;

      const usuarioCadastrado = await cadastroUsuario(novoUsuario);

      res.json(usuarioCadastrado);
    } catch (error) {
      res
        .status(500)
        .json(error.message);
    }
  },
  atualizar: async (req, res) => {
    const objetoDoUsuario = req.body;
    const { id } = req.params;

    if (objetoDoUsuario.senha) {
      objetoDoUsuario.senha = bcrypt.hashSync(req.body.senha, 12);
    }

    if (objetoDoUsuario.nivel_id) {
      objetoDoUsuario.nivel_id = undefined;
    }

    if (objetoDoUsuario.estaAtivo) {
      objetoDoUsuario.estaAtivo = undefined;
    }

    await atualizarUsuario(id, objetoDoUsuario);
    return res.redirect(`/users/${id}`);
  },
  delete: async (req, res) => {
    const { idDoUsuario } = req.params;
    await excluirUsuario(idDoUsuario);
    return res.json(`usuário com id ${idDoUsuario} excluído com sucesso`);
  },
  logout: (req, res) => {
    const { authorization = '' } = req.headers;
    const partes = authorization.split(' ');
    const [, token] = partes;

    req.mapa.set(token, true);

    return res.json('Usuário deslogado com sucesso').status(204);
  },
};

module.exports = usersController;
