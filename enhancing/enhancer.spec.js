const enhancer = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
  test('Should run tests withoutfailing', () => {
    expect(false).toBeFalsy();
  });
});

describe('repair()', () => {
  test('Should restore durability to 100', () => {
    const { repair } = enhancer;
    const obj = {
      name: 'Bob',
      durability: 50,
      enhancement: 0,
    };
    const newObj = repair(obj);

    expect(newObj.durability).toBe(100);
  });
});

describe('succeed()', () => {
  test('Should increase enhancement level by 1', () => {
    const { succeed } = enhancer;

    const obj = {
      name: 'Bob',
      durability: 50,
      enhancement: 0,
    };

    const newObj = succeed(obj);

    expect(newObj.enhancement).toBe(1);
  });
  test('Should not change enhancement level if at level 20', () => {
    const { succeed } = enhancer;

    const obj = {
      name: 'Bob',
      durability: 50,
      enhancement: 20,
    };

    const newObj = succeed(obj);

    expect(newObj.enhancement).toBe(20);
  });
  test('Should not change durability of object', () => {
    const { succeed } = enhancer;

    const obj = {
      name: 'Bob',
      durability: 50,
      enhancemennt: 20,
    };

    const newObj = succeed(obj);

    expect(newObj.durability).toBe(50);
  });
});

describe('fail()', () => {
  test('If enhancement is < 15, durability decreases by 5', () => {
    const { fail } = enhancer;

    const obj = {
      name: 'Bob',
      durability: 50,
      enhancement: 14,
    };

    const newObj = fail(obj);

    expect(newObj.durability).toBe(45);
  });
  test('If enhancement is >= 15, durability is decreased by 10', () => {
    const { fail } = enhancer;

    const obj = {
      name: 'Bob',
      durability: 50,
      enhancement: 15,
    };

    const newObj = fail(obj);

    expect(newObj.durability).toBe(40);
  });
  test('if enhancement is > 16, enhancement decreases by 1', () => {
    const { fail } = enhancer;

    const obj = {
      name: 'Bob',
      durability: 50,
      enhancement: 17,
    };

    const newObj = fail(obj);

    expect(newObj.enhancement).toBe(16);
  });
});
