const fs = require('fs');

const contatoController = {
  paginaContato(_, res) {
    try {
      fs.writeFileSync(
        `${__dirname}/arquivoGrande2.txt`,
        '\narquivo gerado com sucesso',
        { flag: 'as' },
      );
      res.json('página');
    } catch (e) {
      res.status(500).json('Erro ao ler o arquivo');
    }
  },
};

module.exports = contatoController;
