const request = require('supertest');

const doMigrate = require('../../global/doMigrate');
const doSeed = require('../../global/doSeed');
const undoMigrate = require('../../global/undoMigrate');
const app = require('../../../src/index');

beforeAll(() => {
  doMigrate();
  doSeed();
});

afterAll(() => {
  undoMigrate();
});

describe('Dado um usuário', () => {
  test('o cadastro deve ser efetuado com sucesso', (done) => {
    const user = {
      "usuario": "sabio_do_rio",
      "senha": "MinhaSenha#@2022",
      "email": "joivadddsadsd@sants.com",
      "telefone": "+55 91 999998888",
      "cpf": "05061724062",
      "dataNascimento": "1990/12/25",
      "nome": "Josivaldo"
    };

    request(app)
      .post('/users')
      .send(user)
      .expect(200)
      .end((error, response) => {
        if (error) {
          done(error);
        }

        done();
      });
  });

  test('o login deve ser efetuado com sucesso', (done) => {
    const user = {
      "usuario": "sabio_do_rio",
      "senha": "MinhaSenha#@2022"
    };
    request(app)
      .post('/login')
      .send(user)
      .expect(200)
      .end((error, response) => {
        if (error) {
          done(error);
        }

        expect(response.body).toHaveProperty('token');

        done();
      })
  })
});