const autenticacaoMiddleware = require('../../../src/middlewares/autenticacaoMiddleware');

beforeEach(() => {
  req = {
    headers: {
      authorization: ''
    }
  };
  res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis()
  };
  next = jest.fn();
  jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywibm9tZSI6Ikpvc2l2YWxkbyIsImVtYWlsIjoiam9zaXZhbGRvQHNhbnRvcy5jb20iLCJjcGYiOiIxMzc0MzAzMzA1NCIsInRlbGVmb25lIjoiKzU1IDkxIDk5OTk5ODg4OCIsInVzdWFyaW8iOiJzYWJpb19kb19yaW8iLCJkYXRhTmFzY2ltZW50byI6IjE5OTAtMTItMjUiLCJlc3RhQXRpdm8iOnRydWUsIm5pdmVsX2lkIjoyLCJjcmVhdGVkQXQiOiIyMDIyLTExLTMwVDIzOjU5OjEyLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEyLTAxVDAwOjUwOjI2LjAwMFoiLCJpYXQiOjE2NzY1MDQ3NjJ9.4s0qqVbQeVh03iEj9YPHdJRusTupUuvGwRMrTPBOyWg';
});

test('Deve verificar se o token é válido e autorizar o acesso', async () => {
  req.headers.authorization = `Bearer ${jwt}`;
  autenticacaoMiddleware(req, res, next);
  expect(next).toHaveBeenCalled();
});

test('Deve verificar se o token é inválido e não autorizar o acesso', async () => {
  autenticacaoMiddleware(req, res, next);
  expect(res.status).toHaveBeenCalledWith(401);
  expect(res.json).toHaveBeenCalledWith('Nenhuma chave foi fornecida');
});

test('Deve verificar se o token é inválido e não autorizar o acesso', async () => {
  req.headers.authorization = `Bearer     ${jwt}`;
  autenticacaoMiddleware(req, res, next);
  expect(res.status).toHaveBeenCalledWith(401);
  expect(res.json).toHaveBeenCalledWith('Chave mal-formada');
});

test('Deve verificar se o token é inválido e não autorizar o acesso', async () => {
  req.headers.authorization = `Bea ${jwt}`;
  autenticacaoMiddleware(req, res, next);
  expect(res.status).toHaveBeenCalledWith(401);
  expect(res.json).toHaveBeenCalledWith('Chave mal-formada');
});

test('Deve verificar se o token é inválido e não autorizar o acesso', async () => {
  req.headers.authorization = `Bearer ${jwt}fhgsdvfhgvsdgh`;
  autenticacaoMiddleware(req, res, next);
  expect(res.status).toHaveBeenCalledWith(401);
  expect(res.json).toHaveBeenCalledWith('Chave inválida. Faça login novamente');
});

test('Deve verificar se o token é inválido e não autorizar o acesso', async () => {
  process.env.CHAVE_JWT = 'chave';
  req.headers.authorization = `Bearer ${jwt}`;
  autenticacaoMiddleware(req, res, next);
  expect(res.status).toHaveBeenCalledWith(401);
  expect(res.json).toHaveBeenCalledWith('Chave inválida. Faça login novamente');
});