/* eslint-disable no-console */
let contador = 0;

function contadorDeAcessos(req, res, next) {
  try {
    // eslint-disable-next-line no-plusplus
    contador++;
    console.log('Quantidade de acessos registrados', contador);
  } catch (e) {
    console.error(e);
  } finally {
    next();
  }
}

module.exports = contadorDeAcessos;
