const express = require('express');

const app = express();

app.get('/contato', function(req, res) {
  res.send('Página de contato');
});

app.get('/sobre-nos', (req, res) => {
  res.send('Este é uma tela de informações')
})

app.listen(8080, () => console.log('Express subiu o servidor'));