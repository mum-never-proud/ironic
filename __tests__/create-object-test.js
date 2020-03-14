import createObject from '../src/utils/create-object';

describe('create object', function() {
  it('should create a clean object', function() {
    expect(createObject({}).__proto__).toBe.undefined;
  });
});