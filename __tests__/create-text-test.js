import createText from '../src/create/text';

describe('create text', () => {
  it('should create text node', () => {
    expect(createText('hello')).toBeInstanceOf(Text);
  });
});
