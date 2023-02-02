const contadorDeAcessos = require('../../../src/middlewares/contadorDeAcessos');

describe('Middleware contador de acessos', () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {};
    res = {};
    next = jest.fn();
  });

  test('Executa contador de acessos', () => {
    contadorDeAcessos(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
