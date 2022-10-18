const fs = require('fs');

// pegar o arquivo contagemAtual.txt - OK
// adicionar + 1 ao valor atual
// salvar o arquivo contagemAtual.txt


function contadorDeAcessos(req, res, next) {
  try {
    const arquivo = fs.readFileSync(__dirname + '/contagemAtual.txt', { encoding: 'utf8' });

    let contador = parseInt(arquivo);
    contador++;

    fs.writeFileSync(__dirname + '/contagemAtual.txt', String(contador));

    console.log('Quantidade de acessos registrados', contador);
    next();
  } catch (e) {
    console.error(e);
    next();
  }
}

module.exports = contadorDeAcessos;
