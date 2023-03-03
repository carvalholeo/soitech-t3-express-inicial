const { Servico } = require('../database/repository');

async function cadastrarServico(objetoDeCadastro) {
  try {
    const {
      descricao,
      valor,
      prazo_execucao: prazoExecucao,
    } = objetoDeCadastro;

    const novoServico = await Servico.create({
      descricao,
      valor,
      prazo_execucao: prazoExecucao,
    });

    return novoServico;
  } catch (error) {
    throw new Error('Erro ao cadastrar serviço');
  }
}

async function buscarUmServico(id) {
  try {
    const servico = await Servico.findOne({
      where: { id },
      include: [
        'servicos_ordens',
      ],
    });

    return servico;
  } catch (error) {
    return error;
  }
}

async function listarServicos() {
  try {
    const servicos = await Servico.findAll({
      include: [
        'servicos_ordens',
      ],
    });

    return servicos;
  } catch (error) {
    return error;
  }
}

async function excluirServico(id) {
  try {
    return await Servico.destroy({ where: { id } });
  } catch (error) {
    return error;
  }
}

async function atualizarServico(id, objeto) {
  try {
    return await Servico.update(objeto, { where: { id } });
  } catch (error) {
    return error;
  }
}

module.exports = {
  listarServicos,
  cadastrarServico,
  buscarUmServico,
  excluirServico,
  atualizarServico,
};
