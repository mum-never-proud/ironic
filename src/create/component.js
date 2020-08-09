import createElement from 'create/element';
import mount from 'mount';

export default function component({ tag, props }, $parent) {
  const Component = tag;
  const vComponent = new Component(props);

  vComponent._parentElement = $parent;
  vComponent._currentNode = vComponent.render();
  vComponent._currentElement = createElement(vComponent._currentNode);

  return mount(vComponent._currentElement, $parent);
}
