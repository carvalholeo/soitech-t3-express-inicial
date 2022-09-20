const { Router } = require('express');

const userRoutes = require('./users');

const route = Router();

route.get('/contato', function(req, res) {
  res.send('Página de contato');
});

route.use('/users', userRoutes);

route.post('/:nomeVariavel', function(req, res) {
  console.log('query', req.query)
  console.log('body', req.body)
  console.log('headers', req.headers)
  res.send(`Informação que chegou na rota: ${req.params.nomeVariavel}`);
});


module.exports = route;
