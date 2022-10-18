const { Router } = require('express');

const userRoutes = require('./users');
const ordensDeServicosRoutes = require('./ordensDeServicos');
const clientesRoutes = require('./clientes');
const contatoController = require('../controllers/contatoController');

const route = Router();

route.get('/contato', contatoController.paginaContato);

route.use('/users', userRoutes);
route.use('/ordens-de-servico', ordensDeServicosRoutes);
route.use('/clientes', clientesRoutes);


module.exports = route;
