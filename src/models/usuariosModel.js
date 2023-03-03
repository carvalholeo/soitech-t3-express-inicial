const { Usuario } = require('../database/repository');

/**
 * Método de cadastro de usuários no sistema
 * @param {JSON} objetoDeCadastro Objeto contendo nome, email, CPF, telefone,
 * usuário, data de nascimento e senha
 * @return {JSON} Objeto enviado anteriormente, mas com id do banco de dados
 */
async function cadastroUsuario(objetoDeCadastro) {
  try {
    const {
      nome, email, senha, cpf, telefone, usuario, dataNascimento,
    } = objetoDeCadastro;

    const novoUsuario = await Usuario.create({
      nome,
      email,
      senha,
      cpf,
      telefone,
      usuario,
      dataNascimento,
      nivel_id: 1,
      estaAtivo: true,
    });

    novoUsuario.senha = undefined;

    return novoUsuario;
  } catch (error) {
    if (error?.original?.code === 'ER_NO_REFERENCED_ROW_2') {
      throw new RangeError('Nível de usuário não existe');
    }
    throw new Error('Erro ao cadastrar usuário');
  }
}

async function buscarUmUsuario(id) {
  try {
    const usuario = await Usuario.findOne({
      where: { id },
      include: {
        association: 'usuario_permissao',
      },
    });

    return usuario;
  } catch (error) {
    return error;
  }
}

async function listaDeUsuarios() {
  try {
    const usuarios = await Usuario.findAll();

    return usuarios;
  } catch (error) {
    return error;
  }
}

async function excluirUsuario(id) {
  try {
    return await Usuario.destroy({ where: { id } });
  } catch (error) {
    return error;
  }
}

async function atualizarUsuario(id, objeto) {
  try {
    return await Usuario.update(objeto, { where: { id } });
  } catch (error) {
    return error;
  }
}

async function buscarUsuarioParaLogin(usuario) {
  try {
    const usuarioUnico = await Usuario.findOne({
      where: {
        usuario,
      },
    });

    return usuarioUnico;
  } catch (error) {
    return error;
  }
}

module.exports = {
  cadastroUsuario,
  buscarUmUsuario,
  listaDeUsuarios,
  excluirUsuario,
  atualizarUsuario,
  buscarUsuarioParaLogin,
};
