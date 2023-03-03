const crypto = require('crypto');
const Sequelize = require('sequelize');

const { OrdensDeServico, ChamadoEOrdem } = require('../database/repository');

async function cadastrarOrdem(objetoDeCadastro) {
  try {
    const {
      data_abertura: dataAbertura,
      solicitacao,
      id_cliente: idCliente,
      id_cadastrante: idCadastrante,
      servicos,
    } = objetoDeCadastro;

    const tecnicos = await OrdensDeServico.findAll({
      include: [
        {
          association: 'ordensdeservicos_statusordens',
          where: {
            nome: {
              [Sequelize.Op.notIn]: ['Cancelado', 'Encerrado', 'Congelado'],
            },
          },
          attributes: [],
        },
        {
          association: 'ordensdeservico_tecnico',
          attributes: ['id', 'nome'],
          where: {
            estaAtivo: true,
          },
          include: [
            {
              association: 'usuario_permissao',
              where: {
                nome_permissao: 'Técnico',
              },
              attributes: [],
            },
          ],
        },
      ],
      attributes: [
        [Sequelize.fn('COUNT', Sequelize.col('id_tecnico')), 'ordens_por_tecnico'],
      ],
      group: ['id_tecnico'],
      having: Sequelize.literal('ordens_por_tecnico <= 3'),
    });

    const quantidadeMinima = tecnicos.length <= 1;
    const indice = quantidadeMinima
      ? tecnicos[0]?.ordensdeservico_tecnico?.id
      : crypto.randomInt(0, tecnicos.length - 1);
    const tecnicoSorteado = quantidadeMinima
      ? indice
      : tecnicos[indice]?.ordensdeservico_tecnico?.id;

    const novaOrdem = await OrdensDeServico.create({
      data_abertura: dataAbertura,
      solicitacao,
      id_tecnico: tecnicoSorteado,
      id_cliente: idCliente,
      id_cadastrante: idCadastrante,
      status_da_ordem: 1,
    });

    // eslint-disable-next-line no-restricted-syntax
    for await (const item of servicos) {
      await ChamadoEOrdem.create({
        id_ordem: novaOrdem.id,
        id_servico: item,
      });
    }

    return novaOrdem;
  } catch (error) {
    throw new Error('Erro ao cadastrar ordem');
  }
}

async function buscarUmaOrdem(id) {
  try {
    const ordem = await OrdensDeServico.findOne({
      where: { id },
      include: [
        'ordensdeservico_cadastrante',
        'ordensdeservico_clientes',
        'ordensdeservico_tecnico',
        'ordensdeservicos_statusordens',
        'ordens_servicos',
      ],
    });

    return ordem;
  } catch (error) {
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
        'ordens_servicos',
      ],
    });

    return ordens;
  } catch (error) {
    return error;
  }
}

async function excluirOrdem(id) {
  try {
    return await OrdensDeServico.destroy({ where: { id } });
  } catch (error) {
    return error;
  }
}

async function atualizarOrdem(id, objeto) {
  try {
    return await OrdensDeServico.update(objeto, { where: { id } });
  } catch (error) {
    return error;
  }
}

module.exports = {
  listarOrdens,
  cadastrarOrdem,
  buscarUmaOrdem,
  excluirOrdem,
  atualizarOrdem,
};
