const dotenv = require('dotenv');
dotenv.config();

const {
  DB_DIALETO='mysql',
  DB_PORTA=3306,
  DB_SERVIDOR='127.0.0.1',
  DB_USUARIO='root',
  DB_SENHA=null,
  DB_BANCO_DE_DADOS='easy_system'
} = process.env

module.exports = {
  "development": {
    "username": DB_USUARIO,
    "password": DB_SENHA,
    "database": DB_BANCO_DE_DADOS,
    "host": DB_SERVIDOR,
    "dialect": DB_DIALETO,
    "port": +DB_PORTA
  },
  "test": {
    "username": DB_USUARIO,
    "password": DB_SENHA,
    "database": DB_BANCO_DE_DADOS,
    "host": DB_SERVIDOR,
    "dialect": DB_DIALETO,
    "port": +DB_PORTA
  },
  "production": {
    "username": DB_USUARIO,
    "password": DB_SENHA,
    "database": DB_BANCO_DE_DADOS,
    "host": DB_SERVIDOR,
    "dialect": DB_DIALETO,
    "port": +DB_PORTA
  }
}
