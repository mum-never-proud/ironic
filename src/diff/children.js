import diff from 'diff';
import mount from 'mount';
import zip from 'utils/zip';

export default function diffChildren(oldChildren = [], newChildren = []) {
  const childPatches = [];
  const additionalPatches = [];

  oldChildren.forEach((oldChild, i) => childPatches.push(diff(oldChild, newChildren[i])));

  for (const newChild of newChildren.slice(oldChildren.length)) {
    additionalPatches.push(($node) => mount(newChild, $node));
  }

  return ($parent) => {
    for (const [childPatch, $childNode] of zip(childPatches, $parent.childNodes)) {
      childPatch($childNode);
    }

    for (const additionalPatch of additionalPatches) {
      additionalPatch($parent);
    }

    return $parent;
  };
}
