import createComponent from 'create/component';
import createElement from 'create/element';
import createText from 'create/text';
import exceptionMessage from 'utils/exceptions';

export default function($el, $parent) {
  if (!$el) {
    throw Error(`child is ${exceptionMessage.INVALID_DOM_NODE}`);
  }

  if (!$parent || !$parent.nodeType) {
    throw Error(`parent is ${exceptionMessage.INVALID_DOM_NODE}`);
  }

  if ($el.nodeType) {
    return $parent.appendChild($el);
  }

  if (typeof $el.tag === 'function') {
    return createComponent($el, $parent);
  }

  if (typeof $el === 'object') {
    return $parent.appendChild(createElement($el));
  }

  return $parent.appendChild(createText($el));
}
