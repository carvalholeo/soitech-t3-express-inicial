const bcrypt = require('bcrypt');

const {cadastroUsuario, buscarUmUsuario, listaDeUsuarios, excluirUsuario, atualizarUsuario} = require('../models/usuariosModel');

const usersController = {
  base: async (req, res) => {
    const usuarios = await listaDeUsuarios();

    res.json(usuarios)
  },
  buscarUmUsuario: async (req, res) => {
    const {idDoUsuario} = req.params;
    const usuario = await buscarUmUsuario(idDoUsuario);

    res.json(usuario)
  },
  formularioCadastro: (req, res) => {
    res.send('Envie no método POST os dados do cadastro')
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
  atualizar: async(req, res) => {
    const objetoDoUsuario = req.body;
    const { idDoUsuario } = req.params;

    if (objetoDoUsuario.senha) {
      objetoDoUsuario.senha = bcrypt.hashSync(req.body.senha, 12);
    }

    if (objetoDoUsuario.nivel_id) {
      objetoDoUsuario.nivel_id = undefined;
    }

    if (objetoDoUsuario.estaAtivo) {
      objetoDoUsuario = undefined;
    }

    await atualizarUsuario(idDoUsuario, objetoDoUsuario);
    return res.json(`Usuário com id ${idDoUsuario} atualizado com sucesso`);
  },
  delete: async (req, res) => {
    const {idDoUsuario} = req.params;
    await excluirUsuario(idDoUsuario);
    return res.json('usuário com id '+ idDoUsuario +' excluído com sucesso')
  },
  logout: (req, res) => {
    const {authorization = ''} = req.headers;
    const partes = authorization.split(' ');
    const [, token] = partes;

    req.mapa.set(token, true);

    return res.json('Usuário deslogado com sucesso').status(204);
  }
};

module.exports = usersController;
