const {cadastroUsuario, buscarUmUsuario} = require('../models/usuariosModel');

const usersController = {
  base: (req, res) => {
    const {idDoUsuario} = req.params;
    const usuario = buscarUmUsuario(idDoUsuario);

    res.json(usuario)
  },
  formularioCadastro: (req, res) => {
    res.send('Envie no método POST os dados do cadastro')
  },
  cadastrar: (req, res) => {
    cadastroUsuario(req.body);
    res.send('recebido')
  },
  atualizar: (req, res) => {
    return res.send('OK atualizou usuários');
  },
  delete: (req, res) => {
    return res.send('usuário excluído com sucesso')
  }
};

module.exports = usersController;
