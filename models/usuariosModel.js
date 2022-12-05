const { Usuario } = require('../database/repository');


/**
 * Método de cadastro de usuários no sistema
 * @param {JSON} objetoDeCadastro Objeto contendo nome, email, CPF, telefone, usuário, data de nascimento e senha
 * @return {JSON} Objeto enviado anteriormente, mas com id do banco de dados
 */
async function cadastroUsuario(objetoDeCadastro) {
  try {
    const { nome, email, senha, cpf, telefone, usuario, dataNascimento } = objetoDeCadastro;

   const novoUsuario =  await Usuario.create({
      nome: nome,
      email: email,
      senha: senha,
      cpf: cpf,
      telefone: telefone,
      usuario: usuario,
      dataNascimento: dataNascimento,
      nivel_id: 1,
      estaAtivo: true
    });

    novoUsuario.senha = undefined;

    return novoUsuario;
  } catch (error) {
    console.trace(error)
    return error;
  }
}

async function buscarUmUsuario(id) {
  try {
    const usuario = await Usuario.findOne({
      where: {id: id},
      include: 'usuario_permissao'
    });

    return usuario;
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function listaDeUsuarios() {
  try {
    const usuarios = await Usuario.findAll();

    return usuarios
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function excluirUsuario(id) {
  try {
    await Usuario.destroy({where: { id: id }});
  } catch (error) {
    console.trace(error);
    return error;
  }
}

async function atualizarUsuario(id, objeto) {
  try {
    await Usuario.update(objeto, { where: { id }});
   } catch (error) {
    console.trace(error);
  }
}

async function buscarUsuarioParaLogin(usuario) {
  try {
    const usuarioUnico = await Usuario.findOne({
      where: {
        usuario: usuario
      }
    });

    return usuarioUnico;
  } catch (error) {
    console.trace(error);
  }
}


module.exports = {
  cadastroUsuario,
  buscarUmUsuario,
  listaDeUsuarios,
  excluirUsuario,
  atualizarUsuario,
  buscarUsuarioParaLogin
};