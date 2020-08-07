import createAttribute from 'create/attribute';
import createText from 'create/text';
import isEventProp from 'utils/is-event-prop';
import mount from 'mount';
import registerEvent from 'utils/register-event';

export default function(vNode) {
  if (typeof vNode === 'string') {
    return createText(vNode);
  }

  const {
    tag,
    props,
    children
  } = vNode,
    $el = document.createElement(tag);

  if (props) {
    for (const [prop, value] of Object.entries(props)) {
      if (isEventProp(prop)) {
        registerEvent($el, prop, value);
      } else if (value === false) {
        $el.removeAttribute(prop);
      } else {
        $el.setAttributeNode(createAttribute(prop, value));
      }
    }
  }

  if (children) {
    for (const child of children) {
      mount(child, $el);
    }
  }

  return $el;
}