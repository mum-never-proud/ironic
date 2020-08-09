import { toHaveAttribute } from '@testing-library/jest-dom/matchers';
import diffProps from '../src/diff/props';
import mount from '../src/mount';
import v from '../src/v';

expect.extend({ toHaveAttribute });

describe('diff props', () => {
  let rootElement;

  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    rootElement = document.getElementById('root');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should remove the prop', () => {
    const props = { id: 'para' };
    const vNode = v('p', { props });
    const p = mount(vNode, rootElement);

    expect(p).not.toHaveAttribute('id');

    const patch = diffProps(props, {});

    patch(p);

    expect(p).not.toHaveAttribute('id');
  });

  it('should append the child', () => {
    const props = {};
    const vNode = v('p', { props });
    const p = mount(vNode, rootElement);

    expect(p).not.toHaveAttribute('id');

    const patch = diffProps(props, { id: 'para' });

    patch(p);

    expect(p).toHaveAttribute('id');
  });
});
