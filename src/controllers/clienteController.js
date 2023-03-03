const {
  listarClientes,
  cadastrarCliente,
  buscarUmCliente,
  excluirCliente,
  atualizarCliente,
} = require('../models/clientesModel');

const clienteController = {
  listarTodos: async (req, res) => {
    const todosOsClientes = await listarClientes();
    res.json(todosOsClientes);
  },
  cliente: async (req, res) => {
    const { id } = req.params;
    const cliente = await buscarUmCliente(id);
    res.json(cliente);
  },
  criarCliente: async (req, res) => {
    const novoCliente = req.body;
    await cadastrarCliente(novoCliente);
    res.json('cliente criado');
  },
  atualizarCliente: async (req, res) => {
    const { id } = req.params;
    const objeto = req.body;
    await atualizarCliente(id, objeto);
    res.json('cliente atualizado');
  },
  apagarCliente: async (req, res) => {
    const { id } = req.params;
    await excluirCliente(id);
    res.json('cliente excluído');
  },
};

module.exports = clienteController;
