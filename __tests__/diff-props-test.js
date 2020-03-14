import { toHaveAttribute } from '@testing-library/jest-dom/matchers'
import diffProps from '../src/diff/props';
import mount from '../src/mount';
import v from '../src/v';

expect.extend({ toHaveAttribute });

describe('diff props', function() {
  let rootElement;

  beforeEach(function() {
    document.body.innerHTML = '<div id="root"></div>';
    rootElement = document.getElementById('root');
  });

  afterEach(function() {
    document.body.innerHTML = '';
  });

  it('should remove the prop', function () {
    const props = { id: 'para' },
      vNode = v('p', { props }),
      p = mount(vNode, rootElement);

    expect(p).toHaveAttribute('id');

    const patch = diffProps(props, {});

    patch(p);

    expect(p).not.toHaveAttribute('id');
  });

  it('should append the child', function () {
    const props = {},
      vNode = v('p', { props }),
      p = mount(vNode, rootElement);

    expect(p).not.toHaveAttribute('id');

    const patch = diffProps(props, { id: 'para' });

    patch(p);

    expect(p).toHaveAttribute('id');
  });
});
