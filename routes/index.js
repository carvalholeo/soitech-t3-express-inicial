const { Router } = require('express');

const userRoutes = require('./users');
const ordensDeServicosRoutes = require('./ordensDeServicos');
const clientesRoutes = require('./clientes');
const loginRoutes = require('./login');

const contatoController = require('../controllers/contatoController');


const route = Router();

route.get('/contato', contatoController.paginaContato);

route.use('/users', userRoutes);
route.use('/ordens-de-servico', ordensDeServicosRoutes);
route.use('/clientes', clientesRoutes);
route.use('/login', loginRoutes);


module.exports = route;
