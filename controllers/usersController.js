const bcrypt = require('bcrypt');

const {cadastroUsuario, buscarUmUsuario, listaDeUsuarios, excluirUsuario, atualizarUsuario} = require('../models/usuariosModel');

const usersController = {
  base: (req, res) => {
    const usuarios = listaDeUsuarios();

    res.json(usuarios)
  },
  buscarUmUsuario: (req, res) => {
    const {idDoUsuario} = req.params;
    const usuario = buscarUmUsuario(idDoUsuario);

    res.json(usuario)
  },
  formularioCadastro: (req, res) => {
    res.send('Envie no método POST os dados do cadastro')
  },
  cadastrar: (req, res) => {
    const novoUsuario = req.body;
    novoUsuario.senha = bcrypt.hashSync(req.body.senha, 12);
    novoUsuario.nivel = 1;

    const usuarioCadastrado = cadastroUsuario(novoUsuario);
    res.json(usuarioCadastrado);
  },
  atualizar: (req, res) => {
    const objetoDoUsuario = req.body;
    const { idDoUsuario } = req.params;

    if (objetoDoUsuario.senha) {
      objetoDoUsuario.senha = bcrypt.hashSync(req.body.senha, 12);
    }

    if (objetoDoUsuario.nivel) {
      objetoDoUsuario.nivel = undefined;
    }

    atualizarUsuario(idDoUsuario, objetoDoUsuario);
    return res.json(`Usuário com id ${idDoUsuario} atualizado com sucesso`);
  },
  delete: (req, res) => {
    const {idDoUsuario} = req.params;
    excluirUsuario(idDoUsuario);
    return res.json('usuário com id '+ idDoUsuario +' excluído com sucesso')
  }
};

module.exports = usersController;
