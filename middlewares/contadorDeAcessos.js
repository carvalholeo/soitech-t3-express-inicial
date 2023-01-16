let contador = 0;

function contadorDeAcessos(req, res, next) {
  try {
    contador++;


    console.log('Quantidade de acessos registrados', contador);
    next();
  } catch (e) {
    console.error(e);
    next();
  }
}

module.exports = contadorDeAcessos;
