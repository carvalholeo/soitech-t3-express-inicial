const { Router } = require('express');

const userRoutes = require('./users');
const ordensDeServicosRoutes = require('./ordensDeServicos');
const clientesRoutes = require('./clientes');
const loginRoutes = require('./login');
const servicosRoutes = require('./servicos');

const contatoController = require('../controllers/contatoController');


const route = Router();

route.get('/contato', contatoController.paginaContato);

route.use('/users', userRoutes)
  .use('/ordens-de-servico', ordensDeServicosRoutes)
  .use('/clientes', clientesRoutes)
  .use('/login', loginRoutes)
  .use('/servicos', servicosRoutes);


module.exports = route;
