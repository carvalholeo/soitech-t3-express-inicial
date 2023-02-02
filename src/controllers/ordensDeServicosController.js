const {
  listarOrdens,
  cadastrarOrdem,
  buscarUmaOrdem,
  excluirOrdem,
  atualizarOrdem,
} = require('../models/ordensDeServicosModel');

const ordensDeServicosController = {
  base: async (req, res) => {
    const ordens = await listarOrdens();
    return res.json({ordens});
  },
  cadastrar: async (req, res) => {
    const ordem = req.body;
    const ordemCadastrada = await cadastrarOrdem(ordem);
    return res.json({mensagem: ordemCadastrada})
  },
  atualizar: async (req, res) => {
    const { id } = req.params;
    const objeto = req.body;
    await atualizarOrdem(id, objeto);
    return res.json({mensagem: 'ordem de serviço atualizada'});
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await excluirOrdem(id);
    return res.json({mensagem: "Ordem de serviço excluída"});
  },
  buscar: async (req, res) => {
    const { id } = req.params;
    const ordem = await buscarUmaOrdem(id);
    return res.json({ordem});
  }
}

module.exports = ordensDeServicosController;
