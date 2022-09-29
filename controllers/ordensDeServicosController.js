const ordensDeServicosController = {
  base: (req, res) => {
    return res.json({mensagem: 'Esta é uma ordem de serviço'});
  },
  cadastrar: (req, res) => {
    return res.json({mensagem: 'ordem de serviço cadastrada'})
  },
  atualizar: (req, res) => {
    return res.json({mensagem: 'ordem de serviço atualizada'});
  },
  delete: (req, res) => {
    return res.json({mensagem: "Ordem de serviço excluída"});
  }
}

module.exports = ordensDeServicosController;

// export default ordensDeServicosController;
