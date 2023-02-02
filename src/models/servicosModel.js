const { Servico } = require("../database/repository");

async function cadastrarServico(objetoDeCadastro) {
  try {
    const {
      descricao,
      valor,
      prazo_execucao
    } = objetoDeCadastro;

    const novoServico = await Servico.create({
      descricao,
      valor,
      prazo_execucao
    });

    return novoServico;
  } catch (error) {
    console.trace(error);
    throw new Error("Erro ao cadastrar serviço");
  }
}

async function buscarUmServico(id) {
  try {
    const servico = await Servico.findOne({
      where: { id: id },
      include: [
        'servicos_ordens'
      ]
    });

    return servico;
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function listarServicos() {
  try {
    const servicos = await Servico.findAll({
      include: [
        'servicos_ordens'
      ]
    });

    return servicos;
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function excluirServico(id) {
  try {
    await Servico.destroy({ where: { id: id } });
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function atualizarServico(id, objeto) {
  try {
    await Servico.update(objeto, { where: { id } });
  } catch (error) {
    console.trace(error);
  }
}

module.exports = {
  listarServicos,
  cadastrarServico,
  buscarUmServico,
  excluirServico,
  atualizarServico,
};
