import createComponent from '../src/create/component';
import Component from '../src/Component';
import v from '../src/v';

class App extends Component {
  render() {
    return v('p');
  }
}

describe('create component', () => {
  let rootElement;

  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    rootElement = document.getElementById('root');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should create a component', () => {
    const ele = createComponent(v(App), rootElement);

    expect(rootElement.childNodes.length).toEqual(1);
    expect(rootElement.childNodes[0]).toEqual(ele);
  });

  it('should throw error when parent is not a valid DOM element', () => {
    expect(() => createComponent(v(App), 'rootElement')).toThrowError();
  });

  it('should throw error when child is not a valid DOM element', () => {
    expect(() => createComponent(v(null), rootElement)).toThrowError();
  });
});
