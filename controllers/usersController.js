const usersController = {
  base: (req, res) => {
    res.send('Este é um usuário')
  },
  formularioCadastro: (req, res) => {
    res.send('Envie no método POST os dados do cadastro')
  },
  cadastrar: (req, res) => {
    console.log(req.body)
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
