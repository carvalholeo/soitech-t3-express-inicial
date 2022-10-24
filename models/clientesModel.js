const fs = require('fs');

function listarClientes() {
  try {
    const clientesArquivo = fs.readFileSync(__dirname + '/clientes.json', { encoding: 'utf-8' });
    const clientesJson = JSON.parse(clientesArquivo);
    const clientes = clientesJson.clientes;

    return clientes;
  } catch (error) {
    console.trace(error)
  }
}

module.exports = {
  listarClientes,
}