let contador = 0;

function contadorDeAcessos(req, res, next) {
  contador++;
  console.log('Quantidade de acessos registrados', contador);
  next();
}

module.exports = contadorDeAcessos;
