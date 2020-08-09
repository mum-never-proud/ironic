/* eslint-disable no-proto */
import createObject from '../src/utils/create-object';

describe('create object', () => {
  it('should create a clean object', () => expect(createObject({}).__proto__).toBe.undefined);
});
