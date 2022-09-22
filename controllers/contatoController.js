const contatoController = {
  paginaContato: function(req, res) {
    res.send('Página de contato no arquivo do controller');
  },
  rotaVariavel: (req, res) => {
    console.log('query', req.query)
    console.log('body', req.body)
    console.log('headers', req.headers)
    res.send(`Informação que chegou no controller: ${req.params.nomeVariavel}`);
  }
};

module.exports = contatoController;
