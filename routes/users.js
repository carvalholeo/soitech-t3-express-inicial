const { Router } = require('express');

const route = Router();

route.get('/', (req, res) => {
  res.send('Este é um usuário')
});

route.get('/cadastro', (req, res) => {
  res.send('Envie no método POST os dados do cadastro')
});

route.post('/cadastro', (req, res) => {
  res.send('recebido')
});

module.exports = route;
