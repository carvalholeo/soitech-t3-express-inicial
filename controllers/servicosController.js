const {
  listarServicos,
  cadastrarServico,
  buscarUmServico,
  excluirServico,
  atualizarServico,
} = require('../models/servicosModel');

const servicosController = {
  base: async (req, res) => {
    const ordens = await listarServicos();
    return res.json({ordens});
  },
  cadastrar: async (req, res) => {
    const ordem = req.body;
    await cadastrarServico(ordem);
    return res.json({mensagem: 'ordem de serviço cadastrada'})
  },
  atualizar: async (req, res) => {
    const { id } = req.params;
    const objeto = req.body;
    await atualizarServico(id, objeto);
    return res.json({mensagem: 'ordem de serviço atualizada'});
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await excluirServico(id);
    return res.json({mensagem: "Ordem de serviço excluída"});
  },
  buscar: async (req, res) => {
    const { id } = req.params;
    const ordem = await buscarUmServico(id);
    return res.json({ordem});
  }
}

module.exports = servicosController;
