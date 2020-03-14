import diffChildren from '../src/diff/children';
import mount from '../src/mount';
import v from '../src/v';

describe('diff children', function() {
  let rootElement;

  beforeEach(function() {
    document.body.innerHTML = '<div id="root"></div>';
    rootElement = document.getElementById('root');
  });

  afterEach(function() {
    document.body.innerHTML = '';
  });

  it('should remove the child', function () {
    const children = [v('p')],
      vNode = v('p', { children }),
      p = mount(vNode, rootElement)

    expect(rootElement.childNodes.length).toEqual(1);

    const patch = diffChildren(children, []);

    patch(p);

    expect(p.childNodes.length).toEqual(0);
  });

  it('should append the child', function () {
    const vNode = v('p', { children: [] }),
      p = mount(vNode, rootElement)

    expect(p.childNodes.length).toEqual(0);

    const patch = diffChildren([], [v('p')]);

    patch(p);

    expect(p.childNodes.length).toEqual(1);
  });
});
