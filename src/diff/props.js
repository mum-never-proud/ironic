import createAttribute from 'create/attribute';
import isEventProp from 'utils/is-event-prop';
import registerEvent from 'utils/register-event';

export default function props(oldAttrs = {}, newAttrs = {}) {
  const patches = [];

  for (const [attr, value] of Object.entries(newAttrs)) {
    patches.push(($node) => {
      if (isEventProp(attr)) {
        registerEvent($node, attr, value);
      } else if (value === false) {
        $node.removeAttribute(attr);
      } else {
        $node.setAttributeNode(createAttribute(attr, value));
      }
    });
  }

  for (const attr in oldAttrs) {
    if (!(attr in newAttrs)) {
      patches.push(($node) => {
        $node.removeAttribute(attr);

        return $node;
      });
    }
  }

  return ($node) => {
    for (const patch of patches) {
      patch($node);
    }

    return $node;
  };
}
