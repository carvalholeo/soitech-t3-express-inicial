const insereNivel = require('../../../src/middlewares/insereNivelMiddleware');


beforeEach(() => {
  req = {};
  res = {};
  next = jest.fn();
  arrayDePermissoes = [
    'Administrador',
    'Técnico',
    'Usuário'
  ];
});

test('Deve inserir um array de niveis dentro da requisição', () => {
  insereNivel(arrayDePermissoes)(req, res, next);
  expect(req.nivel).toEqual(arrayDePermissoes);
  expect(next).toHaveBeenCalled();
});

test('Deve retornar uma função para ser executada', () => {
  const middleware = insereNivel(arrayDePermissoes);
  expect(typeof middleware).toBe('function');
});

test('Deve retornar uma função que recebe 3 parâmetros', () => {
  const middleware = insereNivel(arrayDePermissoes);
  expect(middleware.length).toBe(3);
});

test('Deve retornar uma função e essa função deve chamar next', () => {
  const middleware = insereNivel(arrayDePermissoes);
  middleware(req, res, next);
  expect(next).toHaveBeenCalled();
});