const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe("Test time", () => {
  test("00:00", () => {
    expect(timeWord('24:00').toEqual('midnight'))
  });
})