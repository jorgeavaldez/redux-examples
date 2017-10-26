/**
 * actions.test.js
 * - Action class
 */

import Action from './action';

describe('Action class', async () => {
  const exampleType = 'toilet_type';
  const examplePayload = {
    dump: 'poo'
  };

  test('the Action class constructor works correctly', async () => {
    const foo = new Action(exampleType, examplePayload);

    // Make sure foo exists
    expect(foo);

    expect(foo.type).toEqual(exampleType);
    expect(foo.payload).toEqual(examplePayload);
  });

  test('makeClone properly returns a clone of the action', async () => {
    const foo = new Action(exampleType, examplePayload);
    const copy = foo.makeClone();

    expect(copy);
    expect(copy.type).toEqual(exampleType);
    expect(copy.payload).toEqual(examplePayload);
  });

  test('a clone of an action can also make clones', async () => {
    const foo = new Action(exampleType, examplePayload);
    const copy = foo.makeClone();
    const copy2 = copy.makeClone();

    expect(copy2);
    expect(copy2.type).toEqual(exampleType);
    expect(copy2.payload).toEqual(examplePayload);

  });

  test('setting parameters to null makes a clone with null values', async () => {
    const foo = new Action(null, null);
    const copy = foo.makeClone();

    expect(copy);
    expect(copy.type).toBeFalsy();
    expect(copy.payload).toBeFalsy();
  });
});
