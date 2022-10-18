const clienteController = {
  listarTodos: (req, res) => {
    res.json('Listando todos os clientes');
  },
  cliente: (req, res) => {
    res.json('Um cliente específico')
  },
  criarCliente: (req, res) => {
    res.json('cliente criado');
  },
  atualizarCliente: (req, res) => {
    res.json('cliente atualizado');
  },
  apagarCliente: (req, res) => {
    res.json('cliente excluído');
  }
}

module.exports = clienteController;
