const naturalMultiples = require('./naturalMultiples');

function testOutput(n, expected) {
  let actual = naturalMultiples(n);
  expect(actual === expected).toBe(true);
}

test('basic tests', function () {
  testOutput(10, 23);
  testOutput(0, 0);
  testOutput(1, 0);
  testOutput(2, 0);
  testOutput(4, 3);
  testOutput(5, 3);
  testOutput(14, 45);
  testOutput(17, 60);
  testOutput(18, 60);
  testOutput(21, 98);
  testOutput(22, 119);
  testOutput(24, 119);
  testOutput(25, 143);
  testOutput(26, 168);
  testOutput(28, 195);
  testOutput(29, 195);
  testOutput(30, 195);
  testOutput(32, 225);
  testOutput(33, 225);
  testOutput(38, 329);
  testOutput(39, 329);
});
