const app = require('./index');

app.listen(process.env.PORTA || 8080, () => console.log('Express subiu o servidor'));