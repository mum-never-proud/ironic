import v from '../src/v';

describe('v', () => {
  it('should init props and children with default values if undefined', () => {
    const node = v('p');

    expect(node.children).toEqual([]);
    expect(node.props).toEqual({});
  });
});
