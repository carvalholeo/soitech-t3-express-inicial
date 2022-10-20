const {cadastroUsuario, buscarUmUsuario, listaDeUsuarios, excluirUsuario} = require('../models/usuariosModel');

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
    const novoUsuario = cadastroUsuario(req.body);
    res.json(novoUsuario);
  },
  atualizar: (req, res) => {
    return res.send('OK atualizou usuários');
  },
  delete: (req, res) => {
    const {idDoUsuario} = req.params;
    excluirUsuario(idDoUsuario);
    return res.json('usuário com id '+ idDoUsuario +' excluído com sucesso')
  }
};

module.exports = usersController;
