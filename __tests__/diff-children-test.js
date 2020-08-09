import diffChildren from '../src/diff/children';
import mount from '../src/mount';
import v from '../src/v';

describe('diff children', () => {
  let rootElement;

  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    rootElement = document.getElementById('root');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should remove the child', () => {
    const children = [v('p')];
    const vNode = v('p', null, ...children);
    const p = mount(vNode, rootElement);

    expect(rootElement.childNodes.length).toEqual(1);

    const patch = diffChildren(children, []);

    patch(p);

    expect(p.childNodes.length).toEqual(0);
  });

  it('should append the child', () => {
    const vNode = v('p', { children: [] });
    const p = mount(vNode, rootElement);

    expect(p.childNodes.length).toEqual(0);

    const patch = diffChildren([], [v('p')]);

    patch(p);

    expect(p.childNodes.length).toEqual(1);
  });
});
