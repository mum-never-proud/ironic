import createAttribute from '../src/create/attribute';

describe('create attribute', () => {
  it('should create attribute node', () => {
    const node = createAttribute('style', 'color: red');

    expect(node.constructor.name).toEqual('Attr');
  });
});
