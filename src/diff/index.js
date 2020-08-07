import createElement from 'create/element';
import diffChildren from 'diff/children';
import diffProps from 'diff/props';
import mount from 'mount';

export default function diff(oldVNode, newVNode) {
  if (typeof oldVNode === 'string'
    || typeof newVNode === 'string'
    || oldVNode.tag !== newVNode.tag) {
    if (oldVNode !== newVNode) {
      return ($node) => {
        const $newNode = createElement(newVNode);

        $node.replaceWith($newNode);

        return $newNode;
      };
    }

    return ($node) => $node;
  }

  if (!newVNode) {
    return ($node) => $node.remove();
  }

  if (!oldVNode) {
    return ($node) => mount(createElement(newVNode), $node);
  }

  const patchProps = diffProps(oldVNode.props, newVNode.props);
  const patchChildren = diffChildren(oldVNode.children, newVNode.children);

  return ($node) => {
    patchProps($node);
    patchChildren($node);

    return $node;
  };
}
