const sum = require('./sum');

test('ao somar as strings 1 e 2, o retorno deve ser 3', () => {
  expect(sum('1', '2')).toBe(3);
});

test('soma 1 + 2 e deve retornar 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('soma 3 + 4 não deve retonar 2', () => {
  expect(sum(3, 4)).not.toBe(2);
});

test('somando 0 + 0, o retorno deve ser 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('ao chamar a função sem parâmetros, deve retornar NaN', () => {
  expect(sum()).toBeNaN();
});
