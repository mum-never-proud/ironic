import diff from 'diff';
import mount from 'mount';
import zip from 'utils/zip';

export default function(oldChildren, newChildren) {
  const childPatches = [],
    additionalPatches = [];

  oldChildren.forEach((oldChild, i) => childPatches.push(diff(oldChild, newChildren[i])));

  for (const newChild of newChildren.slice(oldChildren.length)) {
    additionalPatches.push($node => {
      return mount(newChild, $node);
    });
  }

  return $parent => {
    for (const [childPatch, $childNode] of zip(childPatches, $parent.childNodes)) {
      childPatch($childNode);
    }

    for (const additionalPatch of additionalPatches) {
      additionalPatch($parent);
    }

    return $parent;
  };
}
