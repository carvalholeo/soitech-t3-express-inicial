const usersController = {
  base: (req, res) => {
    res.send('Este é um usuário')
  },
  formularioCadastro: (req, res) => {
    res.send('Envie no método POST os dados do cadastro')
  },
  cadastrar: (req, res) => {
    res.send('recebido')
  }
};

module.exports = usersController;
