const { Cliente } = require('../database/repository');

async function cadastrarCliente(objetoDeCadastro) {
  try {
    const { nome, documento, dataNascimento } = objetoDeCadastro;

    const novoCliente = await Cliente.create({
      nome,
      documento,
      dataNascimento,
    });

    return novoCliente;
  } catch (error) {
    throw new Error('Erro ao cadastrar cliente');
  }
}

async function buscarUmCliente(id) {
  try {
    const cliente = await Cliente.findOne({
      where: { id },
      include: {
        association: 'clientes_ordensdeservico',
      },
    });

    return cliente;
  } catch (error) {
    return error;
  }
}

async function listarClientes() {
  try {
    const clientes = await Cliente.findAll();

    return clientes;
  } catch (error) {
    return error;
  }
}

async function excluirCliente(id) {
  try {
    return await Cliente.destroy({ where: { id } });
  } catch (error) {
    return error;
  }
}

async function atualizarCliente(id, objeto) {
  try {
    return await Cliente.update(objeto, { where: { id } });
  } catch (error) {
    return error;
  }
}

module.exports = {
  listarClientes,
  cadastrarCliente,
  buscarUmCliente,
  excluirCliente,
  atualizarCliente,
};
