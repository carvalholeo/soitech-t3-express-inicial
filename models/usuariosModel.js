const fs = require('fs');

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


module.exports = {
  cadastroUsuario,
  buscarUmUsuario,
  listaDeUsuarios,
  excluirUsuario
};