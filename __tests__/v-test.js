import v from '../src/v';

describe('v', function() {
  it('should init props and children with default values if undefined', function() {
    const node = v('p');

    expect(node.children).toEqual([]);
    expect(node.props).toEqual({});
  });
});
