const { Cliente } = require("../database/repository");

async function cadastrarCliente(objetoDeCadastro) {
  try {
    const { nome, documento, dataNascimento } =
      objetoDeCadastro;

    const novoCliente = await Cliente.create({
      nome,
      documento,
      dataNascimento,
    });

    return novoCliente;
  } catch (error) {
    console.trace(error);
    throw new Error('Erro ao cadastrar cliente');
  }
}

async function buscarUmCliente(id) {
  try {
    const cliente = await Cliente.findOne({
      where: { id: id },
      include: {
        association: "clientes_ordensdeservico",
      },
    });

    return cliente;
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function listarClientes() {
  try {
    const clientes = await Cliente.findAll();

    return clientes;
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function excluirCliente(id) {
  try {
    await Cliente.destroy({ where: { id: id } });
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function atualizarCliente(id, objeto) {
  try {
    await Cliente.update(objeto, { where: { id } });
  } catch (error) {
    console.trace(error);
  }
}

module.exports = {
  listarClientes,
  cadastrarCliente,
  buscarUmCliente,
  excluirCliente,
  atualizarCliente
}