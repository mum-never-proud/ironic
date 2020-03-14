import createComponent from '../src/create/component';
import Component from '../src/Component';
import v from '../src/v';

class App extends Component {
  render() {
    return v('p');
  }
}

describe('create component', function () {
  let rootElement;

  beforeEach(function() {
    document.body.innerHTML = '<div id="root"></div>';
    rootElement = document.getElementById('root');
  });

  afterEach(function() {
    document.body.innerHTML = '';
  });

  it('should create a component', function() {
    const ele = createComponent(v(App), rootElement);

    expect(rootElement.childNodes.length).toEqual(1);
    expect(rootElement.childNodes[0]).toEqual(ele);
  });

  it('should throw error when parent is not a valid DOM element', function() {
    expect(() => createComponent(v(App), 'rootElement')).toThrowError();
  });

  it('should throw error when child is not a valid DOM element', function() {
    expect(() => createComponent(v(null), rootElement)).toThrowError();
  });
});