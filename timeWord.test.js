const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe("Test time", () => {
  test("test midnight", () => {
    expect(timeWord('00:00')).toEqual('midnight');
    expect(timeWord('24:00')).toEqual('midnight');
  })

  test("test teens", () => {
    expect(timeWord('13:13')).toEqual('one thirteen pm');
    expect(timeWord('16:17')).toEqual('four seventeen pm');
  })

  test("test o'clocks", () => {
    expect(timeWord('13:00')).toEqual("one o'clock pm");
    expect(timeWord('10:00')).toEqual("ten o'clock am");
    expect(timeWord('23:00')).toEqual("eleven o'clock pm");
  })

  test("test minutes by 10s", () => {
    expect(timeWord('13:20')).toEqual("one twenty pm");
    expect(timeWord('10:30')).toEqual("ten thirty am");
    expect(timeWord('23:50')).toEqual("eleven fifty pm");
  })

  test("test minute less than 10", () => {
    expect(timeWord('13:02')).toEqual("one oh two pm");
    expect(timeWord('10:03')).toEqual("ten oh three am");
    expect(timeWord('23:05')).toEqual("eleven oh five pm");
  })

  test("test non-zero minutes", () => {
    expect(timeWord('13:22')).toEqual("one twenty two pm");
    expect(timeWord('10:53')).toEqual("ten fifty three am");
    expect(timeWord('23:35')).toEqual("eleven thirty five pm");
  })

});

