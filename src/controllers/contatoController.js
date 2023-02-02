const fs = require('fs');

const contatoController = {
  paginaContato: function(req, res) {
    // fs.readFile(__dirname + '/arquivoGrande.txt', { encoding: 'utf-8' }, function (err, data) {
    //   if (err) {
    //     console.error(err);
    //     return res.status(500).json('Erro ao ler o arquivo');
    //   }
    //   res.json(data);
    // });

    try {
      const arquivo = fs.readFileSync(__dirname + '/arquivoGrande.txt',
      { encoding: 'utf-8' });

      fs.writeFileSync(__dirname + '/arquivoGrande2.txt',
      '\narquivo gerado com sucesso',
      { flag: 'as' });
      res.json('página');
    } catch (e) {
      console.error(e)
      res.status(500).json('Erro ao ler o arquivo');
    }

  },
};

module.exports = contatoController;
