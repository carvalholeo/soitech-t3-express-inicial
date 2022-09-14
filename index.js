// const http = require('http');

// const server = http.createServer(function(req, res) {

//   if (req.url === '/contato') {
//     return res.end('Texto da tela predileta de  contato')
//   }

//   if (req.url === '/sobre-nos') {
//     res.writeHead(200, {
//       "Content-Type": "text/html"
//     })
//     return res.end('<html><head><meta charset="UTF-8"> </head><body><p>Este é uma tela de informações</p><script>console.log("console de dentro do node para o navegador")</script></body></html>')
//   }

// });

// server.listen(8080, () => console.log('Servidor está ativo'));

const express = require('express');

const app = express();

app.get('/contato', function(req, res) {
  res.send('Página de contato');
});

app.get('/sobre-nos', (req, res) => {
  res.send('Este é uma tela de informações')
})

app.listen(8080, () => console.log('Express subiu o servidor'));