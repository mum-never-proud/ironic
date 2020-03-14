import createText from '../src/create/text';

describe('create text', function() {
  it('should create text node', function () {
    expect(createText('hello')).toBeInstanceOf(Text);
  });
});