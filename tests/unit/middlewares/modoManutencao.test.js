const modoManutencao = require('../../../src/middlewares/modoManutencao');

describe('Middleware modo de manutenção', () => {
  // let req;
  // let res;
  // let next;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn(() => {
        return res;
      }),
      json: jest.fn((value) => value),
    }
    next = jest.fn();
  });

  test('Retorna status 503 quando sistema está em manutenção', () => {
    process.env.ESTA_EM_MANUTENCAO = '1';
    modoManutencao(req, res, next);

    expect(res.status).toHaveBeenCalled();
    expect(res.status).toHaveReturned();
    expect(res.status.mock.lastCall).toContain(503);
    expect(res.json).toHaveBeenCalled();
    expect(res.json).toHaveReturned();
    expect(res.json).toHaveReturnedWith('Oops, sistema em manutenção. Vá ler um livro.');
  });

  test('Não retorna status 503 quando sistema não está em manutenção', () => {
    process.env.ESTA_EM_MANUTENCAO = 0;
    modoManutencao(req, res, next);

    expect(res.status).not.toHaveReturned();
    expect(res.json).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
})