const fs = require('fs');

/**
 * Método de cadastro de usuários no sistema
 * @param {JSON} objetoDeCadastro Objeto contendo nome, email, CPF, telefone, usuário, data de nascimento e senha
 * @return {JSON} Objeto enviado anteriormente, mas com id do banco de dados
 */
function cadastroUsuario(objetoDeCadastro) {
  try {
    const { nome, email, senha, cpf, telefone, usuario, dataNascimento } = objetoDeCadastro;

    const arquivoDeUsuarios = fs.readFileSync(__dirname + '/usuarios.json', {
      encoding: 'utf-8',
      flag: 'r'
    });

    const usuariosJson = JSON.parse(arquivoDeUsuarios);
    const { usuarios = [] } = usuariosJson;
    const id = usuarios.length + 1;

    const novoUsuario = {
      id,
      nome,
      email,
      senha,
      cpf,
      telefone,
      usuario,
      dataNascimento
    };

    usuarios.push(novoUsuario);
    usuariosJson.usuarios = usuarios;
    fs.writeFileSync(__dirname + '/usuarios.json', JSON.stringify(usuariosJson));

    return novoUsuario;
  } catch (error) {
    console.trace(error)
    return error;
  }
}

function buscarUmUsuario(id) {
  try {
    const usuariosJson = fs.readFileSync(__dirname + '/usuarios.json', {encoding: 'utf-8'});
    const usuarios = JSON.parse(usuariosJson).usuarios;

    const usuario = usuarios.find(user => user.id === Number(id));

    // let meuUsuario = {};
    // for (let index = 0; index <= usuarios.length; i++) {
    //   if (usuarios[i].id === id) {
    //     meuUsuario = usuarios[i];
    //     break;
    //   }
    // }

    return usuario;
  } catch (error) {
    console.trace(error);
    return error;
  }
}

function listaDeUsuarios() {
  try {
    const usuariosJson = fs.readFileSync(__dirname + '/usuarios.json', { encoding: 'utf8' });
    const usuarios = JSON.parse(usuariosJson).usuarios;

    return usuarios
  } catch (error) {
    console.trace(error);
    return error;
  }
}

function excluirUsuario(id) {
  try {
    const usuariosJson = fs.readFileSync(__dirname + '/usuarios.json', {encoding: 'utf-8'})
    const usuariosParse = JSON.parse(usuariosJson);
    const usuarios = usuariosParse.usuarios;

    const dadosFiltrados = usuarios.filter(user => user.id !== Number(id));

    usuariosParse.usuarios = dadosFiltrados;

    fs.writeFileSync(__dirname + '/usuarios.json', JSON.stringify(usuariosParse));
  } catch (error) {
    console.trace(error);
    return error;
  }
}

function atualizarUsuario(id, objeto) {
  try {
    const usuariosArquivo = fs.readFileSync(__dirname + '/usuarios.json', { encoding: 'utf-8' });
    const usuariosJson = JSON.parse(usuariosArquivo);
    const usuarios = usuariosJson.usuarios;
    // let usuario = {};

    // for (let index = 0; index < usuarios.length; index++) {
    //   let usuario = usuarios[index];
    //   if (usuario.id === Number(id)) {
    //     usuario = {
    //       ...usuario,
    //       ...objeto,
    //     }
    //     usuarios[index] = usuario;
    //     break;
    //   }
    // }

    usuarios.forEach((usuario, index) => {
      if (usuario.id === Number(id)) {
        usuario = {
          ...usuario,
          ...objeto
        };
        usuarios[index] = usuario;
        return;
      }
    });

    usuariosJson.usuarios = usuarios;
    fs.writeFileSync(__dirname + '/usuarios.json', JSON.stringify(usuariosJson));
   } catch (error) {
    console.trace(error);
  }
}

function buscarUsuarioParaLogin(usuario) {
  try {
    const usuariosArquivo = fs.readFileSync(__dirname + '/usuarios.json', { encoding: 'utf-8' });
    const usuariosJson = JSON.parse(usuariosArquivo);
    const usuarios = usuariosJson.usuarios;

    const usuarioUnico = usuarios.find(obj => obj.usuario === usuario);

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