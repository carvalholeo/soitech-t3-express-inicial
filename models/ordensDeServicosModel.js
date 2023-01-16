const { OrdensDeServico } = require("../database/repository");

async function cadastrarOrdem(objetoDeCadastro) {
  try {
    const {
      data_abertura,
      solicitacao,
      data_encerramento,
      id_tecnico,
      id_cliente,
      id_cadastrante,
      status_da_ordem,
    } = objetoDeCadastro;

    const novaOrdem = await OrdensDeServico.create({
      data_abertura,
      solicitacao,
      data_encerramento,
      id_tecnico,
      id_cliente,
      id_cadastrante,
      status_da_ordem,
    });

    return novaOrdem;
  } catch (error) {
    console.trace(error);
    throw new Error("Erro ao cadastrar ordem");
  }
}

async function buscarUmaOrdem(id) {
  try {
    const ordem = await OrdensDeServico.findOne({
      where: { id: id },
      include: [
        'ordensdeservico_cadastrante',
        'ordensdeservico_clientes',
        'ordensdeservico_tecnico',
        'ordensdeservicos_statusordens',
        'ordens_servicos'
      ]
    });

    return ordem;
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function listarOrdens() {
  try {
    const ordens = await OrdensDeServico.findAll({
      include: [
        'ordensdeservico_cadastrante',
        'ordensdeservico_clientes',
        'ordensdeservico_tecnico',
        'ordensdeservicos_statusordens',
        'ordens_servicos'
      ]
    });

    return ordens;
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function excluirOrdem(id) {
  try {
    await OrdensDeServico.destroy({ where: { id: id } });
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function atualizarOrdem(id, objeto) {
  try {
    await OrdensDeServico.update(objeto, { where: { id } });
  } catch (error) {
    console.trace(error);
  }
}

module.exports = {
  listarOrdens,
  cadastrarOrdem,
  buscarUmaOrdem,
  excluirOrdem,
  atualizarOrdem,
};
