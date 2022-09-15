const { Router } = require('express');

const userRoutes = require('./users');

const route = Router();

route.get('/contato', function(req, res) {
  res.send('Página de contato');
});

route.use('/users', userRoutes);

route.get('/:nomeVariavel', function(req, res) {
  console.log(req.query)
  res.send(`Informação que chegou na rota: ${req.params.nomeVariavel}`);
});


module.exports = route;
