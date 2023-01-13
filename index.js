const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const routes = require('./routes/index');
const modoManutencao = require('./middlewares/modoManutencao');
const contadorDeAcessos = require('./middlewares/contadorDeAcessos');

const app = express();

const mapa = new Map();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(modoManutencao);

app.use((req, res, next) => {
  req.mapa = mapa;

  next();
});

app.use((req, res, next) => {
  const {authorization = ''} = req.headers;
  const partes = authorization.split(token);
  const [, token] = partes;

  if (mapa.has(token)) {
    return res.status(401).json('Token inválido');
  }

  next();
});

app.use(contadorDeAcessos);

app.use(routes);

app.listen(process.env.PORTA || 8080, () => console.log('Express subiu o servidor'));
