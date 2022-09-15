const { Router } = require('express');

const userRoutes = require('./users');

const route = Router();

route.get('/contato', function(req, res) {
  res.send('Página de contato');
});

route.use('/users', userRoutes)



module.exports = route;
