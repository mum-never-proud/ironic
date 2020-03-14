import createAttribute from 'create/attribute';
import mount from 'mount';
import createText from 'create/text';

export default function(vNode) {
  if (typeof vNode === 'string') {
    return createText(vNode);
  }

  const {
    tag,
    props = {},
    children = []
  } = vNode,
    $el = document.createElement(tag);

  for (const [prop, value] of Object.entries(props)) {
    $el.setAttributeNode(createAttribute(prop, value));
  }

  for (const child of children) {
    mount(child, $el);
  }

  return $el;
}