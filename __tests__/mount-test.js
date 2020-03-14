import createElement from '../src/create/element';
import Component from '../src/Component';
import mount from '../src/mount';
import v from '../src/v';

describe('mount', function() {
  let rootElement;

  beforeEach(function() {
    document.body.innerHTML = '<div id="root"></div>';
    rootElement = document.getElementById('root');
  });

  afterEach(function() {
    document.body.innerHTML = '';
  });

  it('mount the DOM node', function () {
    mount(createElement(v('p')), rootElement);

    expect(rootElement.childNodes.length).toEqual(1);
    expect(rootElement.childNodes[0]).toBeInstanceOf(HTMLParagraphElement);
  });

  it('mount the text node', function () {
    mount('hello', rootElement);

    expect(rootElement.childNodes.length).toEqual(1);
    expect(rootElement.childNodes[0]).toBeInstanceOf(Text);
  });

  it('mount the vNode', function () {
    mount(v('p'), rootElement);

    expect(rootElement.childNodes.length).toEqual(1);
    expect(rootElement.childNodes[0]).toBeInstanceOf(HTMLParagraphElement);
  });

  it('mount the component', function () {
    class App extends Component {
      render() {
        return v('p');
      }
    }

    mount(v(App), rootElement);

    expect(rootElement.childNodes.length).toEqual(1);
    expect(rootElement.childNodes[0]).toBeInstanceOf(HTMLParagraphElement);
  });

  it('should throw error when element is undefined or null', function() {
    expect(() => mount(null, rootElement)).toThrowError();
  });

  it('should throw error when parent is not a DOM node', function() {
    expect(() => mount(v('p'), 'invalid-parent')).toThrowError();
  });
});
