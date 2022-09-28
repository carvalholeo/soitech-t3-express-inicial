const { Router } = require('express');

const userRoutes = require('./users');
const contatoController = require('../controllers/contatoController');

const route = Router();

route.get('/contato', contatoController.paginaContato);

route.use('/users', userRoutes);


module.exports = route;
