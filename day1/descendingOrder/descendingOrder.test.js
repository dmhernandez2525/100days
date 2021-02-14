const { test, expect } = require("@jest/globals");
const descendingOrder = require("./descendingOrder");

test("Works with 0", () => {
  expect(descendingOrder(0)).toEqual(0);
});
test("Works with 1", () => {
  expect(descendingOrder(1)).toEqual(1);
});
test("Works with 123456789", () => {
  expect(descendingOrder(123456789)).toEqual(987654321);
});
