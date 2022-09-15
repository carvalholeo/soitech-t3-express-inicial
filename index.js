const express = require('express');

const routes = require('./routes/index');

const app = express();

app.use(routes);

app.listen(8080, () => console.log('Express subiu o servidor'));