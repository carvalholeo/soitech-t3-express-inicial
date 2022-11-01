const { Router } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userRoutes = require('./users');
const ordensDeServicosRoutes = require('./ordensDeServicos');
const clientesRoutes = require('./clientes');
const contatoController = require('../controllers/contatoController');

const {buscarUsuarioParaLogin} = require('../models/usuariosModel');

const route = Router();

route.get('/contato', contatoController.paginaContato);

route.use('/users', userRoutes);
route.use('/ordens-de-servico', ordensDeServicosRoutes);
route.use('/clientes', clientesRoutes);

route.post('/login', function (req, res) {
  const {usuario, senha} = req.body;
  const usuarioDB = buscarUsuarioParaLogin(usuario);

  if (typeof(usuarioDB) === "undefined") {
    return res.status(401).json('Usuário ou senha inválidos');
  }

  const senhaEstaValida = bcrypt.compareSync(senha, usuarioDB.senha);

  if (!senhaEstaValida) {
    return res.status(401).json('Usuário ou senha inválidos');
  }

  usuarioDB.senha = undefined;

  req.app.locals.estaLogado = true;
  req.app.locals.usuario = usuarioDB;

  const token = jwt.sign(usuarioDB, process.env.CHAVE_JWT, {
    expiresIn: '5 minutes'
  });

  return res.json({token})
})


module.exports = route;
