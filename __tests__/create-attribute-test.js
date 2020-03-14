import createAttribute from '../src/create/attribute';

describe('create attribute' , function () {
  it('should create attribute node' , function () {
    const node = createAttribute('style', 'color: red');

    expect(node.constructor.name).toEqual('Attr');
  });
});
