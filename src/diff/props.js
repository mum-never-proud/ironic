import createAttribute from 'create/attribute';

export default function(oldAttrs, newAttrs) {
  const patches = [];

  for (const [attr, value] of Object.entries(newAttrs)) {
    patches.push($node => {
      $node.setAttributeNode(createAttribute(attr, value));
    });
  }

  for (const attr in oldAttrs) {
    if (!(attr in newAttrs)) {
      patches.push($node => {
        $node.removeAttribute(attr);

        return $node;
      });
    }
  }

  return $node => {
    for (const patch of patches) {
      patch($node);
    }

    return $node;
  };
}
