const { expect } = require("@jest/globals");
const narcissistic = require("./narcissisticNumber");

describe("Narcissistic Function", function () {
  it("should find small numbers are all narcissistic", function () {
    expect(narcissistic(7)).toBeTruthy();
  });

  it("should find these numbers are narcissistic", function () {
    expect(narcissistic(371)).toBeTruthy();
  });
});
