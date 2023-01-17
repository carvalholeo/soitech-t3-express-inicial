const crypto = require("crypto");
const Sequelize = require("sequelize");

const { OrdensDeServico, ChamadoEOrdem, Usuario } = require("../database/repository");

async function cadastrarOrdem(objetoDeCadastro) {
  try {
    const {
      data_abertura,
      solicitacao,
      id_cliente,
      id_cadastrante,
      servicos
    } = objetoDeCadastro;

    const tecnicos = await Usuario.findAll({
      where: {
        estaAtivo: true,
      },
      include: [
        {
          association: 'usuario_permissao',
          where: {
            nome_permissao: 'Técnico'
          }
        },
      ],
      attributes: ['id'],
      raw: true
    });
    const indice = crypto.randomInt(0, tecnicos.length - 1);
    const tecnicoSorteado = tecnicos[indice];

    const novaOrdem = await OrdensDeServico.create({
      data_abertura,
      solicitacao,
      id_tecnico: tecnicoSorteado.id,
      id_cliente,
      id_cadastrante,
      status_da_ordem: 1,
    });

    for await (const item of servicos) {
      await ChamadoEOrdem.create({
        id_ordem: novaOrdem.id,
        id_servico: item
      });
    }

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
