const express = require('express');

const routes = require('./routes/index');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(function(req, res, next){
  console.log('Sistema ativado com sucesso');
  next();
});

const estaDeslogado = true;

app.use((req, res, next) => {
  if (estaDeslogado) {
    return res.json('Este usuário não fez login no sistema');
  }
  next();
});

// Criar uma constante para identificar se o sistema está ou não em manutenção
// Criar um middleware global que verifica essa constante
// Cortar a requisição se o sistema estiver em manutenção
// Avançar a requisição caso o sistema esteja operante

app.use(routes);

app.listen(8080, () => console.log('Express subiu o servidor'));