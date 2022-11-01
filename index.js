const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const routes = require('./routes/index');
const modoManutencao = require('./middlewares/modoManutencao');
const contadorDeAcessos = require('./middlewares/contadorDeAcessos');

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(modoManutencao);
app.use(contadorDeAcessos);

app.use(routes);

app.listen(process.env.PORTA || 8080, () => console.log('Express subiu o servidor'));
