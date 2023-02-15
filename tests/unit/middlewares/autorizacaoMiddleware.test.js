const execSync = require('child_process').execSync;
const autorizacaoMiddleware = require("../../../src/middlewares/autorizacaoMiddleware");

// function up() {
  
// }

beforeAll(() => {
  execSync('npx sequelize-cli db:migrate');
  execSync('npx sequelize-cli db:seed:all');
});

beforeEach(() => {
  req = {
    conteudo: {
      id: 1,
      nivel_id: 1,
    },
    nivel: ["Administrador"],
    params: {},
  };
  res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  next = jest.fn();
});

afterAll(() => {
  execSync('npx sequelize-cli db:migrate:undo:all');
})

test("Deve verificar o nível de acesso do usuário e autorizar quando estiver no nível passado", async () => {
  await autorizacaoMiddleware(req, res, next);
  expect(next).toBeCalled();
});

test("Deve verificar o nível de acesso do usuário e não autorizar quando não estiver no nível passado", async () => {
  req.nivel = ["Técnico"];
  await autorizacaoMiddleware(req, res, next);
  expect(res.status).toBeCalledWith(403);
  expect(res.json).toBeCalledWith(
    "Usuário não tem permissão para acesso a essa informação."
  );
});

test("Deve verificar o nível de acesso do usuário e não autorizar quando não estiver no nível passado", async () => {
  req.nivel = ["Administrador"];
  req.conteudo.nivel_id = 2;
  await autorizacaoMiddleware(req, res, next);
  expect(res.status).toBeCalledWith(403);
  expect(res.json).toBeCalledWith(
    "Usuário não tem permissão para acesso a essa informação."
  );
});
